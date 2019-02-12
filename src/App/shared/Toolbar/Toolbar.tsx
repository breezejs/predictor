import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import Hamburger from '../Hamburger';
import Heading from '../Heading';
import {IToolbarElementProps, IToolbarProps} from './Toolbar.props';

const Header: StyledComponent<'header', object, IToolbarElementProps> = styled('header')<IToolbarElementProps>`
  align-items: center;
  background-color: ${({styling}: IToolbarElementProps): string => styling === 'primary' ? '#343a40' : '#f8f9fa'}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .5rem 1rem;
  position: relative;
  user-select: none;
`;

const Title: StyledComponent<typeof Heading, object, IToolbarElementProps> = styled(Heading)<IToolbarElementProps>`
  color: ${({styling}: IToolbarElementProps): string => styling === 'primary' ? '#fff' : '#343a40'}
  display: inline-block;
  font-size: 1.25rem;
  line-height: inherit;
  margin: 0 auto 0 0;
  padding: .3125rem 0;
  white-space: nowrap;
`;

const Toggler: StyledComponent<typeof Hamburger, object, IToolbarElementProps> = styled(Hamburger)`
  background-color: ${({styling}: IToolbarElementProps): string => styling === 'primary' ? '#343a40' : '#f8f9fa'}
  color: ${({styling}: IToolbarElementProps): string => styling === 'primary' ? '#fff' : '#343a40'}
  margin-right: 1rem;
`;

function Toolbar ({onClick, theme, title}: IToolbarProps): FunctionComponentElement<IToolbarProps> {
  return (
    <Header styling={theme}>
      {
        onClick &&
        <Toggler styling={theme} label='Show drawer' onClick={onClick} />
      }
      <Title styling={theme} level='h1' text={title} />
    </Header>
  );
}

export default memo(Toolbar);
