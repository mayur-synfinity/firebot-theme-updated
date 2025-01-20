/** External Dependencies */
import styled, { css } from 'styled-components';
import modalTitle from '@scaleflex/ui/core/modal-title';
import { Modal, ModalActions } from '@scaleflex/ui/core';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledModal = styled(Modal)`
  width: ${({ width }) => width || '300px'};
  background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
  max-width: unset;
`;

const StyledModalTitle = styled(modalTitle)(
  ({ isDarkMode, theme, isWarning }) => css`
    padding-bottom: 0;

    .SfxModalTitle-Icon {
      background-color: ${isDarkMode ? '#27272A' : '#F0F0F0'};
    }

    .SfxModalTitle-LabelPrimary {
      margin-bottom: 24px;
      ${theme.typography.font[FV.TitleH3]};
      color: ${isDarkMode ? '#FFFFFF' : '#000000'};
    }

    .SfxCrossButton-root {
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#A1A1AA' : '#A1A1AA'} !important;
      &:hover {
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
       background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
     }
    }

    .SfxModalTitle-LabelSecondary {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#A1A1AA' : '#A1A1AA'} !important;
      ${theme.typography.font[FV.TextLarge]};
      text-align: center;
    }
  `,
);

const StyledModalActions = styled(ModalActions)`
  gap: 12px;
  padding: 24px;

  .FIE-save-modal-cancel-button {
    border: 1px solid #fc4a4a !important;
    border-radius: 9999px;
    padding: .8em 1.5em;
    flex: 1;
    margin: 0;
    line-height: 1;
    color: #fc4a4a !important;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;

    &:hover {
     border: 1px solid red;
     color: red;
     background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
    }
    span {
     font-weight: 400 !important;
     font-size: 16px !important;
    } 
  }

  .FIE-save-modal-save-button {
    border: none;
    border-radius: 9999px;
    padding: .8em 1.5em;
    flex: 1;
    margin: 0;
    line-height: 1;
    color: #FFFFFF;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1518AD' : '#1518AD'};

    &:hover {
     background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#3A28BD' : '#3A28BD'};

    span {
     font-weight: 400 !important;
     font-size: 16px !important;
    } 
  }

  .SfxButton-root {
    border: none;
    border-radius: 9999px;
    padding: .8em 1.5em;
    flex: 1;
    margin: 0;
    line-height: 1;
    }

    span {
     font-weight: 400 !important;
     font-size: 16px !important;
    }
  }
`;

export { StyledModal, StyledModalTitle, StyledModalActions };
