/**
 *
 * Comment
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';

import StyledComment from './StyledComment';
import personInactive from '../../assets/img/icon_person_inactive.svg';
/* eslint-disable camelcase */
// import Rate from '../Rate';
import Img from '../Img';

function Comment({ created_at, phone, amount, time, users_permissions_user }) {
  return (
    <StyledComment>
      <div className="comment-wrapper">
        <div className="img-wrapper">
          {users_permissions_user.picture ? (
            <Img
              src={`https://hualiang-finmonster-dashboard.herokuapp.com${users_permissions_user.picture.url}`}
              alt={users_permissions_user.username}
            />
          ) : (
            <Img src={personInactive} alt={users_permissions_user.username} />
          )}
        </div>
        <div className="infos-wrapper">
          <p className="username">{users_permissions_user.username}</p>
          <p className="published">
            Published {moment().diff(moment(created_at), 'days')} days ago
          </p>
          {/* <div className="rate-wrapper">
             <Rate min={0} max={5} value={note} />
           </div> */}
        </div>

        <Container className="comment">
          <Row>
            <Col sm={4}>Phone number:</Col>
            <Col sm={5}>{phone}</Col>
          </Row>
          <Row>
            <Col sm={4}>Email address:</Col>
            <Col sm={5}>{users_permissions_user.email}</Col>
          </Row>
          <Row>
            <Col sm={4}>Investment amount:</Col>
            <Col sm={5}>{amount}</Col>
          </Row>
          <Row>
            <Col sm={4}>Best time to contact:</Col>
            <Col sm={5}>{time}</Col>
          </Row>
          <Row>
            <Col sm={4}>Phone number:</Col>
            <Col sm={5}>{phone}</Col>
          </Row>
        </Container>
      </div>
    </StyledComment>
  );
}

Comment.defaultProps = {
  phone: null,
  amount: null,
  time: null,

  created_at: null,
  users_permissions_user: {
    username: '',
    email: '',
    picture: {
      url: null,
    },
  },
  // note: null,
};

Comment.propTypes = {
  phone: PropTypes.string,
  amount: PropTypes.string,
  time: PropTypes.string,
  created_at: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  users_permissions_user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  // note: PropTypes.number,
};

export default Comment;
