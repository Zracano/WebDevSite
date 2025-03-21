import { TFunction } from "react-i18next";

export interface StylesType {
  title: string;
  features: string[];
}

export interface ColumnFeatureProps {
  content: {
    title: string;
    text: string;
    styles: StylesType[];
    id?: string;
  };
  t: TFunction;
}
