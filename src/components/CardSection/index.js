/**
 *
 * CardSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { projectDefaultShape, projectShape } from '../../shapes/project';

import H1 from '../H1';
import H4 from '../H4';
// import Price from '../Price';
import Rate from '../Rate';

import StyledCardSection from './StyledCardSection';
import classes from './index.module.css';

function CardSection({ project, hasLink, history }) {
  // const { category, location, id, name, note, amount, description } = project;
  const { id, name, note, description, category, location } = project;

  /* istanbul ignore next */
  const goToComments = () => {
    history.push(`/${id}/comments`);
    const element = document.getElementById('tab-content');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledCardSection className={hasLink && 'banner'}>
      <div className="left-infos">
        {!hasLink ? <H4>{name}</H4> : <H1>{name}</H1>}
        <p className="description" id={classes.subtitle}>
          {/* <Price value={amount} /> */}
          {category && <span>&nbsp;•&nbsp;{category.name}</span>}
          <span>
            &nbsp;•&nbsp;
            {location.includes('_') ? location.replace('_', '') : location}
          </span>
        </p>
        <div className={classes.description}>{description}</div>
      </div>
      <div className="right-infos">
        <Rate value={Math.floor(note)} clickable={false} />
        {hasLink && (
          <div className="link-wrapper">
            <button type="button" onClick={goToComments} className="link">
              <p>See all interests</p>
            </button>
          </div>
        )}
      </div>
    </StyledCardSection>
  );
}

CardSection.defaultProps = {
  project: projectDefaultShape,
  hasLink: false,
};

CardSection.propTypes = {
  project: PropTypes.shape(projectShape),
  hasLink: PropTypes.bool,
};

export default CardSection;
