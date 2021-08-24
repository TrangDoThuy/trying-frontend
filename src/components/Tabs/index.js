/**
 *
 * Tabs
 *
 */

import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import { Form, Col, Row } from 'react-bootstrap';
import classnames from 'classnames';

import fetch from 'cross-fetch';
import StyledTabs from './StyledTabs';
import Informations from '../Informations';
import Comments from '../Comments';

import AuthContext from '../../context/auth-context';

function Tabs({ project, selected, toggleTab, tabs }) {
  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [currentProject, updateProject] = useState(project);

  const auth = useContext(AuthContext);
  const { userId } = auth;

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const toggle = () => setModal(!modal);

  const submitHandler = event => {
    setModal(!modal);
    event.preventDefault();

    const requestBody = {
      query: `mutation{
         createRemark(input:{data:{project:"${project.id}",users_permissions_user:"${userId}",phone:"${phone}",amount:"${amount}",time: "${time}"}}){
           remark{
             id
             users_permissions_user{
               username
               email
             }
           }
         }
       }`,
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
      .catch(err => {
        console.log(err);
      });
  };

  const checkButton = () => {
    const investorsNo = currentProject.remarks.length;
    if (investorsNo >= 5) {
      return false;
    }
    let check = true;
    currentProject.remarks.forEach(function(remark) {
      if (userId === remark.users_permissions_user.id) {
        check = false;
      }
      return check;
    });

    return check;
  };

  const fetchRemark = () => {
    const requestBody = {
      query: `query  {
        project(id: ${project.id}) {
          id
          address
          category {
            name
          }
          description
          amount
          location
          cover {
            url
          }
          name
          note
          locale
          localizations {
            id
            locale
          }
          investment_terms {
            id
            item
            detail
          }
          phone
          noteDetails {
            note
            count
          }
          comments {
            id
            note
            content
            created_at
            author {
              username
              picture {
                url
              }
            }
          }
          remarks {
            id
            phone
            amount
            time
            created_at
            users_permissions_user {
              id
              username
              email
              picture {
                url
              }
            }
          }
          website
        }
    
      }`,
    };

    console.log('hihihihihihihi');

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
        updateProject(resData.data.project);
      })
      .catch(err => {
        console.log(err);
      });

    checkButton();
  };

  const handlePhoneNumberChange = event => {
    setPhone(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const button = checkButton();

  useEffect(fetchRemark, [modal]);

  return (
    <>
      <StyledTabs />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Investment Interest</ModalHeader>
        <ModalBody>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={5} htmlFor="phoneNumber">
                Phone number
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={handlePhoneNumberChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={5} htmlFor="amount">
                Investment amount
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  name="amount"
                  id="amount"
                  onChange={handleAmountChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label sm={5} column htmlFor="time">
                Best time to contact
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  type="text"
                  name="time"
                  id="time"
                  onChange={handleTimeChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="danger" onClick={submitHandler}>
            Confirm
          </Button>{' '}
        </ModalFooter>
      </Modal>
      <div className="tabs-wrapper">
        <Nav tabs>
          <Container>
            {tabs.map(tab => {
              return (
                <NavItem key={tab}>
                  <NavLink
                    className={classnames({ active: selected === tab })}
                    onClick={() => {
                      toggleTab(tab);
                    }}
                  >
                    <span title={tab}>
                      {tab === 'informations' ? (
                        <p>Information</p>
                      ) : (
                        <p>Investment Interests</p>
                      )}
                    </span>
                  </NavLink>
                </NavItem>
              );
            })}
            {button && (
              <Button outline color="danger" onClick={toggle}>
                Invest in project
              </Button>
            )}
          </Container>
        </Nav>

        <TabContent activeTab={`${selected}`} id="tab-content">
          {tabs.map(tab => {
            return (
              <TabPane tabId={tab} className={`${tab}-pane`} key={tab}>
                <Container>
                  <Row>
                    <Col sm="12">
                      {tab === 'informations' ? (
                        <Informations project={currentProject} />
                      ) : (
                        <Comments project={currentProject} />
                      )}
                    </Col>
                  </Row>
                </Container>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    </>
  );
}

Tabs.defaultProps = {
  project: {},
  selected: 'informations',
  toggleTab: () => {},
  tabs: [],
};

Tabs.propTypes = {
  project: PropTypes.object,
  selected: PropTypes.string,
  toggleTab: PropTypes.func,
  tabs: PropTypes.array,
};

export default Tabs;
