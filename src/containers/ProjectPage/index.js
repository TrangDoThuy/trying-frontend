/**
 *
 * ProjectPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { GET_PROJECT } from '../../queries';
import Query from '../../components/Query';

import RenderView from './RenderView';
import Footer from '../../components/Footer';

function ProjectPage(props) {
  const {
    match: {
      params: { id },
    },
  } = props;

  /* istanbul ignore next */
  const renderView = ({ project, ...rest }) => {
    return <RenderView project={project} rest={rest} {...props} />;
  };

  return (
    <div>
      <div className="page-wrapper" id="project-page">
        <Query
          query={GET_PROJECT}
          render={renderView}
          variables={{ id, commentsFilter: { project: id } }}
        />
      </div>
      <Footer />
    </div>
  );
}

ProjectPage.defaultProps = {};
ProjectPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProjectPage;
