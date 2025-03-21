import { Row, Col, Button } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import {
    Section,
    Title,
    Subtitle,
    StyledCard,
    DemoImage,
    FeatureList,
    Feature
  } from "./styles";
import { DemoEntry } from "./types";

interface DemoShowcaseProps {
  content: {
    title: string;
    text: string;
    demos: DemoEntry[];
  };
}
  
const DemoShowcase = ({ content, t }: DemoShowcaseProps & { t: any }) => {
    return (
      <Section id="demos">
        <Slide direction="up" triggerOnce>
          <Title>{t(content.title)}</Title>
          <Subtitle>{t(content.text)}</Subtitle>
        </Slide>
        <Row gutter={[32, 32]} justify="center">
          {content.demos.map((demo, index) => (
            <Col xs={24} md={12} key={index}>
              <Slide direction="up" triggerOnce>
                <StyledCard
                  title={demo.title}
                  cover={<DemoImage src={demo.image} alt={demo.title} />}
                  actions={[
                    <Button type="primary" href={demo.link} target="_blank">
                      View Demo
                    </Button>
                  ]}
                >
                  <FeatureList>
                    {demo.features.map((feature, i) => (
                      <Feature key={i}>{feature}</Feature>
                    ))}
                  </FeatureList>
                </StyledCard>
              </Slide>
            </Col>
          ))}
        </Row>
      </Section>
    );
  };
  

export default withTranslation()(DemoShowcase);
