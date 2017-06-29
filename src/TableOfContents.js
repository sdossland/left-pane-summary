/**
 * Created by sophia on 6/21/17.
 */
import React from 'react';
import Recipe from './Recipe';

class TableOfContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoverIndex: '',
      show: false,
      key: ''
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
  render() {
    const recipeNames = this.props.recipes.map((recipe, index) => {
      return (
        <div className={this.state.key === index ? 'row row recipe-list-name-row recipe-list-name-row-focus' : 'row recipe-list-name-row'} key={index} onMouseEnter={this.getOnMouseEnter(index)}
                                                              onMouseLeave={this.getOnMouseLeave}
                                                              onClick={this.viewRecipe(index)}
        >
          <p className="recipe-list-name">{recipe.name}</p>
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
          <div id="recipeList" className={this.state.show ? 'col-md-4 col-xs-0' : 'col-md-4 col-md-offset-4 col-xs-12'}>
            <div className="row">
              <h2>Table of Contents</h2>
            </div>
            <hr />
            {recipeNames}
          </div>
          { typeof this.state.key !== 'undefined' && this.state.show ?
            <div id="recipe" className="col-md-8 col-xs-12" >
              <Recipe recipe={this.props.recipes[this.state.key]}
                      recipes={this.props.recipes}
              />
            </div>
            : <div className="col-md-4 col-xs-0"></div> }
      </div>
    );
  }
}

export default TableOfContents;