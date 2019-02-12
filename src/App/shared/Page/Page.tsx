import React, {FunctionComponentElement} from 'react';
import styled, {StyledComponent} from 'styled-components';
import {IPageProps} from './Page.props';

const Wrapper: StyledComponent<'div', object> = styled.div`
  background-color: #ffff;
`;

const Main: StyledComponent<'main', object> = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
`;

function Page ({children, className}: IPageProps): FunctionComponentElement<IPageProps> {
  return (
    <Wrapper>
      <Main className={className}>{children}</Main>
    </Wrapper>
  );
}

export default Page;
