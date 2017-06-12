import React, { Component } from 'react';
class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.onAddRecipe = this.onAddRecipe.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      recipeName:''
    }
  }

  onChange(event){
    this.setState({recipeName: event.target.value});

  }

  onAddRecipe(e) {
     e.preventDefault();
     this.props.addrecipe(this.state.recipeName)
     this.refs.name.value = ''
  }

  render() {
    return (
      <div>
          <h2>Ajouter recette :</h2>
          <form onSubmit={this.onAddRecipe}>
            <input type="texte" name="recipeName" ref="name" onChange={this.onChange} />
          </form>
      </div>
    );
  }
}
export default AddRecipe;