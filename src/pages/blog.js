import PageHead from '../components/PageHead';
import styled from 'styled-components';
import { useDarkMode } from 'next-dark-mode';

const Main = styled.div`
  width: 100%;
  padding-top: 50px;
`;

export default function Blog() {
  const { darkModeActive } = useDarkMode();

  return (
    <>
      <PageHead title="Asigurari de acasa - Blog" description="" keywords="" />

      <Main darkModeActive={darkModeActive}>Pagina de blog</Main>
    </>
  );
}
