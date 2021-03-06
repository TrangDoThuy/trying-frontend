/**
 *
 * StyledComment
 *
 */

import styled from 'styled-components';

import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
import fonts from '../../assets/styles/fonts';

const StyledComment = styled.div`
  padding-top: 20px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${colors.greyBorder};
  .comment-wrapper {
    position: relative;
  }
  .img-wrapper {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }
  .infos-wrapper {
    position: relative;
    width: 100%;
    padding: 0 ${sizes.margin * 6.5}px 0 ${sizes.margin * 5}px;
    .username {
      text-transform: capitalize;
      font-size: 12px;
      ${fonts.bold};
    }
    .published {
      font-size: 8px;
      line-height: 1;
      color: ${colors.darkGrey};
      margin-top: ${sizes.margin * 0.5}px;
    }
    .rate-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      .rating {
        line-height: 17px;
      }
    }
  }
  .comment {
    margin-top: ${sizes.margin * 1.5}px;
    p {
      ${fonts.reg};
      font-size: 13px;
      line-height: 20px;
      color: ${colors.black};
      font-family: 'Source Sans Pro', sans-serif;
    }
  }
  @media (min-width: ${sizes.tablet}) {
    .img-wrapper {
      width: 74px;
      height: 74px;
    }
    .infos-wrapper {
      padding: 0 ${sizes.margin * 6.5}px 0px ${sizes.margin * 10.6}px;
      .username {
        font-size: 20px;
      }
      .published {
        margin-top: 0;
      }
    }
    .comment {
      padding-left: ${sizes.margin * 10.6}px;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 13px;
    }
  }
`;

export default StyledComment;
