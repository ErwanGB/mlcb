export const addRecipe = (recipe) => {
  return {
      type: 'ADD_RECIPE',
      recipe
  };
}

export const rmRecipe = (recipe) => {
  return {
      type: 'REMOVE_RECIPE',
      recipe
  }
}