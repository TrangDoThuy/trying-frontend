import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Row, Modal } from 'react-bootstrap';
import fetch from 'cross-fetch';
import Recaptcha from 'react-google-invisible-recaptcha';
import { MdErrorOutline } from 'react-icons/md';
import classes from './index.module.css';
import AuthContext from '../../context/auth-context';

class Login extends Component {
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();

    this.submitHandler = this.submitHandler.bind(this);
    this.toggleFailure = this.toggleFailure.bind(this);
    this.onResolved = this.onResolved.bind(this);

    this.state = { failModal: false };
  }

  toggleFailure = () => {
    this.setState(prevState => ({ failModal: !prevState.failModal }));
  };

  submitHandler = event => {
    event.preventDefault();
    this.recaptcha.execute();
  };

  onResolved = () => {
    console.log('human detected');
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    // if (email.trim().length === 0 || password.trim().length === 0) {
    //   return;
    // }

    const requestBody = {
      query: `mutation{
        login(input:{ identifier: "${email}",password:"${password}",provider:"local"}){
          user{
            id
          }
          jwt
        }
      }
      `,
    };

    const url = `https://hualiang-finmonster-dashboard.herokuapp.com/graphql`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        if (resData.data) {
          this.context.login(
            resData.data.login.jwt,
            resData.data.login.user.id,
          );
        } else {
          this.toggleFailure();
          console.log('hihihihihih');
        }
      })
      .catch(err => {
        console.log(err);
        this.toggleFailure();
      });
  };

  static contextType = AuthContext;

  render() {
    return (
      <div className="page-wrapper" id="about-page">
        <div className={classes.informationWrapper}>
          <div className="container">
            <Modal show={this.state.failModal} onHide={this.toggleFailure}>
              <Modal.Body>
                <div className={classes.icon_failure}>
                  <MdErrorOutline />
                </div>
                <div className={classes.titleModal}>Error</div>
                <div className={classes.bodyModal}>
                  The email and password you entered did not match our records.
                </div>
                <div className={classes.bodyModal}>
                  Please double-check and try again.
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button color="danger" onClick={this.toggleFailure}>
                  Close
                </Button>{' '}
              </Modal.Footer>
            </Modal>
            <div className={classes.subHeader1_Red}>Login</div>
            <Form onSubmit={this.submitHandler}>
              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Email Address
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="email"
                    required
                    name="email"
                    ref={this.emailEl}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="password"
                    required
                    name="password"
                    ref={this.passwordEl}
                  />
                </Col>
              </Form.Group>

              <div className={classes.lineLogin}>
                <div>Not registered yet?</div>
                <Link to="/sign-up" className={classes.createAccount}>
                  Create an account
                </Link>
              </div>
              <Button
                variant="primary"
                type="submit"
                className={classes.submit}
              >
                Login
              </Button>
              <Recaptcha
                ref={ref => {
                  this.recaptcha = ref;
                }}
                sitekey="6LdcMwYcAAAAAD-iMiOl01X7dHzup7F8RYDW4jqS"
                onResolved={this.onResolved}
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
