import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import IDrawerIconProps from './DrawerIcon.props';

const FontAwesome: StyledComponent<typeof FontAwesomeIcon, object> = styled(FontAwesomeIcon)`
  margin-right: .5rem;
`;

function DrawerIcon ({icon}: IDrawerIconProps): FunctionComponentElement<IDrawerIconProps> {
  return (
    <FontAwesome icon={icon} fixedWidth={true} />
  );
}

export default memo(DrawerIcon);
