import React, { Component } from 'react';
class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.onRmRecipe = this.onRmRecipe.bind(this)
    this.state = {
    }
  }

  onRmRecipe(recipe) {
    this.props.rmrecipe(recipe)
  }

  render() {
    const recipeList = this.props.recipes.map((recipe, idx) => {
      return <li key={idx}>{recipe} <button onClick={()=> this.onRmRecipe(recipe)}>X</button></li>;
    });
    return (
      <ul>
        { recipeList }
      </ul>
    )
  }
}

export default RecipeList;