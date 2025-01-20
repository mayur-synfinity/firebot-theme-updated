/** External Dependencies */
import styled from 'styled-components';
import { IconButton, RotationSlider } from '@scaleflex/ui/core';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

const StyledRotationOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledRotationSlider = styled(RotationSlider)`
  .SfxRotationSlider-control {
    width: 1px;
    height: 10px;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};

    &:after {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
      box-shadow: unset;
    }
    &:before {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
      box-shadow: unset;
    }
  }

  .SfxRotationSlider-mark,
  .SfxRotationSlider-small-dot-wrapper {
    padding: 0;

    .SfxRotationSlider-mark-text {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
      top: 10px;
    }

    .SfxRotationSlider-big-dot {
      width: 4px;
      height: 4px;
      background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    }

    .SfxRotationSlider-small-dot {
      width: 1px;
      height: 1px;
      background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    }
  }

  .SfxRotationSlider-list {
    gap: 4px;
  }
`;

const StyledRotateButton = styled(IconButton)``;

export { StyledRotationOptions, StyledRotationSlider, StyledRotateButton };
