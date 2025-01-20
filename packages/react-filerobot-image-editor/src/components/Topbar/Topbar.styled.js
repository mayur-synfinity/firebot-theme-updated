/** External Dependencies */
import styled from 'styled-components';
import Button from '@scaleflex/ui/core/button';
import IconButton from '@scaleflex/ui/core/icon-button';
import Label from '@scaleflex/ui/core/label';
import { CrossButton, InputGroup, SelectGroup } from '@scaleflex/ui/core';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledTopbar = styled.div`
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#a1a1aa' : '#464646'};

  [data-phone='true'] & {
    padding: 6px 6px 4px 6px;

    ${({ isPhoneScreen }) =>
    isPhoneScreen &&
    `
      padding: 12px 12px 0px;
      gap: 12px;
    `}
  }
`;

const StyledMainButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  order: 1;
`;

const StyledControlButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  order: 3;
  gap: 4px;
`;

const StyledHistoryButton = styled(IconButton)`
  margin: ${({ margin }) => margin ?? '0 4px'};

  svg {
    color: ${({ isDarkMode, theme: { palette }, disabled }) =>
    !disabled ? isDarkMode ? '#A1A1AA' : '#A1A1AA' : palette[PC.IconsMuted]};
  }

  &:hover {
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#27272A' : '#F0F0F0'} !important;
     
    svg {
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    }
   }
`;

const StyledZoomingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const StyledDimensionsLabel = styled(Label)`
  flex-shrink: 0;
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  ${({ theme: { typography } }) => typography.font[FV.LabelMedium]};
`;

const StyledSmallButton = styled(IconButton)`
  padding: 8px;

  &:hover {
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#27272A' : '#F0F0F0'} !important;
     
    svg {
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    }
   }

  svg {
    color: ${({ isDarkMode, theme: { palette }, showBackButton }) =>
    showBackButton ? isDarkMode ? '#A1A1AA' : '#A1A1AA' : isDarkMode ? '#A1A1AA' : '#A1A1AA'};
  }
`;

const StyledFlexCenterAlignedContainer = styled.div`
  width: ${({ showBackButton }) => (showBackButton ? '318px' : '384px')};
  height: 32px;
  display: block;
  width: 100%;
  order: 4;
  ${({ reverseDirection }) =>
    reverseDirection ? 'flex-direction: row-reverse' : ''};

  @media (min-width: 761px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    order: 2;
  }
`;

const StyledZoomPercentageLabel = styled(Label)`
  cursor: pointer;
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  ${({ theme: { typography } }) => typography.font[FV.InputMd]};
`;

const StyledBackButtonLabel = styled.span`
  ${({ theme: { typography } }) => typography.font[FV.ButtonMdEmphasis]};
`;

const StyledCloseButton = styled(CrossButton)`
  padding: 8px;
  z-index: 111;
`;

const StyledSaveButton = styled(Button)`
  padding: 4px 12px;
`;

const StyledFileNameInput = styled(InputGroup)`
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
  border: 1px solid ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
   
   &:focus-within, &:hover {
    border: 1px solid ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
   }
`;

const StyledFileExtensionSelect = styled(SelectGroup)`
  margin-top: 16px;

  .SfxSelect-root {
    border: 1px solid ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
     
     svg{
     color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
     }
  }
`;

const StyledQualityWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const StyledResizeOnSave = styled.div`
  margin-top: 16px;
  width: 100%;
`;

const StyledResizeOnSaveLabel = styled(Label)`
  margin-bottom: 4px;

  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
`;

const StyledHistoryButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const StyledImageOptionsButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: ${({ isPhoneScreen }) =>
    isPhoneScreen ? 'space-between' : 'center'};
`;

const StyledMenuIconButton = styled(IconButton)`
  @media (min-width: 761px) {
    display: none;
  }
`;

const StyledDimensionsButtons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButton,
  StyledZoomingWrapper,
  StyledSmallButton,
  StyledZoomPercentageLabel,
  StyledBackButtonLabel,
  StyledCloseButton,
  StyledSaveButton,
  StyledFileNameInput,
  StyledFileExtensionSelect,
  StyledQualityWrapper,
  StyledResizeOnSave,
  StyledDimensionsLabel,
  StyledMainButtonsWrapper,
  StyledControlButtonsWrapper,
  StyledHistoryButtons,
  StyledImageOptionsButtons,
  StyledMenuIconButton,
  StyledDimensionsButtons,
  StyledResizeOnSaveLabel,
};
