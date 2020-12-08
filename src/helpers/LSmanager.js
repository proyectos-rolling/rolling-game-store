export function Add(key, value, allowDuplicates = false) {
  const items = JSON.parse(localStorage.getItem(key)) || [];
  if (allowDuplicates) {
    items.push(value);
  } else {
    if (!items.includes(value)) {
      items.push(value);
    }
  }
  localStorage.setItem(key, JSON.stringify(items));
}
export function Delete(key, value) {
  const items = JSON.parse(localStorage.getItem(key)) || [];
  const filteredItems = items.filter((item) => item !== value);
  localStorage.setItem(key, JSON.stringify(filteredItems));
  if (items === 0 || filteredItems.length === 0) {
    localStorage.removeItem(key);
  }
}

export function deleteAll(key) {
  localStorage.removeItem(key);
  console.log(key + " deleted form LS");
}
