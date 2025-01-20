/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Label from '@scaleflex/ui/core/label';

/** Internal Dependencies */
import restrictNumber from 'utils/restrictNumber';
import ColorInput from 'components/common/ColorInput';
import {
  StyledTwoColumnsContainer,
  StyledColumn,
  StyledSpacedOptionFields,
} from './AnnotationOptions.styled';
import Slider from '../Slider';
import { useStore } from 'hooks';

const ShadowFields = ({ annotation, updateAnnotation, t }) => {
  const {
    shadowOffsetX,
    shadowOffsetY,
    shadowBlur,
    shadowColor,
    shadowOpacity,
  } = annotation;

  const changeSliderValue = (property, newValue, min = 0, max = 100) => {
    updateAnnotation({
      [property]: restrictNumber(newValue, min, max),
    });
  };

  const changeShadowColor = (newShadowColor) => {
    updateAnnotation({ shadowColor: newShadowColor });
  };

  const { isDarkMode } = useStore();

  return (
    <StyledSpacedOptionFields isDarkMode={isDarkMode} preventFlex>
      <Label>{t('shadow')}</Label>
      <StyledTwoColumnsContainer isDarkMode={isDarkMode}>
        <StyledColumn isDarkMode={isDarkMode}>
          <Label>{t('horizontal')}</Label>
          <Slider
            isDarkMode={isDarkMode}
            annotation="px"
            min={-100}
            max={100}
            onChange={(val) =>
              changeSliderValue('shadowOffsetX', val, -100, 100)
            }
            value={shadowOffsetX || 0}
            hideTrack
          />
        </StyledColumn>
        <StyledColumn isDarkMode={isDarkMode}>
          <Label>{t('vertical')}</Label>
          <Slider
            isDarkMode={isDarkMode}
            annotation="px"
            min={-100}
            max={100}
            onChange={(val) =>
              changeSliderValue('shadowOffsetY', val, -100, 100)
            }
            value={shadowOffsetY || 0}
            hideTrack
          />
        </StyledColumn>
      </StyledTwoColumnsContainer>
      <StyledTwoColumnsContainer isDarkMode={isDarkMode}>
        <StyledColumn isDarkMode={isDarkMode}>
          <Label>{t('blur')}</Label>
          <Slider
            isDarkMode={isDarkMode}
            annotation="%"
            onChange={(val) => changeSliderValue('shadowBlur', val)}
            value={shadowBlur}
          />
        </StyledColumn>
        <StyledColumn isDarkMode={isDarkMode}>
          <Label>{t('opacity')}</Label>
          <Slider
            isDarkMode={isDarkMode}
            annotation="%"
            onChange={(val) =>
              changeSliderValue('shadowOpacity', val / 100, 0, 1)
            }
            value={Math.round(shadowOpacity * 100)}
          />
        </StyledColumn>
      </StyledTwoColumnsContainer>
      <ColorInput
        color={shadowColor}
        onChange={changeShadowColor}
        colorFor="shadow"
      />
    </StyledSpacedOptionFields>
  );
};

ShadowFields.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default ShadowFields;
