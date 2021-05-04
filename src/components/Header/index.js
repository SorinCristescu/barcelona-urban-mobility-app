import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from 'next-dark-mode';
import { signIn, signOut, useSession } from 'next-auth/client';

// Components
import { Container, Logo } from './style';
import { P, H5 } from '../../styles';

function Header({ theme }) {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo>
            <Image
              src="/logo/logo_TMB.png"
              alt="logo image"
              width={80}
              height={80}
            />
            <div className="text">
              <P darkModeActive={darkModeActive}>
                Transportations metropolitans
              </P>
              <H5 darkModeActive={darkModeActive}>de Barcelona</H5>
            </div>
          </Logo>
        </a>
      </Link>

      <Image
        style={{ cursor: 'pointer' }}
        onClick={darkModeActive ? switchToLightMode : switchToDarkMode}
        src={darkModeActive ? '/icons/dark.svg' : '/icons/light.svg'}
        alt="icon image"
        width={25}
        height={25}
      />
    </Container>
  );
}

export default Header;
