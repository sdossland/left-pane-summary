import React from 'react';
import TableOfContents from './TableOfContents';
import './App.css';

var recipes = [{
  id: 0,
  name: 'Summer Kale Salad',
  prepTime: 65,
  cookTime: 10,
  servings: 1,
  ingredients: ['1 bunch kale, torn into bite size pieces', '1 ripe tomatoe', '1/2 cup raw broccoli', '1/2 avocado', '1 stalk green onion', '1/3 cup quinoa', '3 tbsps lemmon juice', '1 tbsp extra virgin olive oil', 'freshly ground pepper (to taste)', 'red chili flakes (to taste)'],
  steps: ['Lorem', 'ipsum...'],
  //show: false
}, {
  id: 1,
  name: 'test',
  prepTime: 10,
  cookTime: 10,
  servings: 2,
  ingredients: ['Lorem', 'ipsum'],
  steps: ['Lorem', 'ipsum...'],
  //show: false
}, {
  id: 2,
  name: 'Lorem ipsum',
  prepTime: 10,
  cookTime: 10,
  servings: 2,
  ingredients: ['Lorem', 'ipsum'],
  steps: ['Lorem', 'ipsum...'],
  //show: false
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes
    }
  };
  deleteRecipe = (key) => {
    var recipes = this.state.recipes.slice();
    recipes.splice(key, 1);
    this.setState({ recipes })
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="col-xs-12">
          <TableOfContents recipes={this.state.recipes} deleteRecipe={this.deleteRecipe} />
        </div>
      </div>
    );
  }
}

export default App;
