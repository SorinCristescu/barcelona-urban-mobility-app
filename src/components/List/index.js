import { Container } from './style';
import ListItem from '../ListItem';

function List({ data }) {
  return (
    <Container>
      {data && data.map((item) => <ListItem key={data.id} item={item} />)}
    </Container>
  );
}

export default List;
