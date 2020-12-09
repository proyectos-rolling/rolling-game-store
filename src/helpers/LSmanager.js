export function Add(key, value, allowDuplicates = false) {
  const items = JSON.parse(localStorage.getItem(key)) || [];
  if (allowDuplicates) {
    items.push(value);
  } else {
    if (items.filter(item=>item._id===value._id).length===0) {
      items.push(value);
    }
  }
  localStorage.setItem(key, JSON.stringify(items));
}
export function Delete(key, value) {
  const items = JSON.parse(localStorage.getItem(key)) || [];
  const filteredItems = items.filter((item) => item._id !== value._id);
  localStorage.setItem(key, JSON.stringify(filteredItems));
  if (items === 0 || filteredItems.length === 0) {
    localStorage.removeItem(key);
  }
}

export function Get(key){
  return JSON.parse(localStorage.getItem(key)) || []
}

export function Set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function deleteAll(key) {
  localStorage.removeItem(key);
  console.log(key + " deleted form LS");
}
