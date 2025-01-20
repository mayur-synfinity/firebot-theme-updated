/** External Dependencies */
import { Input, Label } from '@scaleflex/ui/core';
import styled from 'styled-components';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledHSVOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;

  .SfxSlider-root {
    min-width: 100px;
  }

  ${({ isPhoneScreen }) =>
    isPhoneScreen &&
    `
      flex-direction: column;

      .SfxSlider-root {
        min-width: 230px;
      }
    `}
`;

const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSliderLabel = styled(Label)`
  ${({ theme }) => theme.typography.font[FV.LabelExtraSmallUp]};
  color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#000000'};
`;

const StyledSliderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSliderInput = styled(Input)`
  display: inline-block;
  width: 50px;
  height: 28px;
  padding: 6px;
  margin-left: 10px;
  border: 1px solid ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#000000'};;
  color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#000000'};
  background-color: ${({ isDarkMode }) => isDarkMode ? '#27272A' : '#F0F0F0'};

  &:focus-within, &:hover{
  background-color: ${({ isDarkMode }) => isDarkMode ? '#27272A' : '#F0F0F0'} !important;
  border: 1px solid ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
  color: ${({ isDarkMode }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
  }

  .SfxInput-Base {
    text-align: center;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export {
  StyledHSVOptions,
  StyledSliderContainer,
  StyledSliderLabel,
  StyledSliderWrapper,
  StyledSliderInput,
};
