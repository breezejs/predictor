import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import IHeadingProps from './Heading.props';

const H1: StyledComponent<'h1', object> = styled.h1``;

const H2: StyledComponent<'h2', object> = styled.h2``;

const H3: StyledComponent<'h3', object> = styled.h3``;

const H4: StyledComponent<'h4', object> = styled.h4``;

const H5: StyledComponent<'h5', object> = styled.h5``;

const H6: StyledComponent<'h6', object> = styled.h6``;

function Heading ({className, level, text}: IHeadingProps): FunctionComponentElement<IHeadingProps> {
  switch (level) {
  case 'h1':
    return (
      <H1 className={className}>{text}</H1>
    );
  case 'h2':
    return (
      <H2 className={className}>{text}</H2>
    );
  case 'h3':
    return (
      <H3 className={className}>{text}</H3>
    );
  case 'h4':
    return (
      <H4 className={className}>{text}</H4>
    );
  case 'h5':
    return (
      <H5 className={className}>{text}</H5>
    );
  case 'h6':
    return (
      <H6 className={className}>{text}</H6>
    );
  default:
    return (
      <React.Fragment>{text}</React.Fragment>
    );
  }
}

export default memo(Heading);
