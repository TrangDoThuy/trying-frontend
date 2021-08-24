/**
 *
 * Information
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { projectDefaultShape, projectShape } from '../../shapes/project';

import H1 from '../H1';
import NotePaper from '../NotePaper';
import InvestmentTerms from '../InvestmentTerms';
import Grid from '../Grid';

import classes from './index.module.css';

/* eslint-disable camelcase */
function Information({
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
          subtitle: address,
          multipleLine: true,
        },
        { subtitle: 'Category', text: category.name },
        // { subtitle: 'Phone number', text: phone },
      ],
    },
  ];

  return (
    <>
      <H1 className={classes.title}>Information</H1>
      {/* <p className="description" id={classes.description}>
        {description}
      </p> */}
      <Grid>
        <li className="column Information-card">
          <InvestmentTerms investmentTerms={investment_terms} />
        </li>
        {infos.map(info => (
          <li key={info.title} className="column Information-card">
            <NotePaper Information={info} />
          </li>
        ))}
      </Grid>
    </>
  );
}

Information.defaultProps = {
  project: projectDefaultShape,
};

Information.propTypes = {
  ...projectShape,
};

export default Information;
