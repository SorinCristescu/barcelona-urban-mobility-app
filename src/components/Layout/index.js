import Header from '../Header';
import { Container } from '../../styles';
import { useDarkMode } from 'next-dark-mode';

function Layout({ children, themeToggler, theme }) {
  const { darkModeActive } = useDarkMode();
  return (
    <Container darkModeActive={darkModeActive}>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
