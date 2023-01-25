function toggleArrayElement(element, favsArray) {
  const index = favsArray.indexOf(element);

  if (index === -1) {
    favsArray.push(element);
  } else {
    favsArray.splice(index, 1);
  }

  localStorage.setItem("Favs", JSON.stringify(favsArray));
  return favsArray;
}

export { toggleArrayElement };
