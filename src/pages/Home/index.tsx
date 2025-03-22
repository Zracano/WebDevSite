import { lazy } from "react";
import { useTranslation } from "react-i18next";

// Import all content files (both languages)
import enIntro from "../../content/en/IntroContent.json";
import esIntro from "../../content/es/IntroContent.json";
import enMiddle from "../../content/en/MiddleBlockContent.json";
import esMiddle from "../../content/es/MiddleBlockContent.json";
import enAbout from "../../content/en/AboutContent.json";
import esAbout from "../../content/es/AboutContent.json";
import enProduct from "../../content/en/ProductContent.json";
import esProduct from "../../content/es/ProductContent.json";
import enDemo from "../../content/en/DemoContent.json";
import esDemo from "../../content/es/DemoContent.json";
import enContact from "../../content/en/ContactContent.json";
import esContact from "../../content/es/ContactContent.json";

const DemoShowcase = lazy(() => import("../../components/DemoShowcase"));
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ColumnFeature = lazy(() => import("../../components/ColumnFeature"));

const Home = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // Use language-specific content
  const IntroContent = lang === "es" ? esIntro : enIntro;
  const MiddleBlockContent = lang === "es" ? esMiddle : enMiddle;
  const AboutContent = lang === "es" ? esAbout : enAbout;
  const ProductContent = lang === "es" ? esProduct : enProduct;
  const DemoContent = lang === "es" ? esDemo : enDemo;
  const ContactContent = lang === "es" ? esContact : enContact;

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ColumnFeature content={ProductContent} />
      <DemoShowcase content={DemoContent} />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
