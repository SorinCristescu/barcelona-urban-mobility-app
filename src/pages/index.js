import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { initializeStore } from '../store';
import { getProfile } from '../store/profile/actions';
import PageHead from '../components/PageHead';
import styled from 'styled-components';
import { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../styles';
import { asc, dsc } from '../utils';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../utils/apollo';
import { GET_ALL_LINES_QUERY } from '../utils/queries/getAllLines';
import List from '../components/List';
import SignIn from '../components/SignIn';
import SortAndFilter from '../components/SortAndFilter';

const Main = styled.div`
  width: 100%;
  padding-top: 50px;

  .no-data {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
      props.darkModeActive ? lightTheme.text.primary : darkTheme.text.primary};
  }
`;

export default function Home({ session }) {
  const { pathname } = useRouter();
  const { loading, data } = useQuery(GET_ALL_LINES_QUERY);
  const { darkModeActive } = useDarkMode();

  const metroLines = data.metroLines.edges.map((item) => {
    return {
      id: item.node.id,
      name: item.node.name,
      color: `#${item.node.color}`,
      type: item.node.__typename,
    };
  });

  const busLines = data.busLines.edges.map((item) => {
    return {
      id: item.node.id,
      name: item.node.name,
      color: `#${item.node.color}`,
      type: item.node.__typename,
    };
  });
  const lines = busLines.concat(metroLines);

  const [sortedMethod, setSortedMethod] = useState('asc');
  const [filtered, setFiltered] = useState(lines);

  const toggleSort = () => {
    if (sortedMethod === 'asc') {
      setSortedMethod('dsc');
      setFiltered(filtered.sort(asc));
    } else {
      setSortedMethod('asc');
      setFiltered(filtered.sort(dsc));
    }
  };

  const handlerSearch = (e) => {
    if (sortedMethod === 'asc') {
      setFiltered(
        lines.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else if (sortedMethod === 'dsc') {
      setFiltered(
        lines.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  if (!session) return <SignIn />;
  if (loading) return <h5>Loading...</h5>;

  return (
    <>
      <PageHead title="TMB - Search" description="" keywords="" />
      <SortAndFilter
        handlerSearch={handlerSearch}
        toggleSort={toggleSort}
        sortedMethod={sortedMethod}
        placeholder="Search for metro or bus line"
      />
      <Main darkModeActive={darkModeActive}>
        {filtered.length > 0 ? (
          <List data={filtered} pathname={pathname} />
        ) : (
          <div className="no-data">No lines found!</div>
        )}
      </Main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const apolloClient = initializeApollo();
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  if (session) {
    dispatch(getProfile(session.user.email));
  }

  await apolloClient.query({
    query: GET_ALL_LINES_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      initialReduxState: reduxStore.getState(),
      session,
    },
  };
}
