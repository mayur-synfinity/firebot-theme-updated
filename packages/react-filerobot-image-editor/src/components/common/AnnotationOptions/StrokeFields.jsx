/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import restrictNumber from 'utils/restrictNumber';
import ColorInput from 'components/common/ColorInput';
import { StyledSpacedOptionFields } from './AnnotationOptions.styled';
import Slider from '../Slider';
import { useStore } from 'hooks';

const MIN_PERCENTANGE = 0;
const MAX_PERCENTANGE = 100;

const StrokeFields = ({ annotation, updateAnnotation }) => {
  const { stroke, strokeWidth } = annotation;

  const changeStrokeWidth = (newStrokeWidth) => {
    updateAnnotation({
      strokeWidth: restrictNumber(
        newStrokeWidth,
        MIN_PERCENTANGE,
        MAX_PERCENTANGE,
      ),
    });
  };

  const changeStrokeColor = (newStrokeColor) => {
    updateAnnotation({ stroke: newStrokeColor });
  };

  const { isDarkMode } = useStore();

  return (
    <StyledSpacedOptionFields isDarkMode={isDarkMode}>
      <Slider
        isDarkMode={isDarkMode}
        annotation="px"
        onChange={changeStrokeWidth}
        value={strokeWidth}
        noMargin
      />
      <ColorInput
        color={stroke}
        onChange={changeStrokeColor}
        colorFor="stroke"
      />
    </StyledSpacedOptionFields>
  );
};

StrokeFields.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
};

export default StrokeFields;
