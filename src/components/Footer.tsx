import { Link } from "gatsby";
import * as React from "react";
import { Col, Container, Hidden, Row, Visible } from "react-grid-system";
import styled from "styled-components";
import { HorizontalSpacer } from "./spacers";
import { ActionText, Body } from "./typography";

const ContentContainer = styled.div`
  background-color: black;
  padding: 2rem;
`;

const LinkItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 200;
`;

const LinkColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const Footer: React.FunctionComponent = () => (
  <ContentContainer>
    <Container>
      <Row gutterWidth={16} justify='center' align='center'>
        <Col md={4} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Om Zertify
            </ActionText>
            <LinkItem to='/team'>Teamet</LinkItem>
            <LinkItem to='/our-customers'>Våra kunder</LinkItem>
          </LinkColumnSection>
        </Col>
        <Hidden xs>
          <Col md={4} xs={6}>
            <LinkColumnSection>
              <ActionText color='white' textAlign='left'>
                Copyright 2022 @ Zertify AB
              </ActionText>
            </LinkColumnSection>
          </Col>
        </Hidden>
        <Col md={4} xs={6}>
          <LinkColumnSection>
            <ActionText color='white' textAlign='left'>
              Kundservice
            </ActionText>
            <LinkItem to='/customer-service'>Kontakta oss</LinkItem>
            <LinkItem to='/terms'>Villkor</LinkItem>
          </LinkColumnSection>
        </Col>
        <Visible xs>
          <Col md={4} xs={12}>
            <HorizontalSpacer spacing={4} />

            <ActionText color='white' textAlign='left'>
              Copyright 2022 @ Zertify AB
            </ActionText>
          </Col>
        </Visible>
      </Row>
    </Container>
  </ContentContainer>
);

export default Footer;
