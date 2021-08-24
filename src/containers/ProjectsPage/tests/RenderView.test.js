import React from 'react';
import { shallow } from 'enzyme';
/* eslint-disable import/extensions */
import RenderView from '../RenderView';

describe('<RenderView />', () => {
  let props;

  beforeEach(() => {
    props = {
      location: { search: '' },
      history: {},
      match: { params: { id: '1' } },
      onClick: jest.fn(),
      onPagingChange: jest.fn(),
      rest: { projectsConnection: { aggregate: { count: 1 } } },
    };
  });

  it('should not crash', () => {
    shallow(<RenderView {...props} />);
  });

  it('should use the defaultProps', () => {
    const {
      defaultProps: { onClick, onPagingChange },
    } = RenderView;

    expect(onClick).toBeDefined();
    expect(onClick({ preventDefault: jest.fn() })).toBe(undefined);

    expect(onPagingChange).toBeDefined();
    expect(onPagingChange({ preventDefault: jest.fn() })).toBe(undefined);
  });

  it('should render some tabs', () => {
    props.projects = [
      {
        id: 1,
        name: 'first project',
      },
      {
        id: 2,
        name: 'second project',
      },
      {
        id: 3,
        name: 'third project',
      },
    ];

    const wrapper = shallow(<RenderView {...props} />);
    const project = wrapper.find('li');

    expect(project).toHaveLength(3);
  });
});
