/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { useFinetune, useStore } from 'hooks';
import restrictNumber from 'utils/restrictNumber';
import { Warmth as CustomWarmth } from 'custom/finetunes';
import Slider from 'components/common/Slider';
import {
  StyledSliderContainer,
  StyledSliderInput,
  StyledSliderLabel,
  StyledSliderWrapper,
} from '../tools.styled';

const MIN_VALUE = 0;
const DEFAULT_VALUE = {
  warmth: MIN_VALUE,
};
const MAX_VALUE = 200;
const sliderStyle = { width: 150, padding: 0, margin: 0 };

const WarmthOptions = ({ t }) => {
  const [finetuneProps, setFinetuneProps] = useFinetune(
    CustomWarmth,
    DEFAULT_VALUE,
  );

  const changeValue = (value) => {
    setFinetuneProps({
      warmth: restrictNumber(value, MIN_VALUE, MAX_VALUE),
    });
  };

  const { isDarkMode } = useStore();

  return (
    <StyledSliderContainer isDarkMode={isDarkMode} className="FIE_warmth-option-wrapper">
      <StyledSliderLabel isDarkMode={isDarkMode} className="FIE_warmth-option-label">
        {t('warmthTool')}
      </StyledSliderLabel>
      <StyledSliderWrapper isDarkMode={isDarkMode}>
        <Slider
          isDarkMode={isDarkMode}
          className="FIE_warmth-option"
          min={MIN_VALUE}
          max={MAX_VALUE}
          width="124px"
          value={finetuneProps.warmth ?? DEFAULT_VALUE.warmth}
          onChange={changeValue}
          style={sliderStyle}
        />
        <StyledSliderInput
          isDarkMode={isDarkMode}
          value={finetuneProps.warmth ?? DEFAULT_VALUE.warmth}
          onChange={({ target: { value } }) => changeValue(value)}
        />
      </StyledSliderWrapper>
    </StyledSliderContainer>
  );
};

WarmthOptions.propTypes = {
  t: PropTypes.func.isRequired,
};

export default WarmthOptions;
