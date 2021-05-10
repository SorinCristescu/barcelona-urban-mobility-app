import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from 'next-dark-mode';
import { signIn, signOut, useSession } from 'next-auth/client';

// Components
import User from '../User';
import { Container, Logo } from './style';
import { P, H5 } from '../../styles';

function Header({ theme }) {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  const [session, loading] = useSession();

  return (
    <Container darkModeActive={darkModeActive}>
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
                Transportation metropolitans
              </P>
              <H5 darkModeActive={darkModeActive}>de Barcelona</H5>
            </div>
          </Logo>
        </a>
      </Link>
      <div className="navbar">
        {session && (
          <User
            src={session.user.image}
            alt={`${session.user.name} photo`}
            name={session.user.name}
            darkModeActive={darkModeActive}
          />
        )}
        {!session && (
          <p className="btn" onClick={() => signIn()}>
            sign in
          </p>
        )}
        {session && (
          <p className="btn" onClick={() => signOut()}>
            sign out
          </p>
        )}
        <Image
          style={{ cursor: 'pointer' }}
          onClick={darkModeActive ? switchToLightMode : switchToDarkMode}
          src={darkModeActive ? '/icons/dark.svg' : '/icons/light.svg'}
          alt="icon image"
          width={25}
          height={25}
        />
      </div>
    </Container>
  );
}

export default Header;
