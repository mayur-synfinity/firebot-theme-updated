/** External Dependencies */
import styled from 'styled-components';
import Label from '@scaleflex/ui/core/label';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledTabItem = styled.div(
  ({ isDarkMode, theme }) => `
    width: 72px;
    min-height: 66px;
    padding: 4px 2px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: ${isDarkMode ? '#000000' : '#FFFFFF'};
    align-items: center;
    justify-content: center;

    [data-phone='true'] & {
      margin-bottom: 0;
      height: 50px;
      border-radius: 0;
    }

    svg {
      color: ${isDarkMode ? '#FFFFFF' : '#000000'};
    }

    &,
    * {
      cursor: pointer;
    }

    &:hover {
      background: ${isDarkMode ? '#333334' : '#BDBDBD'};
    }

    &[aria-selected='true'] {
      background: ${isDarkMode ? '#333334' : '#BDBDBD'};

      * {
        color: ${isDarkMode ? '#FFFFFF' : '#000000'};
      }
    }
  `,
);

const StyledTabItemLabel = styled(Label)(
  ({ isDarkMode, theme }) => `
  color: ${isDarkMode ? '#FFFFFF' : '#000000'};
  font-size: 12px;
  line-height: 14px;

  span {
    white-space: normal;
  }

  [data-phone='true'] & {
    font-size: 10px;
  }
`,
);

export { StyledTabItem, StyledTabItemLabel };
