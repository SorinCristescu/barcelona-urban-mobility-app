import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';

// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
