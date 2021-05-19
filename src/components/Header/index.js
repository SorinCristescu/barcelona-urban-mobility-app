import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useDarkMode } from 'next-dark-mode';

// Components
import Logo from '../Logo';
import { Container } from './css';
import { P, H5, A } from '../../css/type';

function Header() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  return (
    <Container darkModeActive={darkModeActive}>
      <Link href="/">
        <a>
          <Logo darkModeActive={darkModeActive} />
        </a>
      </Link>
      <div className="navbar">
        <Image
          style={{ cursor: 'pointer' }}
          onClick={darkModeActive ? switchToLightMode : switchToDarkMode}
          src={darkModeActive ? '/icons/dark.svg' : '/icons/light.svg'}
          alt="icon image"
          width={20}
          height={20}
        />
        <Link href="/despre">
          <A margin="0 0 0 20px" darkModeActive={darkModeActive}>
            Despre noi
          </A>
        </Link>
        <Link href="/blog">
          <A margin="0 0 0 20px" darkModeActive={darkModeActive}>
            Blog
          </A>
        </Link>
      </div>
    </Container>
  );
}

export default Header;
