/**
 *
 * Card
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { projectDefaultShape, projectShape } from '../../shapes/project';

import StyledCard from './StyledCard';
import CardSection from '../CardSection';
import Img from '../Img';

function Card({ project, onClick }) {
  const { id, cover } = project;
  const coverURL = cover[0] ? cover[0].url : '';

  return (
    <StyledCard onClick={() => onClick(id)} className="clickable-card">
      <div className="img-wrapper">
        <Img
          src={`https://hualiang-finmonster-dashboard.herokuapp.com${coverURL}`}
          alt="cover"
        />
      </div>
      <CardSection project={project} />
    </StyledCard>
  );
}

Card.defaultProps = {
  ...projectDefaultShape,
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  ...projectShape,
};

export default Card;
