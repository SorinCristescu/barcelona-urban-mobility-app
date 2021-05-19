import { Container } from './css';
import { Label, H6, P, A } from '../../css/type';

function Card({ number, title, description }) {
  return (
    <Container>
      <Label>{number}</Label>
      <H6>{title}</H6>
      <P>{description}</P>
      <div>
        <A>Afla mai multe</A>
      </div>
    </Container>
  );
}

export default Card;
