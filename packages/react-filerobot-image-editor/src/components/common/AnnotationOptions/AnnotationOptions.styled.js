/** External Dependencies */
import styled from 'styled-components';
import Label from '@scaleflex/ui/core/label';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-top: 4px;
  gap: 8px;
  flex-wrap: wrap;

  ${({ isPhoneScreen }) =>
    isPhoneScreen &&
    `
    max-width: 315px;
    padding: 0;
  `}

  svg {
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  }
`;

const StyledOptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  gap: 4px;

  .FIE_annotation-option-triggerer {
    padding: 6px;
  }
`;

const StyledOptionPopupContent = styled.div`
  background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#27272A' : '#27272A'};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  overflow: visible;

  ${({ isDarkMode, position }) =>
    position &&
    `
    display: grid;
    grid-template-columns: repeat(4, auto);
    padding: 0;
    margin-top: 8px;
    box-shadow: 0px 1px 2px ${isDarkMode ? '#27272A' : '#27272A'};
    `}

  ${({ disablePadding }) =>
    disablePadding &&
    `
      padding: 0;
    `}

  * {
    font-family: 'Roboto', sans-serif;
  }
`;

const StyledSpacedOptionFields = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ preventFlex }) =>
    preventFlex &&
    `
      display: block;

      label {
        margin-bottom: 8px;
      }
  `}
`;

const StyledTwoColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledColumn = styled.div`
  &:not(:first-child) {
    margin-left: 12px;
  }
`;

const StyledIconWrapper = styled.div(
  ({ isDarkMode, theme, addThinBorder, secondaryIconColor, active, watermarkTool }) => `
    cursor: pointer;
    padding: ${watermarkTool ? '6px' : '8px 12px'};
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    svg {
      vertical-align: middle;
      margin: 0 auto;
    }

    ${addThinBorder
      ? `border: 0.5px solid ${isDarkMode ? '#FFFFFF' : '#000000'};
        padding: 8px 8px;`
      : ''
    };
    color: ${secondaryIconColor ? isDarkMode ? '#FFFFFF' : '#000000' : '#000000'};

    ${active &&
    `
      border-radius: 4px;
      border-color: ${isDarkMode ? '#1518AD' : '#1518AD'};
      background-color: ${isDarkMode ? '#1518AD' : '#1518AD'};

        * {
          color: ${isDarkMode ? '#FFFFFF' : '#000000'};
        }
      `
    }

    &:hover {
      background-color: ${isDarkMode ? '#1518AD' : '#1518AD'};
    }
  `,
);

const StyledIconLabel = styled(Label)`
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
`;

export {
  StyledTwoColumnsContainer,
  StyledColumn,
  StyledIconWrapper,
  StyledSpacedOptionFields,
  StyledOptions,
  StyledOptionsWrapper,
  StyledOptionPopupContent,
  StyledIconLabel,
};
