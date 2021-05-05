import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

export const lightTheme = {
  bg: {
    primary: '#F2F2F2',
    secondary: '#DEDEDE',
  },
  text: {
    primary: '#333333',
    secondary: '#393939',
  },
  // ...
};

export const darkTheme = {
  bg: {
    primary: '#333333',
    secondary: '#4B4B4B',
  },
  text: {
    primary: '#F2F2F2',
    secondary: '#C4C4C4',
  },
  // ...
};

export const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  padding: 0 6rem;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) =>
    props.darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary};

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

export const P = styled.p`
  font-weight: 200;
  font-size: 18px;
  line-height: 21px;
  padding: 0;
  margin: 0;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
`;

export const H5 = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding: 0;
  margin: 0;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
  padding: 0;
  margin: 0;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  padding: 0;
  margin: 0;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
`;

export const H4 = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  padding: 0;
  margin: 0;
  color: ${(props) =>
    props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
`;
