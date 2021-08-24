import React from 'react';
import { shallow } from 'enzyme';

import InvestmentForm from '../index';

describe('<InvestmentForm />', () => {
  it('it should not crash', () => {
    shallow(<InvestmentForm />);
  });
});
