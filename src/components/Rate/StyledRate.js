/**
 *
 * StyledRate
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

import personActive from '../../assets/img/icon_person_active.svg';
import personInactive from '../../assets/img/icon_person_inactive.svg';

const StyledRate = styled.div`
  .rating {
    &-item {
      margin-bottom: 0;
      &::before {
        background-image: url(${personInactive});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        display: block;
        content: '';
      }
    }
    &-input {
      position: absolute;
      visibility: hidden;
    }
  }
  .rating-item-selected::before {
    background-image: url(${personActive});
  }
  &.rating-item-clickable {
    cursor: pointer;
    .rating:hover .rating-item::before {
      color: ${colors.darkBlue};
    }
    .rating-item:hover ~ .rating-item::before {
      color: ${colors.lightGrey};
    }
  }
  &.small {
    .rating-item {
      padding-left: 4px;
      &::before {
        width: 9px;
        height: 9px;
      }
    }
  }
  &.big {
    .rating-item {
      padding-left: 9px;
      &::before {
        width: 21px;
        height: 21px;
        @media (min-width: ${sizes.tablet}) {
          width: 42px;
          height: 42px;
        }
      }
    }
  }
`;

export default StyledRate;
