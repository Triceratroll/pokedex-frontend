function compareArrays(arr1, arr2) {
  return arr1.map((el1) => {
    let match = arr2.find((el2) => el1.id === el2);
    return { ...el1, match: match ? true : false };
  });
}

export { compareArrays };
