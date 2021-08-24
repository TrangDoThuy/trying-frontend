import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import Img from '../../Img';
import Card from '../index';
import StyledCard from '../StyledCard';

describe('<Card />', () => {
  let props;

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      project: {
        id: '1',
        cover: [{ url: '/test.png' }],
        category: { name: null },
        location: '_1st',
        comments: [],
      },
    };
  });

  it('should not crash', () => {
    mount(<Card {...props} />);
  });

  it('the <Img /> component should have the src props equals to `undefined` if no cover is given', () => {
    props.project.cover = [];
    const wrapper = mount(<Card {...props} />);
    const img = wrapper.find(Img);

    expect(img.prop('src')).toBe(
      `https://hualiang-finmonster-dashboard.herokuapp.com`,
    );
  });

  it('the <Img /> component should have the src props equals to `undefined/test.png` if a cover prop is given', () => {
    const wrapper = mount(<Card {...props} />);
    const img = wrapper.find(Img);

    expect(img.prop('src')).toBe(
      `https://hualiang-finmonster-dashboard.herokuapp.com/test.png`,
    );
  });

  it('should handle the onClick event correctly', () => {
    const wrapper = mount(<Card {...props} />);
    const element = enzymeFind(wrapper, StyledCard);
    element.simulate('click');

    expect(props.onClick).toHaveBeenCalledWith('1');
  });
});
