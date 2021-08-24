import PropTypes from 'prop-types';

const commentShape = {
  content: PropTypes.string,
  note: PropTypes.number,
  __typename: PropTypes.string,
};

const commentDefaultShape = {
  content: null,
  note: null,
  __typename: null,
};

export { commentDefaultShape, commentShape };
