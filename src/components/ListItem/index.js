import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useDarkMode } from 'next-dark-mode';
import { Container } from './style';

function ListItem({ item, pathname, setShowOnMap, originStop, endingStop }) {
  const { darkModeActive } = useDarkMode();

  const handleShowOnMap = (item) => {
    if (pathname !== '/') {
      setShowOnMap(item);
    } else {
      return;
    }
  };

  const handleLink = () => {
    if (item.type === 'BusLine') {
      return `/busLine/${item.id}`;
    } else if (item.type === 'MetroLine') {
      return `/metroLine/${item.id}`;
    } else if (pathname === '/busLine/[id]' || pathname === '/metroLine/[id]') {
      return 'javascript:void(0)';
    }
  };
  return (
    <Link href={`${handleLink()}`}>
      <a>
        <Container
          darkModeActive={darkModeActive}
          color={item.color}
          onClick={() => handleShowOnMap(item)}
        >
          <div className="title">
            {item.type === 'BusLine' || item.type === 'BusStop' ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5 0C27.1585 0 35 7.84146 35 17.5C35 27.1585 27.1585 35 17.5 35C7.84146 35 0 27.1585 0 17.5C0 7.84146 7.84146 0 17.5 0ZM24.306 27.7083C24.7756 27.7083 25.1562 27.3277 25.1562 26.8581V26.0065C25.6069 26.0065 26.04 25.8271 26.3594 25.5092C26.6788 25.1898 26.8581 24.7567 26.8581 24.306V17.5C27.3277 17.5 27.7083 17.1194 27.7083 16.6498V14.0977C27.7083 13.6281 27.3277 13.246 26.8581 13.246V9.84375C26.8581 8.435 25.7148 7.29167 24.306 7.29167H10.694C9.28521 7.29167 8.14188 8.435 8.14188 9.84375V13.246C7.67229 13.246 7.29167 13.6281 7.29167 14.0977V16.6498C7.29167 17.1194 7.67229 17.5 8.14188 17.5V24.306C8.14188 24.7567 8.32125 25.1898 8.64063 25.5092C8.96 25.8271 9.39313 26.0065 9.84375 26.0065V26.8581C9.84375 27.3277 10.2244 27.7083 10.694 27.7083H12.3958C12.8654 27.7083 13.246 27.3277 13.246 26.8581V26.0065H21.754V26.8581C21.754 27.3277 22.1346 27.7083 22.6042 27.7083H24.306ZM11.1198 21.754C11.8242 21.754 12.3958 22.3256 12.3958 23.03C12.3958 23.7344 11.8242 24.306 11.1198 24.306C10.4154 24.306 9.84375 23.7344 9.84375 23.03C9.84375 22.3256 10.4154 21.754 11.1198 21.754ZM23.8802 21.754C24.5846 21.754 25.1562 22.3256 25.1562 23.03C25.1562 23.7344 24.5846 24.306 23.8802 24.306C23.1758 24.306 22.6042 23.7344 22.6042 23.03C22.6042 22.3256 23.1758 21.754 23.8802 21.754ZM19.6263 22.6042C19.861 22.6042 20.0521 22.7952 20.0521 23.03C20.0521 23.2648 19.861 23.4544 19.6263 23.4544H15.3737C15.139 23.4544 14.9479 23.2648 14.9479 23.03C14.9479 22.7952 15.139 22.6042 15.3737 22.6042H19.6263ZM25.1562 11.97C25.1562 11.7352 24.9652 11.5456 24.7304 11.5456H10.2696C10.0348 11.5456 9.84375 11.7352 9.84375 11.97V19.2019C9.84375 19.2019 12.479 20.0521 17.5 20.0521C22.521 20.0521 25.1562 19.2019 25.1562 19.2019V11.97ZM20.9023 8.99354V9.84375H14.0977V8.99354H20.9023Z"
                  fill={item.color}
                />
              </svg>
            ) : null}
            {item.type === 'MetroLine' || item.type === 'MetroStation' ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M17.5 0C7.83518 0 0 7.83518 0 17.5C0 27.1648 7.83518 35.0004 17.5 35.0004C27.1644 35.0004 35 27.1648 35 17.5C35 7.83518 27.1644 0 17.5 0ZM27.2753 17.5V27.3049H25.3204H23.3655L23.3598 20.4916L23.3556 13.6805L21.5036 20.1511C20.4844 23.7098 19.6056 26.7746 19.5506 26.9625L19.4511 27.3056H17.5H15.5485L15.4491 26.9625C15.3944 26.7746 14.5153 23.7098 13.4957 20.1511L11.644 13.6805L11.6391 20.4916L11.6353 27.3049H9.68038H7.72548V17.5V7.69511H10.659L13.5906 7.69701L15.544 14.218C16.6186 17.8052 17.5023 20.736 17.5065 20.7292C17.5106 20.7231 18.3898 17.7874 19.4614 14.2066L21.4109 7.69701L24.3425 7.69511H27.276V17.5H27.2753Z"
                    fill={item.color}
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : null}
            {originStop &&
            item.type !== 'BusLine' &&
            item.type !== 'MetroLine' &&
            item.id === originStop.id ? (
              <svg
                className="heads"
                width="15"
                height="15"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.61915 0H1.19979C0.534467 0 -0.0098877 0.544355 -0.0098877 1.20968V23.7903C-0.0098877 24.4558 0.534467 25 1.19979 25H3.61915C4.28447 25 4.82882 24.4558 4.82882 23.7903V1.20968C4.82882 0.544355 4.28447 0 3.61915 0Z"
                  fill={item.color}
                />
                <path
                  d="M7.42157 15.4637H12.4619C13.1474 15.4637 13.7119 16.0282 13.7119 16.7137V18.871C13.7119 19.9195 14.9216 20.5042 15.7482 19.8589L23.8127 13.5887C24.4579 13.0847 24.4579 12.0968 23.8127 11.5927L15.7482 5.14112C14.9216 4.49596 13.7119 5.08064 13.7119 6.14918V8.30644C13.7119 8.99193 13.1474 9.55644 12.4619 9.55644H7.42157C6.73609 9.55644 6.17157 10.121 6.17157 10.8064V14.1935C6.15141 14.8992 6.71593 15.4637 7.42157 15.4637Z"
                  fill={item.color}
                />
              </svg>
            ) : null}
            {endingStop &&
            item.type !== 'BusLine' &&
            item.type !== 'MetroLine' &&
            item.name === endingStop.name ? (
              <svg
                className="heads"
                width="15"
                height="15"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6191 0H21.1998C20.5345 0 19.9901 0.544355 19.9901 1.20968V23.7903C19.9901 24.4558 20.5345 25 21.1998 25H23.6191C24.2845 25 24.8288 24.4558 24.8288 23.7903V1.20968C24.8288 0.544355 24.2845 0 23.6191 0Z"
                  fill={item.color}
                />
                <path
                  d="M1.42157 15.4637H6.4619C7.14738 15.4637 7.7119 16.0282 7.7119 16.7137V18.871C7.7119 19.9195 8.92157 20.5042 9.74819 19.8589L17.8127 13.5887C18.4579 13.0847 18.4579 12.0968 17.8127 11.5927L9.74819 5.14112C8.92157 4.49596 7.7119 5.08064 7.7119 6.14918V8.30644C7.7119 8.99193 7.14738 9.55644 6.4619 9.55644H1.42157C0.736091 9.55644 0.171575 10.121 0.171575 10.8064V14.1935C0.151413 14.8992 0.71593 15.4637 1.42157 15.4637Z"
                  fill={item.color}
                />
              </svg>
            ) : null}
            <h5>{item.name}</h5>
          </div>

          <div className="more-details">
            <p>{pathname === '/' ? 'More details' : 'Show on map'}</p>
          </div>
        </Container>
      </a>
    </Link>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  setShowOnMap: PropTypes.func,
  originStop: PropTypes.object,
  endingStop: PropTypes.object,
};

export default ListItem;
