export const addRecipe = (recipe) => {
  console.log('adding recipe:', recipe);
  return {
      type: 'add',
      recipe
  };
}