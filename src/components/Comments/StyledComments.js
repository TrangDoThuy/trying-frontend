import { createGlobalStyle } from 'styled-components';

import sizes from '../../assets/styles/sizes';
import colors from '../../assets/styles/colors';
import fonts from '../../assets/styles/fonts';

const StyledComments = createGlobalStyle`
  .comments-main {
    padding-top: ${sizes.margin * 1.8}px;
    
    p {
      text-align: center;
      line-height: normal;
    }
    .comments-title {
      font-size: 16px;
      color: ${colors.mediumGrey};
    }
    .comments-value {
      ${fonts.bold};
      font-size: 56px;
      line-height: 54px;
      color: ${colors.black};
    }
    .comments-count {
      font-size: 12px;
      color: ${colors.darkGrey};
    }
    .rating {
      display: table;
      margin: 0 auto;
    }
    .comments-gauges {
      ul {
        padding-top: ${sizes.margin * 1.1}px;
        padding-bottom: ${sizes.margin * 2.1}px;
      }
      li {
        margin-top: ${sizes.margin * 0.4}px;
      }
      p {
        width: 36%;
        text-align: right;
        font-size: 12px;
      }
      .progress-wrapper {
        width: 64%;
        height: 8px;
        max-width: 259px;
        padding-left: ${sizes.margin * 1.5}px;
        .progress-content {
          background-color: white;
          width: 100%;
          height: 100%;
        }
      }
      .progress-wrapper, p {
        display: inline-table;
        vertical-align: middle;
      }
    }
  }
  .comments-list {
    background-color: white;
  }
  @media (min-width: ${sizes.tablet}) {
    .comments-main, .comments-list {
      display: inline-block;
      vertical-align: top;
    }
    .comments-main {
      width: 40%;
      padding-top: 0;
      background-color: ${colors.greyBkdg};
      .comments-title {
        margin-bottom: ${sizes.margin * 3.2}px;
      }
      .comments-value {
        margin-top: ${sizes.margin * 2.8}px;
      }
      .comments-count {
        font-size: 16px;
        margin-top: ${sizes.margin * 1.6}px;
        margin-bottom: ${sizes.margin * 2.4}px;
      }
    }
    .comments-list {
      width: 60%;
      padding-top: ${sizes.margin * 0.2}px;
      padding-left: ${sizes.margin * 3.4}px;
      .comments-title {
        margin-bottom: ${sizes.margin * 0.8}px;
      }
    }
  }
  @media (min-width: ${sizes.desktop}) {
    .comments-main {
      .comments-gauges {
        ul {
          width: fit-content;
          overflow: auto;
          margin: 0 auto;
          li {
            overflow: auto;
            display: table;
            float: right;
            clear: both;
            p, .progress-wrapper {
              vertical-align: middle;
            }
            p {
              width: fit-content;
            }
            .progress-wrapper  {
              width: 259px;
            }
          }
        }
      }
    }
  }
`;

export default StyledComments;
