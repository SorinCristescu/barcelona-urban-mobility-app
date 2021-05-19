import styled from 'styled-components';
import { lightTheme, darkTheme } from '../css/theme';
import { base } from './';

export const H1 = styled.h1`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 700;
  font-size: ${base(5)};
  line-height: ${base(5)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const H2 = styled.h2`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 600;
  font-size: ${base(4.25)};
  line-height: ${base(5)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const H3 = styled.h3`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 600;
  font-size: ${base(3)};
  line-height: ${base(3.2)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const H4 = styled.h4`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 600;
  font-size: ${base(2.25)};
  line-height: ${base(2.5)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const H5 = styled.h5`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: bold;
  font-size: ${base(1.625)};
  line-height: ${base(2.25)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const H6 = styled.h6`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 600;
  font-size: ${base(1.2)};
  line-height: ${base(1.5)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const P = styled.p`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 400;
  font-size: ${base(0.8)};
  line-height: ${base(1.5)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const Small = styled.small`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 400;
  font-size: ${base(0.5)};
  line-height: ${base(0.5)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const Label = styled.p`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  font-weight: 600;
  font-size: ${base(0.9)};
  line-height: ${base(0.9)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const ALabel = styled.a`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: ${base(0.9)};
  line-height: ${base(0.9)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;

export const A = styled.a`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  color: inherit;
  text-decoration: none;
  font-weight: 400;
  font-size: ${base(0.8)};
  line-height: ${base(0.8)};
  letter-spacing: 0.01em;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text : darkTheme.text};
`;
