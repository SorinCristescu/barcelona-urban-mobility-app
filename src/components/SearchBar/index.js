import { useState } from 'react';
import { useDarkMode } from 'next-dark-mode';

import { Container } from './style';

function SearchBar({ onChange, placeholder }) {
  const { darkModeActive } = useDarkMode();

  return (
    <Container darkModeActive={darkModeActive}>
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <div className="search"></div>
    </Container>
  );
}

export default SearchBar;
