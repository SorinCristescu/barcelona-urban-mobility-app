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

export const getInitials = (fullName) => {
  let names = fullName.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  return initials;
};

export const removeElement = (array, elem) => {
  var index = array.indexOf(elem);
  if (index > -1) {
    const updatedArray = array.splice(index, 1);
    return updatedArray;
  } else return;
};

export const elementAlreadyExist = (id, array) =>
  !!array.find((item) => item.id === id);

export const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);
