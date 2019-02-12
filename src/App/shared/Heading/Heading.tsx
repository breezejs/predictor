import React, {Fragment, FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import {IHeadingProps} from './Heading.props';

const H1: StyledComponent<'h1', object> = styled.h1`
  font-size: 2.5rem;
`;

const H2: StyledComponent<'h2', object> = styled.h2`
  font-size: 2rem;
`;

const H3: StyledComponent<'h3', object> = styled.h3`
  font-size: 1.75rem;
`;

const H4: StyledComponent<'h4', object> = styled.h4`
  font-size: 1.5rem;
`;

const H5: StyledComponent<'h5', object> = styled.h5`
  font-size: 1.25rem;
`;

const H6: StyledComponent<'h6', object> = styled.h6`
  font-size: 1rem;
`;

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
      <Fragment>{text}</Fragment>
    );
  }
}

export default memo(Heading);
