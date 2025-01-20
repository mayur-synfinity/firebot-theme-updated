/** External Dependencies */
import { createGlobalStyle } from 'styled-components';

/** Internal Dependencies */
import { ROOT_CONTAINER_CLASS_NAME } from 'utils/constants';

const FontsFaces = createGlobalStyle`
  .${ROOT_CONTAINER_CLASS_NAME} {
    font-family: ${({ theme = {} }) => theme.typography?.fontFamily || 'Arial'};
  }

  .SfxModal-Wrapper * {
    font-family: ${({ theme = {} }) => theme.typography?.fontFamily || 'Arial'};

    .SfxLabel-text {
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    }

    .SfxSelect-Label {
     color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    }

    .SfxArrowTick-root {
     color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
    }

    .SfxModal-root {
     background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
    }

     .FIE-save-modal-cancel-button {
        border: 1px solid #fc4a4a;
        border-radius: 9999px;
        padding: .8em 1.5em;
        flex: 1;
        margin: 0;
        line-height: 1;
        color: #fc4a4a;
        background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;

        &:hover {
        border: 1px solid red !important;
        color: red !important;
        background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
        }
        span {
        font-weight: 400 !important;
        font-size: 16px !important;
        } 
      }
  }
`;

const OverrideDefaultStyles = createGlobalStyle`
  .Menu-open {
    overflow: visible !important;
  }

  .${ROOT_CONTAINER_CLASS_NAME}, #SfxPopper {
    box-sizing: border-box;

    .FIE_annotation-option-popup {
      div {
        background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
      }
    }
    
    .SfxPopper-root .SfxMenu-root {
      background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
      overflow: visible;
      width: max-content;

      .SfxLabel-root{
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
        span {
        color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
        }
      }

      .SfxLabel-text {
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
      }

      .SfxMenuItem-root {
        color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
        background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
        &:hover {
        background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#27272A' : '#F0F0F0'};
        }
      }

      .SfxMenuItem-prefix {
        margin-right: 6px;
      }
    }

    .SfxIconButton-root{
      &:hover, &:focus {
       background: transparent;
        
        svg {
        color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
        }
      }
       &:disabled {
           &:hover, &:focus {        
            svg {
            color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#A1A1AA' : '#A1A1AA'};
           }
         }
       }  

      svg {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#A1A1AA' : '#A1A1AA'};
      } 
    }
  }
  .${ROOT_CONTAINER_CLASS_NAME} *, #SfxPopper * {
    box-sizing: border-box;
    scrollbar-color: rgba(203, 211, 218, 1) rgba(203, 211, 218, 0.35);
    
    :not(button) > svg:not([color]) {
      color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
    }

     .SfxLabel-root{
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
        span {
        color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
        }
      }

      .SfxLabel-text {
       color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
      }

    :disabled, [aria-disabled="true"] {
      cursor: not-allowed;
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(203, 211, 218, 0.35);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(203, 211, 218, 1);
      border-radius: 10px;
    }
  }
`;

export { FontsFaces, OverrideDefaultStyles };
