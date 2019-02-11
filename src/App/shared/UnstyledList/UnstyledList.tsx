import {memo} from 'react';
import styled, {StyledComponent} from 'styled-components';

const UnstyledList: StyledComponent<'ul', object> = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export default memo(UnstyledList);
