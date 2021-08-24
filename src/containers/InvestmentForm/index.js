/**
 *
 * Blog
 *
 */

import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import emailjs from 'emailjs-com';
import classes from './index.module.css';
import H1 from '../../components/H1';
import Footer from '../../components/Footer';

export default function InvestmentForm() {
  const [successModal, setSuccessModal] = useState(false);
  const toggleSuccess = () => setSuccessModal(!successModal);

  const [failureModal, setFailureModal] = useState(false);
  const toggleFailure = () => setFailureModal(!failureModal);

  const submitHandler = event => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_56k7gxp',
        'investment_project_form',
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
        <div className={classes.informationWrapper}>
          <div className="container">
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
                <div className={classes.bodyModal}>
                  Your submission has failed.
                </div>
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
            <H1 className={classes.subHeader1_Red}>
              Investment Project Details
            </H1>
            <Form onSubmit={submitHandler}>
              <div className={classes.title}>Company Details</div>
              <Row form>
                <Col md={6}>
                  <FormGroup controlId="formGridEmail">
                    <Label>Company Name</Label>
                    <Input type="text" required name="company_name" />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup controlId="formGridPassword">
                    <Label>Website</Label>
                    <Input type="text" required name="website" />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup controlId="formGridState">
                    <Label>Industry</Label>
                    <Input
                      type="select"
                      name="industry"
                      required
                      id="exampleSelect"
                    >
                      <option>Energy</option>
                      <option>Materials</option>
                      <option>Industrials</option>
                      <option>Consumer Discretionary</option>
                      <option>Consumer Staples</option>
                      <option>Health Care</option>
                      <option>Financials</option>
                      <option>Information Technology</option>
                      <option>Communication Services</option>
                      <option>Utilities</option>
                      <option>Real Estate</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup controlId="formGridPassword">
                    <Label>Geographical Coverage</Label>
                    <Input type="text" required name="geographical_coverage" />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup form controlId="formGroupEmail">
                <Label>Short Summary</Label>
                <Input type="textarea" required name="short_summary" />
              </FormGroup>

              <FormGroup controlId="formFile" form>
                <Label>Upload Image</Label>
                <Input type="file" name="upload_image" />
              </FormGroup>

              <div className={classes.title}>Contact Information</div>
              <Row form>
                <Col md={6}>
                  <FormGroup controlId="formGridEmail">
                    <Label>Name</Label>
                    <Input type="text" required name="contact_person" />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup controlId="formGridPassword">
                    <Label>Title</Label>
                    <Input type="text" required name="title" />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup controlId="formGridEmail">
                    <Label>Email Address</Label>
                    <Input type="email" required name="email" />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup controlId="formGridPassword">
                    <Label>Phone Number</Label>
                    <Input type="text" required name="phone_number" />
                  </FormGroup>
                </Col>
              </Row>

              <div className={classes.title}>Financial Information</div>
              <FormGroup row>
                <Label column sm={5}>
                  Last-Twelve-Month Revenue
                </Label>
                <Col sm={7}>
                  <Input type="text" required name="LTM_revenue" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label column sm={5}>
                  Net Profit
                </Label>
                <Col sm={7}>
                  <Input type="text" required name="net_profit" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label column sm={5}>
                  Total Asset
                </Label>
                <Col sm={7}>
                  <Input type="text" required name="total_asset" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label column sm={5}>
                  Debt
                </Label>
                <Col sm={7}>
                  <Input type="text" required name="debt" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label column sm={5}>
                  Capital Raised
                </Label>
                <Col sm={7}>
                  <Input type="text" required name="capital_raised" />
                </Col>
              </FormGroup>

              <div className={classes.title}>Funding Needed</div>
              <FormGroup row>
                <Label column sm={5}>
                  Request Amount
                </Label>
                <Col sm={7}>
                  <Input type="text" required name="request_amount" />
                </Col>
              </FormGroup>

              <FormGroup form controlId="formGroupEmail">
                <Label>Purpose</Label>
                <Input type="textarea" required name="purpose" />
              </FormGroup>

              <Row form>
                <Col md={6}>
                  <FormGroup controlId="formGridEmail">
                    <Label>Debt/Equity or Hybrid</Label>
                    <Input
                      type="select"
                      name="debt_equity_hybrid"
                      id="exampleSelect"
                      required
                    >
                      <option>Debt</option>
                      <option>Equity</option>
                      <option>Hybrid</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup controlId="formGridPassword">
                    <Label>Tenor of funding</Label>
                    <Input type="text" name="tenor" />
                    <FormText className="text-muted">
                      N/A if it is equity
                    </FormText>
                  </FormGroup>
                </Col>
              </Row>

              <Button
                variant="primary"
                type="submit"
                className={classes.submit}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
