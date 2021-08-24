import React from 'react';
import { shallow } from 'enzyme';

import RenderView from '../RenderView';

describe('<RenderView />', () => {
  let props;

  beforeEach(() => {
    props = {
      location: { search: '' },
      history: { push: jest.fn() },
      match: { params: { id: '1', content: 'informations' } },
      rest: { commentsConnection: { aggregate: { count: 1 } } },
      project: {
        cover: [],
        location: '_1',
        amount: null,
        category: { name: 'test' },
      },
    };
  });

  it('should not crash', () => {
    shallow(<RenderView {...props} />);
  });
});
