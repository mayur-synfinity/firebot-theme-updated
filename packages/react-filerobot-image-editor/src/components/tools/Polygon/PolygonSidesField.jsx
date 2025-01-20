/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '@scaleflex/ui/core/label';

/** InternalDependencies */
import { StyledSpacedOptionFields } from 'components/common/AnnotationOptions/AnnotationOptions.styled';
import restrictNumber from 'utils/restrictNumber';
import Slider from 'components/common/Slider';
import { useStore } from 'hooks';

const MIN_VALUE = 3;
const MAX_VALUE = 25;

const PolygonSidesField = ({
  annotation: polygon,
  updateAnnotation: updatePolygon,
  t,
}) => {
  const { sides } = polygon;

  const updateSidesNumber = (newSidesNumber) => {
    updatePolygon({
      sides: restrictNumber(newSidesNumber, MIN_VALUE, MAX_VALUE),
    });
  };

  const { isDarkMode } = useStore();

  return (
    <StyledSpacedOptionFields isDarkMode={isDarkMode}>
      <Label>{t('sides')}</Label>
      <Slider
        isDarkMode={isDarkMode}
        annotation=""
        onChange={updateSidesNumber}
        value={sides}
        min={MIN_VALUE}
        max={MAX_VALUE}
        noMargin
      />
    </StyledSpacedOptionFields>
  );
};

PolygonSidesField.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default PolygonSidesField;
