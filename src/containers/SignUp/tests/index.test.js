import React from 'react';
import { shallow } from 'enzyme';

import SignUp from '../index';

describe('<SignUp />', () => {
  it('it should not crash', () => {
    shallow(<SignUp />);
  });
});
