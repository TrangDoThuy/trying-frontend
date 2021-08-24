import PropTypes from 'prop-types';

import { categoryDefaultShape, categoryShape } from './category';
import { commentDefaultShape, commentShape } from './comment';

const projectDefaultShape = {
  category: categoryDefaultShape,
  cover: [],
  description: null,
  location: '_1st',
  id: null,
  name: null,
  note: null,
  investment_terms: null,
  amount: null,
  comments: [commentDefaultShape],
  __typename: 'Project',
};

const projectShape = {
  category: PropTypes.shape(categoryShape),
  cover: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      __typename: PropTypes.string,
    }),
  ),
  description: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  note: PropTypes.number,
  investment_terms: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        subtitle: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  ]),
  amount: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
  __typename: PropTypes.string,
};

export { projectDefaultShape, projectShape };
