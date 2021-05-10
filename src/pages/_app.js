import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles';
import withDarkMode from 'next-dark-mode';
import { Provider as StoreProvider } from 'react-redux';
import { useStore } from '../store';
import { Provider as AuthProvider } from 'next-auth/client';

// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, darkMode }) {
  const { darkModeActive } = darkMode;
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <StoreProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <AuthProvider
          options={{
            clientMaxAge: 0,
            keepAlive: 0,
          }}
          session={pageProps.session}
        >
          <GlobalStyle />
          <ThemeProvider theme={{ darkMode: darkModeActive }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </StoreProvider>
  );
}

export default withDarkMode(MyApp);
