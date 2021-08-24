import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';
import Link from '../../components/Link';

const RenderView = ({
  project,
  rest: {
    commentsConnection: {
      aggregate: { count },
    },
  },
  history,
  match: {
    params: { content, id },
  },
}) => {
  const { cover, localizations } = project;
  const tabs = ['informations', 'comments'];

  const toggle = tab => {
    if (content !== tab) {
      history.push(`${id}/${tab}`);
    }
  };

  return (
    <div>
      <div className="intro-wrapper">
        <Grid>
          <li className="col-6">
            <CardSection project={{ ...project }} hasLink history={history} />
          </li>
          <li style={{ float: 'right' }}>
            {localizations &&
              localizations.map(locale => {
                return (
                  <Link
                    className="localeLinks"
                    url={`/${locale.id}/informations`}
                  >
                    {locale.locale}
                  </Link>
                );
              })}
          </li>
        </Grid>
      </div>

      <div className="slider-wrapper">
        <Slider slides={cover} />
      </div>
      <div className="informations-wrapper">
        <Tabs
          project={{ ...project, count }}
          toggleTab={toggle}
          selected={content}
          tabs={tabs}
        />
      </div>
    </div>
  );
};

RenderView.defaultProps = {
  project: {
    cover: [],
    location: null,
    amount: null,
  },
};

RenderView.propTypes = {
  project: PropTypes.shape({
    cover: PropTypes.array,
    location: PropTypes.string,
    amount: PropTypes.string,
  }),
  history: PropTypes.object.isRequired,
};

export default RenderView;
