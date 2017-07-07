/**
 * Created by sophia on 7/6/17.
 */
import React from 'react';

const initialState = ({
  id: Number(),
  name: '',
  prepTime: Number(),
  cookTime: Number(),
  servings: Number(),
  ingredients: [],
  steps: [],
  img: ''
});

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState)
  };
  handleOutsideModalClick = (e) => {
    if (e.target.id === 'newRecipeModal') {
      this.props.closeNewRecipeModal();
    }
  };
  render() {
    return (
      <div id="newRecipeModal" className="modal" style={{ display: this.props.showNewRecipeModal ? 'block' : 'none' }} onClick={this.handleOutsideModalClick}>
        <div className="new-recipe-modal-content">
          <div className="row">
            <h4 className="modal-title">New Recipe</h4>
            <div className="closeModal" onClick={this.props.closeNewRecipeModal}>X</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <label htmlFor="title" className="form-label">Recipe name</label>
            </div>
            <div className="col-md-9 col-xs-12">
              <input id="title" className="modal-input" type="text" placeholder="Enter name of recipe" autoFocus value={this.state.name} /*onChange={this.prepTimeOnChange}*/ />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <label htmlFor="prep-time" className="form-label">Preparation time</label>
            </div>
            <div className="col-md-9 col-xs-12">
              <input id="prep-time" type="number" placeholder="Enter preparation time" value={this.state.prepTime} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <label htmlFor="cook-time" className="form-label">Cook time</label>
            </div>
            <div className="col-md-9 col-xs-12">
              <input id="cook-time" type="number" placeholder="Enter cook time" value={this.state.cookTime} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <label htmlFor="servings" className="form-label">Number of servings</label>
            </div>
            <div className="col-md-9 col-xs-12">
              <input id="servings" type="number" placeholder="Enter number of servings" value={this.state.servings} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <label htmlFor="ingredients" className="form-label ingredient-title">Ingredients</label>
              <span className="ingredient-title"><i>  (Enter each ingredient on its own row (press enter for each new ingredient))</i></span>
            </div>
            <div className="col-xs-12">
              <input id="ingredients" type="text" placeholder="Enter ingredients" value={this.state.ingredients} />
            </div>
          </div>
          {/*<div className="row">*/}
            {/*<label htmlFor="steps" className="form-label">Steps</label>*/}
            {/*<input id="steps" title="text" placeholder="Enter steps" value={this.state.steps}/>*/}
          {/*</div>*/}
          <div className="row saveCloseBtns">
            <button className="btn btn-default save-btn" /*onClick={this.handleSave}*/>Save</button>
            <button className="btn btn-default" onClick={this.props.closeNewRecipeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;