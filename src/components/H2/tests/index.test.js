import React from 'react';
import { shallow } from 'enzyme';

import H2 from '../index';

describe('<H2 />', () => {
  it('should not crash', () => {
    shallow(<H2 />);
  });
});
