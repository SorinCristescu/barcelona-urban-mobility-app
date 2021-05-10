import PropTypes from 'prop-types';
import { getInitials } from '../../utils';
import { Container } from './style';

function User({ name, src, alt, darkModeActive }) {
  return (
    <Container darkModeActive={darkModeActive}>
      <p className="user-name">{name}</p>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="circle">{getInitials(name)}</div>
      )}
    </Container>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  darkModeActive: PropTypes.bool.isRequired,
};
export default User;
