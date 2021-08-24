/**
 *
 * H1
 *
 */

import styled from 'styled-components';

import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const H2 = styled.h2`
  ${fonts.bold}
  font-size: 14px;
  color: ${colors.black};
  line-height: normal;
  @media (min-width: ${sizes.tablet}) {
    font-size: 25px;
  }
`;

export default H2;
