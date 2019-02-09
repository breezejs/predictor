import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import Divider from '../Divider';
import Heading from '../Heading';
import Lead from '../Lead';
import IPageProps from './PageTitle.props';

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

function PageTitle ({lead, title}: IPageProps): FunctionComponentElement<IPageProps> {
  return (
    <Header>
      <Title level='h1' text={title} />

      {
        lead &&
          <React.Fragment>
            <Hr />

            <SubTitle text={lead} />
          </React.Fragment>
      }
    </Header>
  );
}

export default memo(PageTitle);
