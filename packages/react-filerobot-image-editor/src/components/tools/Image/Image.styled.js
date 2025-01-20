/** External Dependencies */
import styled from 'styled-components';

const StyledImagesGallery = styled.div`
  background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? 'red' : 'black'};
  box-shadow: 0px 1px 2px ${({ isDarkMode, theme: { palette } }) => isDarkMode ? 'red' : 'black'};
  border-radius: 4px;
  padding: 8px;
  overflow-y: auto;
  max-height: 350px;
  max-width: 300px;
`;

const StyledImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 4px;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid ${({ isDarkMode, theme: { palette } }) => isDarkMode ? 'red' : 'black'};
  user-select: none;

  :hover {
    border-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? 'red' : 'black'};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { StyledImagesGallery, StyledImageWrapper };
