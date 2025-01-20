/** External Dependencies */
import React from 'react';
import CrossOutline from '@scaleflex/icons/cross-outline';

/** Internal Dependencies */
import { useStore } from 'hooks';
import Separator from 'components/common/Separator';
import { StyledCloseButton } from './Topbar.styled';
import ConfirmationModal from './ConfirmationModal';

const CloseButton = () => {
  const {
    config: { onClose, isDarkMode },
  } = useStore();

  if (typeof onClose !== 'function') {
    return null;
  }

  return (
    <>
      <Separator isDarkMode={isDarkMode} />
      <ConfirmationModal>
        <StyledCloseButton
          isDarkMode={isDarkMode}
          className="FIE_topbar-close-button"
          color="basic"
          size="md"
        >
          <CrossOutline />
        </StyledCloseButton>
      </ConfirmationModal>
    </>
  );
};

export default CloseButton;
