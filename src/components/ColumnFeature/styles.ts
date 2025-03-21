import styled from "styled-components";

export const Section = styled("section")`
  padding: 4rem 2rem;
  background-color: #f8f9fb;
  text-align: center;
`;

export const Title = styled("h2")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Subtitle = styled("p")`
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: #555;
`;

export const Columns = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Column = styled("div")`
  flex: 1 1 300px;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

export const ColumnTitle = styled("h3")`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2E186A;
`;

export const FeatureList = styled("ul")`
  padding-left: 1.2rem;
`;

export const Feature = styled("li")`
  margin-bottom: 0.75rem;
  color: #333;
`;
