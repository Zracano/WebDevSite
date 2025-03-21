import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";

import {
  FooterSection,
  LogoContainer,
  Para,
  FooterContainer,
  Language,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={src}
      style={{ margin: "0 0.5rem" }}
    >
      <SvgIcon src={src} width="25px" height="25px" />
    </a>
  );

  return (
    <FooterSection>
      <Container>
        <Row justify="center" align="middle" gutter={[0, 32]}>
          <Col xs={24} sm={16} md={10} style={{ textAlign: "left", paddingBottom: "1.5rem" }}>
            <LogoContainer>
              <SvgIcon src="logo.svg" width="101px" height="64px" />
            </LogoContainer>

            <Para style={{ marginTop: "1rem" }}>
              © {new Date().getFullYear()} Edgar Navarro. All rights reserved.
            </Para>
          </Col>
          
          <Col xs={24} sm={8} md={7} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Language>{t("Language")}</Language>
            <LanguageSwitchContainer style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "0.5rem" }}>
              <LanguageSwitch onClick={() => handleChange("en")}> 
                <SvgIcon src="united-states.svg" width="30px" height="30px" />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("es")}> 
                <SvgIcon src="spain.svg" width="30px" height="30px" />
              </LanguageSwitch>
            </LanguageSwitchContainer>
          </Col>
          
          <Col xs={24} sm={12} md={7} style={{ textAlign: "center" }}>
            <FooterContainer style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <SocialLink href="https://github.com/zracano" src="github.svg" />  
              <SocialLink href="https://linkedin.com/in/3dgar-navarro" src="linkedin.svg" />
            </FooterContainer>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);