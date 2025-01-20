/** External Dependencies */
import styled, { css } from 'styled-components';
import IconButton from '@scaleflex/ui/core/icon-button';
import InputGroup from '@scaleflex/ui/core/input-group';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledResizeWrapper = styled.div`
  display: flex;
  justify-content: ${({ alignment }) => alignment || 'center'};
  align-items: flex-end;
  gap: 3px;
  flex-wrap: wrap;
`;

const StyledResizeInput = styled(InputGroup)(
  ({ isDarkMode, theme }) => css`
    width: 106px;
    max-width: 106px;
    margin-top: 4px;
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
    border: 1px solid ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
   
   &:focus-within, &:hover {
    border: 1px solid ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;

    span {
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    }
   }

    .SfxInput-Base {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    }

    span {
      color: ${isDarkMode ? '#FFFFFF' : '#000000'};
      ${theme.typography.font[FV.LabelMedium]};
    }
  `,
);

const StyledRatioLockIcon = styled(IconButton)`
  &:focus, &:hover {
   background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
  }
  svg {
    margin-bottom: 1px;
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
  }
`;

const StyledResetButton = styled(IconButton)`
  margin-left: 12px;
`;

export {
  StyledResizeWrapper,
  StyledResizeInput,
  StyledRatioLockIcon,
  StyledResetButton,
};
