import React, { Component } from 'react';
class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.onSubmitRecipe = this.onSubmitRecipe.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      recipeName:''
    }
  }

  onChange(event){
    this.setState({recipeName: event.target.value});

  }

  onSubmitRecipe(e) {
     e.preventDefault();
     this.props.addrecipe(this.state.recipeName)
     this.refs.name.value = ''
  }

  render() {
    return (
      <div>
          <h2>Ajouter recette :</h2>
          <form onSubmit={this.onSubmitRecipe}>
            <input type="texte" name="recipeName" ref="name" onChange={this.onChange} />
          </form>
      </div>
    );
  }
}
export default AddRecipe;