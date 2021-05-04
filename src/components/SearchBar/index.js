import { useState } from 'react';
import { useDarkMode } from 'next-dark-mode';

import { Container } from './style';

function SearchBar({ onChange, placeholder }) {
  const { darkModeActive } = useDarkMode();
  const [searchParam, setParam] = useState('');
  const [inputClass, setInputClass] = useState('input');
  const [buttonClass, setButtonClass] = useState('search');
  const toggleHandler = () => {
    if (inputClass === 'input' && buttonClass === 'search') {
      setInputClass('square');
      setButtonClass('close');
    } else {
      setInputClass('input');
      setButtonClass('search');
    }
  };
  return (
    <Container darkModeActive={darkModeActive}>
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <div className="search"></div>
    </Container>
  );
}

export default SearchBar;
