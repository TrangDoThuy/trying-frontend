import React from 'react';
import { shallow } from 'enzyme';

import Login from '../index';

describe('<Login />', () => {
  it('it should not crash', () => {
    shallow(<Login />);
  });
});
