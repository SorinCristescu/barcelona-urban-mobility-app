import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles';
import withDarkMode from 'next-dark-mode';

import { Provider as AuthProvider } from 'next-auth/client';

// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, darkMode }) {
  const { darkModeActive } = darkMode;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <ThemeProvider theme={{ darkMode: darkModeActive }}>
        {/* <AuthProvider session={pageProps.session}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </AuthProvider> */}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default withDarkMode(MyApp);
