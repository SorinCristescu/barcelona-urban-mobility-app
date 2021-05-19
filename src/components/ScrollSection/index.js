import Link from 'next/link';
import { Container } from './css';
import { H5, P, A } from '../../css/type';

function ScrollSection({ children, title, subtitle, href, darkModeActive }) {
  return (
    <Container>
      <div className="left-side">
        <H5 darkModeActive={darkModeActive}>{title}</H5>
        <P darkModeActive={darkModeActive}>{subtitle}</P>
        <Link href={href}>
          <A darkModeActive={darkModeActive}>Afla mai mult</A>
        </Link>
      </div>
      <div className="right-side">{children}</div>
    </Container>
  );
}

export default ScrollSection;
