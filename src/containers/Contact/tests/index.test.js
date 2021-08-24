import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Contact from '../index';

describe('<Contact />', () => {
  it('should not crash', () => {
    shallow(<Contact />);
  });
});
