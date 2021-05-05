import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PageHead from '../components/PageHead';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../styles';
import { asc, dsc } from '../utils';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../utils/apollo';
import { GET_ALL_LINES_QUERY } from '../utils/queries/getAllLines';
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
  const router = useRouter();
  const { loading, data } = useQuery(GET_ALL_LINES_QUERY);
  const { darkModeActive } = useDarkMode();

  console.log('router', router);

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
  const [searchParam, setSearchParam] = useState('');

  const toggleSort = () => {
    if (sortedMethod === 'asc') {
      setSortedMethod('dsc');
    } else {
      setSortedMethod('asc');
    }
  };

  useEffect(() => {
    if (sortedMethod === 'asc') {
      setFiltered(
        filtered
          .sort(asc)
          .filter((item) =>
            item.name.toLowerCase().includes(searchParam.toLowerCase())
          )
      );
    } else if (sortedMethod === 'dsc') {
      setFiltered(
        filtered
          .sort(dsc)
          .filter((item) =>
            item.name.toLowerCase().includes(searchParam.toLowerCase())
          )
      );
    }
  }, [searchParam, sortedMethod]);

  if (loading) return <h5>Loading...</h5>;

  return (
    <div>
      <PageHead title="TMB - Home" description="" keywords="" />
      <Main>
        <div className="search">
          <SortButton darkModeActive={darkModeActive} onClick={toggleSort}>
            {sortedMethod === 'asc' ? (
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
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Search for line or station"
          />
        </div>
        <List data={filtered} />
      </Main>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_LINES_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
