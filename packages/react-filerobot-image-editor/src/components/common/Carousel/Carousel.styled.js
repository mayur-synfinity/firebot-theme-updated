/** External Dependencies */
import styled, { css } from 'styled-components';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

const StyledCarouselWrapper = styled.div`
  max-width: 680px;
  min-width: 150px;
  position: relative;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`;

const StyledCarousel = styled.ul`
  padding: 0;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledCarouselItem = styled.li`
  padding: 4px;
  display: inline-block;
  list-style-type: none;
  user-select: none;
`;

const arrowsCommonStyles = css`
  position: absolute;
  top: 0;
  height: 100%;
  width: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  svg {
    color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  }
`;

const StyledPrevArrowWrapper = styled.div`
  ${arrowsCommonStyles}
  left: 0;
  justify-content: flex-start;

   svg {
    color:rgb(208, 208, 232) !important;
    &:hover {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    }
   }
`;

const StyledNextArrowWrapper = styled.div`
  ${arrowsCommonStyles}
  right: 0;
  justify-content: flex-end;
  
  svg {
    color:rgb(208, 208, 232) !important;
    &:hover {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    }
   }
  }
`;

export {
  StyledCarouselWrapper,
  StyledCarousel,
  StyledCarouselItem,
  StyledPrevArrowWrapper,
  StyledNextArrowWrapper,
};
