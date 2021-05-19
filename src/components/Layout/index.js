import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import ScrollNavigation from '../ScrollNavigation';
import { Container } from '../../css';
import { useDarkMode } from 'next-dark-mode';

function Layout({ children }) {
  const { darkModeActive } = useDarkMode();
  return (
    <Container darkModeActive={darkModeActive}>
      <Header />
      <ScrollNavigation />
      {children}
      <Footer darkModeActive={darkModeActive} />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
