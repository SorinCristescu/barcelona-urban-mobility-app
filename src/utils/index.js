export const asc = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const dsc = (a, b) => {
  if (b.name < a.name) {
    return -1;
  }
  if (b.name > a.name) {
    return 1;
  }
  return 0;
};
