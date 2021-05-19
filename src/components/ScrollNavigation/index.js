import { Container } from './css';

const lineNumbers = ['01', '02', '03', '04', '05', '06', '07', '08'];
function ScrollNavigation() {
  return (
    <Container>
      {lineNumbers.map((number, index) => (
        <div key={index} className="number">
          <svg
            width="15"
            height="2"
            viewBox="0 0 15 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L15 1" stroke="black" strokeWidth="0.5" />
          </svg>

          <p>{number}</p>
        </div>
      ))}
    </Container>
  );
}

export default ScrollNavigation;
