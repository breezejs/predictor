import {memo} from 'react';
import styled, {StyledComponent} from 'styled-components';

const Divider: StyledComponent<'hr', object> = styled.hr`
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
  margin: 1rem 0;
`;

export default memo(Divider);
