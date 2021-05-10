import PropTypes from 'prop-types';
import Header from '../Header';
import { Container } from '../../styles';
import { useDarkMode } from 'next-dark-mode';

function Layout({ children }) {
  const { darkModeActive } = useDarkMode();
  return (
    <Container darkModeActive={darkModeActive}>
      <Header />
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
