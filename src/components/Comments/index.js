/**
 *
 * Comments
 *
 */

import React, { Component } from 'react';

import equal from 'fast-deep-equal';
import StyledComments from './StyledComments';
import Comment from '../Comment';
import H1 from '../H1';
import Rate from '../Rate';

import AuthContext from '../../context/auth-context';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.remarks = props.project.remarks;
    this.updateRemarks = this.updateRemarks.bind(this);
  }

  componentDidMount() {
    this.updateRemarks();
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.project.remarks, prevProps.project.remarks)) {
      this.remarks = this.props.project.remarks;
      this.forceUpdate();
    }
  }

  updateRemarks() {
    this.remarks = this.props.project.remarks;
  }

  static contextType = AuthContext;

  render() {
    const { userId } = this.context;
    return (
      <>
        <StyledComments />
        <div></div>
        <H1>Investment Interests </H1>
        <div className="comments-main">
          <div className="comments-bkgd grey-bkgd" />
          <div className="comments-content">
            <p className="comments-title">Investors</p>
            <Rate value={this.remarks.length} clickable={false} size="big" />
            <p className="comments-value">{this.remarks.length}/5</p>
          </div>
        </div>
        <div className="comments-list">
          <div className="comments-bkgd white-bkgd" />
          <div className="comments-content">
            {this.remarks
              .filter(function(remark) {
                if (userId === '103') {
                  return true;
                }
                if (remark.users_permissions_user.id === userId) {
                  return true;
                }
                return false;
              })
              .map(remark => (
                <Comment {...remark} key={remark.id} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Comments;
