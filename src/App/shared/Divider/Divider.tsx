import {memo} from 'react';
import styled, {StyledComponent} from 'styled-components';

const Divider: StyledComponent<'hr', object> = styled.hr``;

export default memo(Divider);
