/**
 *
 * Informations
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { projectDefaultShape, projectShape } from '../../shapes/project';

import H1 from '../H1';
import NotePaper from '../NotePaper';
import InvestmentTerms from '../InvestmentTerms';
import Grid from '../Grid';

// import classes from './index.module.css';

/* eslint-disable camelcase */
function Informations({
  project: {
    address,
    category,
    // location,
    investment_terms,
    // phone,
    // website,
    // description,
  },
}) {
  const infos = [
    // {
    //   type: 'list',
    //   title: 'Details',
    //   infos: [
    //     { subtitle: 'Cooking', text: category.name },
    //     {
    //       subtitle: 'Neighborhood',
    //       text: location.includes('_') ? location.replace('_', '') : location,
    //     },
    //   ],
    // },
    {
      type: 'list',
      title: 'Location',
      infos: [
        {
          // subtitle: address,
          text: address,
          multipleLine: true,
        },
        { subtitle: 'Category', text: category.name },
        // { subtitle: 'Phone number', text: phone },
      ],
    },
  ];

  return (
    <>
      <H1>Information</H1>
      {/* <p className="description" id={classes.description}>
        {description}
      </p> */}
      <Grid>
        <li className="column informations-card">
          <InvestmentTerms investmentTerms={investment_terms} />
        </li>
        {infos.map(info => (
          <li key={info.title} className="column informations-card">
            <NotePaper informations={info} />
          </li>
        ))}
      </Grid>
    </>
  );
}

Informations.defaultProps = {
  project: projectDefaultShape,
};

Informations.propTypes = {
  ...projectShape,
};

export default Informations;
