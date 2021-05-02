import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: whitesmoke;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  padding: 0 6rem;
  height: 100vh;
  overflow: hidden;

  @media ${device.mobileS} {
    padding: 0 1rem;
  }
  @media ${device.mobileM} {
    padding: 0 1rem;
  }
  @media ${device.mobileL} {
    padding: 0 1rem;
  }
  @media ${device.tablet} {
    padding: 0 2rem;
  }
  @media ${device.laptop} {
    padding: 0 10rem;
  }
  @media ${device.desktop} {
    padding: 0 14rem;
  }
`;
