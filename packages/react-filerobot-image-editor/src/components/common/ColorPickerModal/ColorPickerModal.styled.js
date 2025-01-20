import { Modal, ModalActions as SfxModalActions } from '@scaleflex/ui/core';
import styled from 'styled-components';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

const ColorPickerModal = styled(Modal)`
  max-width: 350px;
`;

const ColorPickerWrap = styled.div`
  .SfxColorPicker-root {
    max-width: 100%;
    padding: 0;
    box-shadow: none;
    border: none;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
    ${({ hideModalTitle }) => hideModalTitle && 'padding-top: 12px;'}
  }

  .SfxColorPicker-action {
    display: flex;
    gap: 12px;

    .SfxColorPicker-select {
      width: 100px;
    }
    .SfxInput-root {
      width: 190px !important;
      background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#27272A' : '#F0F0F0'} !important;
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    }
  }

  .SfxColorPicker-icon {
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  }

  .SfxColorPicker-range-picker,
  .SfxColorPicker-bar-wrapper {
    width: 100%;
  }
`;

const ModalActions = styled(SfxModalActions)`
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
     border: 1px solid red !important;
     color: red;
     background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
    }
    span {
     font-weight: 400 !important;
     font-size: 16px !important;
    } 
  }

  .SfxButton-root {
    border-radius: 9999px;
    padding: .8em 1.5em;
    flex: 1;
    margin: 0;
    line-height: 1;
    color: #FFFFFF;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1518AD' : '#1518AD'};

    &:hover {
     background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#3A28BD' : '#3A28BD'};
    }

    span {
     font-weight: 400 !important;
     font-size: 16px !important;
    }
  }
`;

const Styled = {
  ColorPickerModal,
  ColorPickerWrap,
  ModalActions,
};

export default Styled;
