/** External Dependencies */
import React from 'react';
import Konva from 'konva';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { useFinetune, useStore } from 'hooks';
import restrictNumber from 'utils/restrictNumber';
import Slider from 'components/common/Slider';
import {
  StyledSliderContainer,
  StyledSliderInput,
  StyledSliderLabel,
  StyledSliderWrapper,
} from '../tools.styled';

const MIN_VALUE = 0;
const DEFAULT_VALUE = {
  blurRadius: MIN_VALUE,
};
const MAX_VALUE = 100;
const sliderStyle = { width: 150, padding: 0, margin: 0 };

const BlurOptions = ({ t }) => {
  const [finetuneProps, setFinetuneProps] = useFinetune(
    Konva.Filters.Blur,
    DEFAULT_VALUE,
  );

  const { isDarkMode } = useStore();

  const changeValue = (value) => {
    setFinetuneProps({
      blurRadius: restrictNumber(value, MIN_VALUE, MAX_VALUE),
    });
  };

  return (
    <StyledSliderContainer isDarkMode={isDarkMode} className="FIE_blur-option-wrapper">
      <StyledSliderLabel isDarkMode={isDarkMode} className="FIE_blur-option-label">
        {t('blur')}
      </StyledSliderLabel>
      <StyledSliderWrapper isDarkMode={isDarkMode}>
        <Slider
          isDarkMode={isDarkMode}
          className="FIE_blur-option"
          min={MIN_VALUE}
          max={MAX_VALUE}
          width="124px"
          value={finetuneProps.blurRadius ?? DEFAULT_VALUE.blurRadius}
          onChange={changeValue}
          style={sliderStyle}
        />
        <StyledSliderInput
          isDarkMode={isDarkMode}
          value={finetuneProps.blurRadius ?? DEFAULT_VALUE.blurRadius}
          onChange={({ target: { value } }) => changeValue(value)}
        />
      </StyledSliderWrapper>
    </StyledSliderContainer>
  );
};

BlurOptions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default BlurOptions;
