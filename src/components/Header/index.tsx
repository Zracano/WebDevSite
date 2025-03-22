import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import i18n from "i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSelectorWrapper,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setVisibility(false);
    }
  };

  const MenuItem = () => (
    <>
      <CustomNavLinkSmall onClick={() => scrollTo("intro")}>
        <Span>{t("Home")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("about")}>
        <Span>{t("About")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("templates")}>
        <Span>{t("Website Styles")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("demos")}>
        <Span>{t("Demos")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall style={{ width: "180px" }} onClick={() => scrollTo("contact")}>
        <Span>
          <Button>{t("Contact")}</Button>
        </Span>
      </CustomNavLinkSmall>
    </>
  );

  const LanguageSelector = () => (
    <LanguageSelectorWrapper>
      <span className="label">{t("Language")}:</span>
      <span className="flag" onClick={() => i18n.changeLanguage("en")}>
        <SvgIcon src="united-states.svg" width="24px" height="24px" />
      </span>
      <span className="flag" onClick={() => i18n.changeLanguage("es")}>
        <SvgIcon src="spain.svg" width="24px" height="24px" />
      </span>
    </LanguageSelectorWrapper>
  );
  
  

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle" style={{ width: "100%" }}>
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
            <LanguageSelector />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
          <div style={{ padding: "1rem 1.5rem" }}>
            <LanguageSelector />
          </div>
        </Drawer>

      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
