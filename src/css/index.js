import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopL,
  desktop,
  desktopL,
} from './queries';

export const htmlFontSize = 18;

export const baselinePX = 20;

export const base = (multipler = 1) =>
  `${(baselinePX / htmlFontSize) * multipler}rem`;

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Barlow, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: ${htmlFontSize}px;
  line-height: ${baselinePX}px;

}



* {
  box-sizing: border-box;
}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 ${base(2)};
  background-color: ${(props) =>
    props.darkModeActive ? lightTheme.background : darkTheme.background};

  @media ${mobileS} {
    padding: 0 ${base(0.5)};
  }
  @media ${mobileM} {
    padding: 0 ${base(0.5)};
  }
  @media ${mobileL} {
    padding: 0 0 ${base(0.5)};
  }
  @media ${tablet} {
    padding: 0 ${base()};
  }
  @media ${laptop} {
    padding: 0 ${base(2)};
  }
  @media ${desktop} {
    padding: 0 ${base(2)};
  }
  @media ${desktopL} {
    padding: 0 ${base(5)};
  }
`;
