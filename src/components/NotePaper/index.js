/**
 *
 * NotePaper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import H4 from '../H4';
import StyledNotePaper from './StyledNotePaper';

import classes from './index.module.css';

function NotePaper({ informations: { title, infos, type } }) {
  return (
    <StyledNotePaper>
      <H4>
        <span title={title}>{title}</span>
      </H4>
      <ul>
        {type === 'list' &&
          infos.map(info => (
            <li key={info.subtitle} className={classes.row}>
              <div className={classes.subtitle}>{info.subtitle}</div>
              <div className={classes.column}>{info.text}</div>
            </li>
          ))}
        {type === 'html' && parse(infos)}
      </ul>
    </StyledNotePaper>
  );
}

NotePaper.defaultProps = {
  informations: {
    title: null,
    infos: [
      {
        subtitle: null,
        text: null,
      },
    ],
    type: 'list',
  },
};

NotePaper.propTypes = {
  informations: PropTypes.shape({
    title: PropTypes.string,
    infos: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          subtitle: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
    ]),
    type: PropTypes.string,
  }),
};

export default NotePaper;
