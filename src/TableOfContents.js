/**
 * Created by sophia on 6/21/17.
 */
import React from 'react';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';

class TableOfContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoverIndex: '',
      show: false,
      key: '',
      showNewRecipeModal: false
    }
  }
  getOnMouseEnter = (hoverIndex) =>
    () => {
      this.setState({
        hover: true,
        hoverIndex
      })
  };
  getOnMouseLeave = () => {
    this.setState({
      hover: false,
      hoverIndex: ''
    })
  };
  viewRecipe = (index) =>
    () => {
      this.setState({
        key: index,
        show: true
      });
  };
  handleDelete = (index) =>
    () => {
      this.props.deleteRecipe(index);
  };
  openNewRecipeModal = () => {
    this.setState({
      showNewRecipeModal: true
    })
  };
  closeNewRecipeModal = () => {
    this.setState({
      showNewRecipeModal: false
    })
  };
  render() {
    const recipeNames = this.props.recipes.map((recipe, index) => {
      return (
        <div className={this.state.key === index ? 'row row recipe-list-name-row recipe-list-name-row-focus' : 'row recipe-list-name-row'} key={index} onMouseEnter={this.getOnMouseEnter(index)}
                                                              onMouseLeave={this.getOnMouseLeave}
                                                              onClick={this.viewRecipe(index)}
        >
          <p className="recipe-list-name" title="Click to view details">{recipe.name}</p>
          <div className="float-right">
          { this.state.hoverIndex === index && this.state.hover ?
            <div className="editDeleteBtns">
              {/*<button className="btn btn-default">Edit</button>*/}
              <button className="btn btn-default" onClick={this.handleDelete(index)}>Delete</button>
            </div>
            : null }
          { this.state.key === index ?
              <div className="triangle-right"></div>
            : null }
            </div>
        </div>
      )
    });
    return (
      <div id="tableOfContents" className="row">
          <div id="recipeList" className={this.state.show ? 'col-md-4 col-xs-0 toc-after' : 'col-md-4 col-md-offset-4 col-xs-12 toc-before'}>
            <div className="row">
              <h2>Table of Contents</h2>
            </div>
            <hr />
            {recipeNames}
            <div className="row add-new" onClick={this.openNewRecipeModal}>
              <div className="add-new-plus">
                <span>+</span>
              </div>
              <p title="Click to add new">Add new</p>
            </div>
          </div>
          { this.state.showNewRecipeModal ?
            <NewRecipe showNewRecipeModal={this.state.showNewRecipeModal}
                       recipes={this.props.recipes}
                       closeNewRecipeModal={this.closeNewRecipeModal}
            />
          : null }
          { typeof this.state.key !== 'undefined' && this.state.show ?
            <div id="recipe" className="col-md-8 col-xs-12" >
              <Recipe recipe={this.props.recipes[this.state.key]}
                      //recipes={this.props.recipes}
                      handlePrepTimeSave={this.props.handlePrepTimeSave(this.state.key)}
                      handleCookTimeSave={this.props.handleCookTimeSave(this.state.key)}
                      servingsChange={this.props.getOnServingsChange(this.state.key)}
              />
            </div>
            : <div className="col-md-4 col-xs-0"></div> }
      </div>
    );
  }
}

export default TableOfContents;