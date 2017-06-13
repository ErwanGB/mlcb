import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/recipes';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="Recipes">
            <AddRecipe addrecipe={this.props.actions.addRecipe}/>
        <h2>Liste de recettes</h2>
            <RecipeList recipes={this.props.recipes} rmrecipe={this.props.actions.rmRecipe} />
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