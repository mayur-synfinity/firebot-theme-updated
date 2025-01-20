/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import {
  StyledSpacedOptionFields,
  StyledIconWrapper,
} from 'components/common/AnnotationOptions/AnnotationOptions.styled';
import { TextAlignCenter, TextAlignLeft } from '@scaleflex/icons';
import { useStore } from 'hooks';

const rightAlignmentCssTransform = { transform: 'scaleX(-1)' };

const TextAlignmentFields = ({
  annotation: text,
  updateAnnotation: updateText,
}) => {
  const { align } = text;

  const changeHorizontalAlignment = (newHorizonalAlignment) => {
    updateText({ align: newHorizonalAlignment });
  };

  const { isDarkMode } = useStore();

  return (
    <StyledSpacedOptionFields isDarkMode={isDarkMode}>
      <StyledIconWrapper
        isDarkMode={isDarkMode}
        onClick={() => changeHorizontalAlignment('left')}
        active={align === 'left'}
      >
        <TextAlignLeft />
      </StyledIconWrapper>
      <StyledIconWrapper
        isDarkMode={isDarkMode}
        onClick={() => changeHorizontalAlignment('center')}
        active={align === 'center'}
      >
        <TextAlignCenter />
      </StyledIconWrapper>
      <StyledIconWrapper
        isDarkMode={isDarkMode}
        onClick={() => changeHorizontalAlignment('right')}
        active={align === 'right'}
      >
        <TextAlignLeft style={rightAlignmentCssTransform} />
      </StyledIconWrapper>
    </StyledSpacedOptionFields>
  );
};

TextAlignmentFields.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
};

export default TextAlignmentFields;
