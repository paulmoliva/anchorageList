export const allCategories = categories => {
  let result = [];
  Object.keys(categories).forEach( categoryID => {
    result.push( categories[categoryID]);
  });
  return result;
};
