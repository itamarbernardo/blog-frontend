import React from 'react';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  setting: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ setting, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={setting.attributes.menuLink}
        blogName={setting.attributes.blogName}
        logo={setting.attributes.logo.attributes.url}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={setting.attributes.blogName}
          blogDescription={setting.attributes.blogDescription}
          logo={setting.attributes.logo.attributes.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={setting.attributes.text} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};
