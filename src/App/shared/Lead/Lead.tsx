import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import {ILeadProps} from './Lead.props';

const P: StyledComponent<'p', object> = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;

function Lead ({className, text}: ILeadProps): FunctionComponentElement<ILeadProps> {
  return (
    <P className={className}>{text}</P>
  );
}

export default memo(Lead);
