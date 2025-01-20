/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { StyledSeparator } from './Separator.styled';

const Separator = ({ height, width, isDarkMode }) => (
  <StyledSeparator isDarkMode={isDarkMode} height={height} width={width} />
);

Separator.defaultProps = {
  height: '24px',
  width: '1px',
};

Separator.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Separator;
