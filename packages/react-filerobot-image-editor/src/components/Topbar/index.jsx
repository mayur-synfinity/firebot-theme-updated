/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { usePhoneScreen, useStore } from 'hooks';
import { Menu } from '@scaleflex/icons';
import CloseButton from './CloseButton';
import SaveButton from './SaveButton';
import ResetButton from './ResetButton';
import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import ImageDimensionsAndDisplayToggle from './ImageDimensionsAndDisplayToggle';
import {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledMainButtonsWrapper,
  StyledControlButtonsWrapper,
  StyledHistoryButtons,
  StyledMenuIconButton,
} from './Topbar.styled';
import BackButton from './BackButton';

const Topbar = ({ toggleMainMenu }) => {
  const {
    config: { showBackButton, isDarkMode },
  } = useStore();

  const isPhoneScreen = usePhoneScreen(320);

  return (
    <StyledTopbar className="FIE_topbar" isDarkMode={isDarkMode} isPhoneScreen={isPhoneScreen}>
      <StyledMainButtonsWrapper isDarkMode={isDarkMode} className="FIE_topbar-buttons-wrapper">
        <StyledMenuIconButton
          isDarkMode={isDarkMode}
          className="FIE_tabs_toggle_btn"
          size={isPhoneScreen ? 'sm' : 'lg'}
          color="basic"
          onClick={() => toggleMainMenu(true)}
        >
          {(props) => <Menu {...props} />}
        </StyledMenuIconButton>
        {showBackButton ? <BackButton /> : <SaveButton />}
      </StyledMainButtonsWrapper>

      <StyledFlexCenterAlignedContainer
        isDarkMode={isDarkMode}
        className="FIE_topbar-center-options"
        showBackButton={showBackButton}
      >
        <ImageDimensionsAndDisplayToggle
          isDarkMode={isDarkMode}
          showBackButton={showBackButton}
          isPhoneScreen={isPhoneScreen}
        />
      </StyledFlexCenterAlignedContainer>

      <StyledControlButtonsWrapper isDarkMode={isDarkMode}>
        <StyledHistoryButtons isDarkMode={isDarkMode} className="FIE_topbar-history-buttons">
          <ResetButton margin="0" isDarkMode={isDarkMode} showBackButton={showBackButton} />
          <UndoButton margin="0" isDarkMode={isDarkMode} showBackButton={showBackButton} />
          <RedoButton margin="0" isDarkMode={isDarkMode} showBackButton={showBackButton} />
        </StyledHistoryButtons>

        {showBackButton ? <SaveButton /> : <CloseButton />}
      </StyledControlButtonsWrapper>
    </StyledTopbar>
  );
};

Topbar.defaultProps = {
  toggleMainMenu: () => { },
};

Topbar.propTypes = {
  toggleMainMenu: PropTypes.func,
};

export default Topbar;
