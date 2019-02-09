import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import IPageProps from './Page.props';

const Wrapper: StyledComponent<'div', object> = styled.div`
  background-color: #ffff;
`;

const Main: StyledComponent<'main', object> = styled.main``;

function Page ({children, className}: IPageProps): FunctionComponentElement<IPageProps> {
  return (
    <Wrapper>
      <Main className={className}>{children}</Main>
    </Wrapper>
  );
}

export default memo(Page);
