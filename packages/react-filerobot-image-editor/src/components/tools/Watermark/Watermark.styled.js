/** External Dependencies */
import styled from 'styled-components';

const StyledWatermarkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  overflow: hidden;

  ${({ noWrap }) => (noWrap ? 'flex-wrap: nowrap;' : '')};
`;

const StyledControlsWrapper = styled.div`
  margin-bottom: 8px;
`;

const StyledWatermarkGalleryItem = styled.div(
  ({ isDarkMode, theme }) => `
    padding: 6px 4px;
    border: 1px solid ${isDarkMode ? '#A1A1AA' : '#A1A1AA'};
    width: fit-content;
    height: 32px;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;

    :hover {
      background: ${isDarkMode ? '#27272A' : '#F0F0F0'};
    }

    &[aria-selected='true'] {
      background: ${isDarkMode ? '#27272A' : '#F0F0F0'};
      border-color: ${isDarkMode ? '#FFFFFF' : '#000000'};
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  `,
);

export {
  StyledWatermarkWrapper,
  StyledControlsWrapper,
  StyledWatermarkGalleryItem,
};
