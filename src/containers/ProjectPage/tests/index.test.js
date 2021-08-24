import React from 'react';
import { shallow } from 'enzyme';

import ProjectPage from '../index';

const props = { history: {}, match: { params: { id: '1' } } };

describe('<ProjectPage />', () => {
  it('should not crash', () => {
    shallow(<ProjectPage {...props} />);
  });
});
