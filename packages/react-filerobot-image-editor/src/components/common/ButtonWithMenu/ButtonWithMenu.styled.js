/** External Dependencies */
import styled from 'styled-components';
import Button from '@scaleflex/ui/core/button';
import { Color as PC } from '@scaleflex/ui/utils/types/palette/color';
import { Menu, MenuItem, MenuItemIcon } from '@scaleflex/ui/core';

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ noMargin }) => (noMargin ? '0' : '12px')};
  flex-shrink: 0;
`;

const StyledMainButton = styled(Button)`
  border: none;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  padding: .8em 1.5em;
  line-height: 1;
  color: #FFFFFF;
  background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#1518AD' : '#1518AD'} !important;

  &:hover {
    background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#3A28BD' : '#3A28BD'} !important;
  }

   span {
       font-weight: 400 !important;
       font-size: 16px !important;
   }
`;

const StyledMenu = styled(Menu)`
  padding: 8px;
  background-color: ${({ isDarkMode, theme: { palette } }) => isDarkMode ? '#27272A' : '#F0F0F0'};`

const StyledMenuItem = styled(MenuItem)`
  border-radius: 4px;
`;

const StyledMenuIcon = styled(MenuItemIcon)`
  display: flex;
  align-items: center;
`;

export {
  StyledButtonWrapper,
  StyledMainButton,
  StyledMenu,
  StyledMenuItem,
  StyledMenuIcon,
};
