import React, {Fragment, FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import Divider from '../Divider';
import Heading from '../Heading';
import Lead from '../Lead';
import {IPageTitleProps} from './PageTitle.props';

const Header: StyledComponent<'header', object> = styled.header`
  padding: 1.5rem 0;
`;

const Hr: StyledComponent<typeof Divider, object> = styled(Divider)`
  margin: .5rem 0;
`;

const SubTitle: StyledComponent<typeof Lead, object> = styled(Lead)`
  margin: 0;
`;

const Title: StyledComponent<typeof Heading, object> = styled(Heading)`
  margin: 0;
`;

function PageTitle ({lead, title}: IPageTitleProps): FunctionComponentElement<IPageTitleProps> {
  return (
    <Header>
      <Title level='h1' text={title} />

      {
        lead &&
          <Fragment>
            <Hr />

            <SubTitle text={lead} />
          </Fragment>
      }
    </Header>
  );
}

export default memo(PageTitle);
