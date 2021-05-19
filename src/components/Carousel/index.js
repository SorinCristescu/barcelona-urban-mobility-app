import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Container } from './css';
import Card from '../Card';

// const { default: Carousel } = dynamic(
//   () => require('@brainhubeu/react-carousel'),
//   { ssr: false }
// );

const data = [
  {
    id: 1,
    title: 'Asigurari RCA',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '01',
  },
  {
    id: 2,
    title: 'Asigurari CASCO',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '02',
  },
  {
    id: 3,
    title: 'Asigurari de locuinta',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '03',
  },
  {
    id: 4,
    title: 'Asigurari de transport',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '04',
  },
  {
    id: 5,
    title: 'Asigurari de viata',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '05',
  },
  {
    id: 6,
    title: 'Asigurari de sanatate',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '06',
  },
  {
    id: 7,
    title: 'Asigurari de accidente',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '07',
  },
  {
    id: 8,
    title: 'Asigurari de calatorie',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    number: '08',
  },
];
function MyCarousel() {
  const cursorRef = useRef();
  const initialCount = 1;
  const [progress, setProgress] = useState(initialCount);
  const [cursorWidth, setCursorWidth] = useState(0);

  useEffect(() => {
    let cursorWidth = cursorRef.current.offsetParent.clientWidth / data.length;
    setCursorWidth(cursorWidth);

    console.log(
      'cursorRef: ',
      cursorWidth,
      cursorRef.current.offsetParent.clientWidth
    );
  }, [cursorWidth]);

  const handleIncrease = () => {
    if (progress < data.length) {
      setProgress(progress + 1);
    } else {
      return;
    }
  };

  const handleDecrease = () => {
    if (progress > initialCount) {
      setProgress(progress - 1);
    } else {
      return;
    }
  };

  const cursorLeft = () => {
    if (progress === 1) {
      return '0px';
    } else {
      return progress * cursorWidth - cursorWidth + 'px';
    }
  };

  return (
    <Container progress={cursorLeft()}>
      <div className="progress">
        <div ref={cursorRef} className="cursor"></div>
      </div>
      <div className="buttons">
        <svg
          onClick={handleDecrease}
          className="arrow-left"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.3572 35.7143L19.6429 25L30.3572 14.2857"
            stroke="#0D0D0D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          onClick={handleIncrease}
          className="arrow-right"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6428 35.7143L30.3571 25L19.6428 14.2857"
            stroke="#0D0D0D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* <Carousel plugins={['arrows']}> */}
      <div className="cards">
        {data.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            number={card.number}
          />
        ))}
      </div>

      {/* </Carousel> */}
    </Container>
  );
}

export default MyCarousel;
