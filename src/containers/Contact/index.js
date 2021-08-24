/**
 *
 * About
 *
 */

import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import {
  Col,
  Row,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import classes from './index.module.css';
import Img from '../../components/Img';
import H1 from '../../components/H1';
import Footer from '../../components/Footer';

import img from '../../assets/img/About_us_image.png';

function Contact() {
  const [successModal, setSuccessModal] = useState(false);
  const toggleSuccess = () => setSuccessModal(!successModal);

  const [failureModal, setFailureModal] = useState(false);
  const toggleFailure = () => setFailureModal(!failureModal);
  const submitHandler = event => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_56k7gxp',
        'contact_us',
        event.target,
        'user_nW1IeJdc2YbCyINEtKAeo',
      )
      .then(
        result => {
          console.log(result);
          toggleSuccess();
        },
        error => {
          console.log(error);
          toggleFailure();
        },
      );
  };
  return (
    <div>
      <div className="page-wrapper" id="about-page">
        <div className="cover-wrapper">
          <Img src={img} alt="cover" />
        </div>
        <Modal isOpen={successModal} toggle={toggleSuccess}>
          <ModalBody>
            <div className={classes.icon_success}>
              <FaRegCheckCircle />
            </div>
            <div className={classes.titleModal}>Thank you</div>
            <div className={classes.bodyModal}>
              Your form has been submitted successfully.
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={toggleSuccess}>
              Close
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Modal isOpen={failureModal} toggle={toggleFailure}>
          <ModalBody>
            <div className={classes.icon_failure}>
              <MdErrorOutline />
            </div>
            <div className={classes.titleModal}>Error</div>
            <div className={classes.bodyModal}>Your submission has failed.</div>
            <div className={classes.bodyModal}>
              Please go back and try again.
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleFailure}>
              Close
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Container>
          <H1 className={classes.titleBold}>Contact Us</H1>
          <div>
            <Row>
              <Col>
                <div className={classes.leftCol}>
                  <div className={classes.title}>
                    Hua Liang Financial Holding Limited
                  </div>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className={classes.subtitle}>Address:</div>
                      <div className={classes.textFollow}>
                        Rm 2701-04, 27/F, China Insurance Group Building
                      </div>
                      <div className={classes.text}>
                        {' '}
                        141 Des Voeux Road, Central, Hong Kong
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className={classes.subtitle}>Phone:</div>
                      <div className={classes.text}>(852) 2561 1666</div>
                    </li>
                    <li className="list-group-item">
                      <div className={classes.subtitle}>Email:</div>
                      <div className={classes.text}>info@hualiang.com.hk</div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className={classes.rightCol}>
                  <div className={classes.title}>Send an query</div>
                  <div className={classes.note}>
                    If you have any questions or comments, please complete the
                    form below.
                  </div>
                  <Form onSubmit={submitHandler}>
                    {' '}
                    <Row form>
                      <Col md={6}>
                        <FormGroup controlId="formGridEmail">
                          <Label className={classes.label}>First Name</Label>
                          <Input type="text" required name="first_name" />
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <FormGroup controlId="formGridPassword">
                          <Label className={classes.label}>Last Name</Label>
                          <Input type="text" required name="last_name" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label className={classes.label}>Email</Label>
                          <Input type="email" required name="email" />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label className={classes.label}>
                            Company/Organization
                          </Label>
                          <Input type="text" required name="company" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label className={classes.label}>
                        Comments or Enquiries
                      </Label>
                      <Input type="textarea" required name="comments" />
                    </FormGroup>
                    <Button
                      variant="primary"
                      type="submit"
                      className={classes.submit}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
