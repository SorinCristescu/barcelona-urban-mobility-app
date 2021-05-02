import Link from 'next/link';
import Image from 'next/image';

// Components
import { Container, Logo } from './style';

function Header() {
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
              <p>Transportations metropolitans</p>
              <h5>de Barcelona</h5>
            </div>
          </Logo>
        </a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </Container>
  );
}

export default Header;
