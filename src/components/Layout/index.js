import Header from '../Header';
import { Container } from '../../styles';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
