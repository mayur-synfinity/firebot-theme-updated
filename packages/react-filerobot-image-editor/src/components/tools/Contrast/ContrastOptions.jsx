/** External Depdencies */
import React from 'react';
import Konva from 'konva';
import PropTypes from 'prop-types';

/** Internal Depdencies */
import { useFinetune, useStore } from 'hooks';
import restrictNumber from 'utils/restrictNumber';
import Slider from 'components/common/Slider';
import {
  StyledSliderContainer,
  StyledSliderInput,
  StyledSliderLabel,
  StyledSliderWrapper,
} from '../tools.styled';

const MIN_VALUE = -100;
const DEFAULT_VALUE = {
  contrast: 0,
};
const MAX_VALUE = 100;
const sliderStyle = { width: 150, padding: 0, margin: 0 };

const ContrastOptions = ({ t }) => {
  const [finetuneProps, setFinetuneProps] = useFinetune(
    Konva.Filters.Contrast,
    DEFAULT_VALUE,
  );

  const { isDarkMode } = useStore();

  const changeValue = (value) => {
    setFinetuneProps({
      contrast: restrictNumber(value, MIN_VALUE, MAX_VALUE),
    });
  };

  return (
    <StyledSliderContainer isDarkMode={isDarkMode} className="FIE_contrast-option-wrapper">
      <StyledSliderLabel isDarkMode={isDarkMode} className="FIE_contrast-option-label">
        {t('contrastTool')}
      </StyledSliderLabel>
      <StyledSliderWrapper isDarkMode={isDarkMode}>
        <Slider
          isDarkMode={isDarkMode}
          className="FIE_contrast-option"
          min={MIN_VALUE}
          max={MAX_VALUE}
          width="124px"
          value={finetuneProps.contrast ?? DEFAULT_VALUE.contrast}
          onChange={changeValue}
          style={sliderStyle}
        />
        <StyledSliderInput
          isDarkMode={isDarkMode}
          value={finetuneProps.contrast ?? DEFAULT_VALUE.contrast}
          onChange={({ target: { value } }) => changeValue(value)}
        />
      </StyledSliderWrapper>
    </StyledSliderContainer>
  );
};

ContrastOptions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default ContrastOptions;
