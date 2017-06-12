import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/recipes';
import AddRecipe from './AddRecipe';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const recipeList = this.props.recipes.map((recipe, idx) => {
        return <li key={idx}>{recipe}</li>;
    });
    return (
      <div className="Recipes">
        <AddRecipe addrecipe={this.props.actions.addRecipe}/>
        <h2>Liste de recettes</h2>
        <ol>
            {recipeList}
        </ol>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
    return {
        recipes: state.recipes
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recipes);