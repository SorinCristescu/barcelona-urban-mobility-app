import { Container } from './style';
import ListItem from '../ListItem';

function List({ data, pathname, setShowOnMap, originStop, endingStop }) {
  return (
    <Container>
      {data &&
        data.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            pathname={pathname}
            originStop={originStop}
            endingStop={endingStop}
            setShowOnMap={setShowOnMap}
          />
        ))}
    </Container>
  );
}

export default List;
