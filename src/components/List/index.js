import { Container } from './style';
import ListItem from '../ListItem';

function List({ data, pathname, handleShowOnMap }) {
  return (
    <Container>
      {data &&
        data.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            pathname={pathname}
            // handleShowOnMap={handleShowOnMap}
          />
        ))}
    </Container>
  );
}

export default List;
