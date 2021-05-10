import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDarkMode } from 'next-dark-mode';
import { H4, lightTheme, darkTheme } from '../../styles';
import { Container } from './style';

function BackLink() {
  const { darkModeActive } = useDarkMode();
  return (
    <Link href="/">
      <a>
        <Container>
          <svg
            width="15"
            height="15"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M33.0325 14.7553L33.0871 14.7673H9.66671L17.0292 7.38855C17.3898 7.0283 17.5875 6.54029 17.5875 6.0281C17.5875 5.5159 17.3898 5.03131 17.0292 4.67021L15.8836 3.52403C15.5234 3.16379 15.0433 2.9646 14.5314 2.9646C14.0192 2.9646 13.5389 3.16237 13.1787 3.52261L0.557894 16.1422C0.196227 16.5039 -0.00153721 16.9857 -0.000114447 17.4981C-0.00153721 18.0135 0.196227 18.4955 0.557894 18.8566L13.1787 31.4774C13.5389 31.8373 14.019 32.0354 14.5314 32.0354C15.0433 32.0354 15.5234 31.837 15.8836 31.4774L17.0292 30.3312C17.3898 29.9715 17.5875 29.4912 17.5875 28.979C17.5875 28.4671 17.3898 28.0121 17.0292 27.6521L9.58363 20.2321H33.0587C34.1135 20.2321 34.9999 19.323 34.9999 18.2687V16.6476C34.9999 15.5933 34.0873 14.7553 33.0325 14.7553Z"
                fill={
                  darkModeActive
                    ? lightTheme.text.primary
                    : darkTheme.text.primary
                }
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <H4 darkModeActive={darkModeActive}>Back</H4>
        </Container>
      </a>
    </Link>
  );
}

export default BackLink;
