import { ColumnFeatureProps, StylesType } from "./types";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import {
  Section,
  Title,
  Subtitle,
  Columns,
  Column,
  ColumnTitle,
  FeatureList,
  Feature
} from "./styles";


const ColumnFeature = ({ content, t }: ColumnFeatureProps) => {
  return (
    <Section id={content.id || "templates"}>
      <Row justify="center">
        <Col lg={16} md={20} sm={24} xs={24}>
          <Slide direction="up" triggerOnce>
            <Title>{t(content.title)}</Title>
            <Subtitle>{t(content.text)}</Subtitle>
          </Slide>
        </Col>
      </Row>
      <Columns>
      {content.styles.map((style: StylesType, idx: number) => (
        <Slide direction="up" triggerOnce key={idx}>
            <Column>
            <ColumnTitle>{t(style.title)}</ColumnTitle>
            <FeatureList>
                {style.features.map((feature: string, i: number) => (
                <Feature key={i}>{t(feature)}</Feature>
                ))}
            </FeatureList>
            </Column>
        </Slide>
      ))}

      </Columns>
    </Section>
  );
};

export default withTranslation()(ColumnFeature);
