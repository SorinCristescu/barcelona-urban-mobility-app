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
        <AuthProvider
          // Provider options are not required but can be useful in situations where
          // you have a short session maxAge time. Shown here with default values.
          options={{
            // Client Max Age controls how often the useSession in the client should
            // contact the server to sync the session state. Value in seconds.
            // e.g.
            // * 0  - Disabled (always use cache value)
            // * 60 - Sync session state with server if it's older than 60 seconds
            clientMaxAge: 0,
            // Keep Alive tells windows / tabs that are signed in to keep sending
            // a keep alive request (which extends the current session expiry) to
            // prevent sessions in open windows from expiring. Value in seconds.
            //
            // Note: If a session has expired when keep alive is triggered, all open
            // windows / tabs will be updated to reflect the user is signed out.
            keepAlive: 0,
          }}
          session={pageProps.session}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default withDarkMode(MyApp);
