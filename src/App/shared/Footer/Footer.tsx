import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import {IFooterProps} from './Footer.props';

const Small: StyledComponent<'small', object> = styled.small`
  color: #6c757d;
`;

const Wrapper: StyledComponent<'footer', object> = styled.footer`
  background-color: #f8f9fa;
  margin: 1.5rem 0 0;
  padding: 1rem;
`;

function Footer ({className, name}: IFooterProps): FunctionComponentElement<IFooterProps> {
  const date: Date = new Date();

  return (
    <Wrapper className={className}>
      <Small>{name} &copy; {date.getFullYear()}</Small>
    </Wrapper>
  );
}

export default memo(Footer);
