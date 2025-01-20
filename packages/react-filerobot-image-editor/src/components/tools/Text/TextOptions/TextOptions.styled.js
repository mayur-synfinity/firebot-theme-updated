/** External Dependencies */
import styled from 'styled-components';
import Input from '@scaleflex/ui/core/input';
import Select from '@scaleflex/ui/core/select';

const StyledFontFamilySelect = styled(Select)`
  width: 160px;
  background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
  border-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};

  &:hover{
  background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
  border-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  }
`;

const StyledFontSizeInput = styled(Input)`
  width: 72px;
  background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'};
  border-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'};

  &:focus-within, &:hover{
  background: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1F2022' : '#F8F8F8'} !important;
  border-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
  color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#FFFFFF' : '#000000'} !important;
  }
`;

const StyledToolsWrapper = styled.div`
  display: flex;
`;

export { StyledFontFamilySelect, StyledFontSizeInput, StyledToolsWrapper };
