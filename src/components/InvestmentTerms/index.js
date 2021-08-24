/**
 *
 * InvestmentTerms
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import H4 from '../H4';
import StyledNotePaper from '../NotePaper/StyledNotePaper';

import classes from './index.module.css';

function InvestmentTerms({ investmentTerms }) {
  return (
    <StyledNotePaper>
      <H4>
        <span title="Financial Terms">Financial Terms</span>
      </H4>
      <ul>
        {investmentTerms.map(investmentTerm => (
          <li key={investmentTerm.id}>
            <p className={classes.item}>{investmentTerm.item}</p>
            <p className={classes.detail}>{investmentTerm.detail}</p>
          </li>
        ))}
      </ul>
    </StyledNotePaper>
  );
}

InvestmentTerms.defaultProps = {
  investmentTerms: [],
};

InvestmentTerms.propTypes = {
  investmentTerms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      item: PropTypes.string.required,
      detail: PropTypes.string,
    }),
  ),
};

export default InvestmentTerms;
