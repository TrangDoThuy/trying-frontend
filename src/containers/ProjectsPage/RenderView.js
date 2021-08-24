import React from 'react';
import PropTypes from 'prop-types';

import Paging from '../../components/Paging';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import H1 from '../../components/H1';
import Img from '../../components/Img';

import img from '../../assets/img/ooops.png';

const RenderView = ({
  onClick,
  onPagingChange,
  projects,
  rest: {
    projectsConnection: {
      aggregate: { count },
    },
  },
  start,
  range,
}) => {
  const renderPagination = () => {
    return (
      <Paging
        onChange={onPagingChange}
        count={count}
        range={range}
        page={start}
      />
    );
  };

  return (
    <div className="projects-wrapper">
      <H1>Investment Projects from Hualiang</H1>
      <Grid>
        {projects.map(project => (
          <li className="column" key={project.id}>
            <Card key={project.id} project={project} onClick={onClick} />
          </li>
        ))}
      </Grid>
      {count > range && renderPagination()}
      {projects.length < 1 && (
        <div className="ooops-wrapper">
          <div className="ooops-img">
            <Img src={img} alt="oops" />
          </div>
          <p className="ooops-title">Ooops!</p>
          <p className="ooops-text">
            Seems like there are no projects matching those filters.
          </p>
        </div>
      )}
    </div>
  );
};

RenderView.defaultProps = {
  onClick: () => {},
  onPagingChange: () => {},
  range: 0,
  projects: [],
  rest: {},
  start: 0,
};

RenderView.propTypes = {
  onClick: PropTypes.func,
  onPagingChange: PropTypes.func,
  range: PropTypes.number,
  projects: PropTypes.array,
  rest: PropTypes.object,
  start: PropTypes.number,
};

export default RenderView;
