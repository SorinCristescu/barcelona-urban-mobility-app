import Link from 'next/link';
import Logo from '../Logo';
import { Container } from './css';
import { A } from '../../css/type';
function Footer({ darkModeActive }) {
  return (
    <Container>
      <div className="left-side">
        <div className="links">
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Despre noi
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Blog
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              FAQ
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Termeni de utilizare
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Politica de confidentialitate
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              ANPC
            </A>
          </Link>
        </div>
        <div className="links">
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari RCA
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari CASCO
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari de viata
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari de transport
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari de calatorie
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari de locuinta
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari de sanatate
            </A>
          </Link>
          <Link href="/">
            <A darkModeActive={darkModeActive} margin="0 0 5px 0">
              Asigurari de accidente
            </A>
          </Link>
        </div>
      </div>
      <div className="right-side">
        <Logo darkModeActive={darkModeActive} />
      </div>
    </Container>
  );
}

export default Footer;
