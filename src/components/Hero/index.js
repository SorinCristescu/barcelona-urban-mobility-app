import { Container } from './css';
import { H1, P } from '../../css/type';
import Button from '../Button';

function Hero({ darkModeActive, title, subtitle, label }) {
  return (
    <Container>
      <H1 darkModeActive={darkModeActive} textAlign="left" width="100%">
        {title}
      </H1>
      <P
        darkModeActive={darkModeActive}
        textAlign="left"
        width="100%"
        margin="0"
      >
        {subtitle}
      </P>
      <Button label="Solicita oferta" />
    </Container>
  );
}

export default Hero;
