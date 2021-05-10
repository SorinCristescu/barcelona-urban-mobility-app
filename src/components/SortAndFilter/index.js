import { useDarkMode } from 'next-dark-mode';
import { Container, SortButton } from './style';
import { lightTheme, darkTheme } from '../../styles';
import SearchBar from '../SearchBar';

function SortAndFilter({
  handlerSearch,
  toggleSort,
  sortedMethod,
  placeholder,
}) {
  const { darkModeActive } = useDarkMode();
  return (
    <Container className="search">
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
                darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary
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
                darkModeActive ? lightTheme.bg.primary : darkTheme.bg.primary
              }
              d="M6 22l6-8h-4v-12h-4v12h-4l6 8zm11.694-19.997h2.525l3.781 10.997h-2.421l-.705-2.261h-3.935l-.723 2.261h-2.336l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951 11.922l3.578-4.526h-3.487v-1.24h5.304v1.173l-3.624 4.593h3.633v1.234h-5.404v-1.234z"
            />
          </svg>
        )}
      </SortButton>
      <SearchBar onChange={(e) => handlerSearch(e)} placeholder={placeholder} />
    </Container>
  );
}

export default SortAndFilter;
