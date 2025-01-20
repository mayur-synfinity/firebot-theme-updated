/** External Dependencies */
import styled from 'styled-components';
import Slider from '@scaleflex/ui/core/slider';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

const StyledSlider = styled(Slider)`
  width: ${({ width }) => width || '104px'};
  max-width: ${({ width }) => width || '104px'};
  user-select: none;
  padding: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? '' : '16px')};
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1518AD' : '#1518AD'};

  .SfxSlider-thumb {
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1518AD' : '#1518AD'};

  .SfxSlider-Track {
    height: 2px;
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#A1A1AA' : '#A1A1AA'};
  }

  .SfxSlider-rail {
    height: 2px;
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#A1A1AA' : '#A1A1AA'} !important;
  }

  .SfxSlider-label{
   color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
   background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
  }
`;

export { StyledSlider };
