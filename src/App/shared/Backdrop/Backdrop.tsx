import {memo} from 'react';
import styled, {StyledComponent} from 'styled-components';

const Backdrop: StyledComponent<'div', object> = styled.div`
  background-color: #000;
  bottom: 0;
  left: 0;
  opacity: .5;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

export default memo(Backdrop);
