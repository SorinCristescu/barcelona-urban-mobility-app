import { Container } from './css';
import { Label } from '../../css/type';

function Button({ label }) {
  return (
    <Container>
      <div className="btn">
        <Label>{label}</Label>
      </div>
      {/* <div className="shadow"></div> */}
    </Container>
  );
}

export default Button;
