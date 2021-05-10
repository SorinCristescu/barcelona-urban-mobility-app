import Image from 'next/image';
import { Container, Button } from './style';
import { signIn } from 'next-auth/client';
import { useDarkMode } from 'next-dark-mode';
import { H4 } from '../../styles';

function SignIn() {
  const { darkModeActive } = useDarkMode();
  return (
    <Container darkModeActive={darkModeActive}>
      <Image src="/logo/logo_TMB.png" alt="logo" width={100} height={100} />
      <h5 darkModeActive={darkModeActive}>
        Find a line or a stations in Barcelona public transportation system.
      </h5>
      <p>
        Find a line or a station in Barcelona's public transportation system.
      </p>
      <p>See on map and add to your favorites!</p>
      <p>To use this app you need first to sign in.</p>
      <Button darkModeActive={darkModeActive} onClick={() => signIn()}>
        sign in
      </Button>
    </Container>
  );
}

export default SignIn;
