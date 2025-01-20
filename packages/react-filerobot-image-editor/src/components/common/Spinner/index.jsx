/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { Color as PC } from '@scaleflex/ui/utils/types/palette';

import { StyledSpinnerWrapper, StyledSpinner } from './Spinner.styled';

const Spinner = ({ isDarkMode, theme }) => {
  return (
    <StyledSpinnerWrapper isDarkMode={isDarkMode} className="FIE_spinner-wrapper">
      <StyledSpinner size={50} color={isDarkMode ? '#1518AD' : '#1518AD'} />
    </StyledSpinnerWrapper>
  );
};

Spinner.defaultProps = {
  theme: {},
};

Spinner.propTypes = {
  theme: PropTypes.instanceOf(Object),
};

export default Spinner;
