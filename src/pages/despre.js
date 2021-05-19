import PageHead from '../components/PageHead';
import styled from 'styled-components';
import { useDarkMode } from 'next-dark-mode';

const Main = styled.div`
  width: 100%;
  padding-top: 50px;
`;

export default function Despre() {
  const { darkModeActive } = useDarkMode();

  return (
    <>
      <PageHead
        title="Asigurari de acasa - Despre"
        description=""
        keywords=""
      />

      <Main darkModeActive={darkModeActive}>Despre page</Main>
    </>
  );
}
