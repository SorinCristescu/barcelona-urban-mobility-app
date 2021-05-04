import { useState } from 'react';
import PageHead from '../components/PageHead';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../styles';
import { sort } from '../utils';
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { initializeApollo } from '../utils/apollo';
import { ALL_LINES_QUERY } from '../utils/graphql';
import List from '../components/List';

const Main = styled.div`
  width: 100%;
  padding-top: 50px;
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const SortButton = styled.button`
  margin-right: 0 20px 0 0;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.darkModeActive ? darkTheme.bg.primary : lightTheme.bg.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export default function Home() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_LINES_QUERY,
    {
      //   variables: allMetroLinesQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );
  const { darkModeActive } = useDarkMode();
  const [sorted, setSorted] = useState('asc');
  const toggleSort = () => {
    if (sorted === 'asc') {
      // setFiltered(sort(filtered));
      setSorted('dsc');
    } else {
      // setFiltered(sort(filtered));
      setSorted('asc');
    }
  };

  const metroLines = data.metroLines.edges.map((item) => {
    return {
      id: item.node.id,
      name: item.node.name,
      color: `#${item.node.color}`,
      type: item.node.__typename,
    };
  });

  console.log('home', data);
  return (
    <div>
      <PageHead title="TMB - Home" description="" keywords="" />

      <Main>
        <div className="search">
          <SortButton darkModeActive={darkModeActive} onClick={toggleSort}>
            {sorted === 'asc' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill={
                    darkModeActive
                      ? lightTheme.bg.primary
                      : darkTheme.bg.primary
                  }
                  d="M6 2l-6 8h4v12h4v-12h4l-6-8zm11.694.003h2.525l3.781 10.997h-2.421l-.705-2.261h-3.935l-.723 2.261h-2.336l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951 11.922l3.578-4.526h-3.487v-1.24h5.304v1.173l-3.624 4.593h3.633v1.234h-5.404v-1.234z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill={
                    darkModeActive
                      ? lightTheme.bg.primary
                      : darkTheme.bg.primary
                  }
                  d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm11.694-19.997h2.525l3.781 10.997h-2.421l-.705-2.261h-3.935l-.723 2.261h-2.336l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951 11.922l3.578-4.526h-3.487v-1.24h5.304v1.173l-3.624 4.593h3.633v1.234h-5.404v-1.234z"
                />
              </svg>
            )}
          </SortButton>
          <SearchBar
            // onChange={handleSearch}
            placeholder="Search for line or station"
          />
        </div>
        <List data={metroLines} />
      </Main>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_LINES_QUERY,
    // variables: allMetroLinesQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
