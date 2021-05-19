import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../css';
import withDarkMode from 'next-dark-mode';

// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, darkMode }) {
  const { darkModeActive } = darkMode;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ darkMode: darkModeActive }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(MyApp);
