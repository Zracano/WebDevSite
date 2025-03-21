import styled from "styled-components";
import { Card } from "antd";

export const Section = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: #666;
`;

export const StyledCard = styled(Card)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

export const DemoImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #f0f0f0;
`;

export const FeatureList = styled.ul`
  padding-left: 1rem;
  margin-bottom: 1rem;
`;

export const Feature = styled.li`
  margin-bottom: 0.5rem;
`;
