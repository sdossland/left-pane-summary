import React from 'react';
import TableOfContents from './TableOfContents';
import './App.css';
import mountainRange from './images/mountainRange.jpg';
import sunset from './images/sunset.jpg';
import waterfall from './images/waterfall.jpg';

var recipes = [{
  id: 0,
  name: 'Summer Kale Salad',
  prepTime: 65,
  cookTime: 10,
  servings: 1,
  ingredients: ['1 bunch kale, torn into bite size pieces', '1 ripe tomatoe', '1/2 cup raw broccoli', '1/2 avocado', '1 stalk green onion', '1/3 cup quinoa', '3 tbsps lemmon juice', '1 tbsp extra virgin olive oil', 'freshly ground pepper (to taste)', 'red chili flakes (to taste)'],
  steps: ['Lorem ipsum cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.',
          'Adipisicing elit.',
          'Tempore tempora rerum..'],
  image: mountainRange
}, {
  id: 1,
  name: 'Test',
  prepTime: 10,
  cookTime: 10,
  servings: 2,
  ingredients: ['Lorem', 'ipsum'],
  steps: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          'Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'],
  image: sunset
}, {
  id: 2,
  name: 'Lorem ipsum',
  prepTime: 10,
  cookTime: 10,
  servings: 2,
  ingredients: ['Lorem', 'ipsum'],
  steps: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Tempore tempora rerum, est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt esse magni, ut, dignissimos.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'],
  image: waterfall
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

  // getOnPrepTimeChange = (key) => (e) => {
  //   var recipes = this.state.recipes.slice();
  //   var recipe = recipes[key];
  //   recipe.prepTime = e.target.value;
  //   this.setState({ recipes })
  // };
  handlePrepTimeSave = (key) =>
    (newPrepTime) => {
      var recipes = this.state.recipes.slice();
      var recipe = recipes[key];
      recipe.prepTime = newPrepTime;
      this.setState({ recipes })
  };
  handleCookTimeSave = (key) =>
    (newCookTime) => {
      var recipes = this.state.recipes.slice();
      var recipe = recipes[key];
      recipe.cookTime = newCookTime;
      this.setState({ recipes })
  };
  getOnServingsChange = (key) => (e) => {
    var recipes = this.state.recipes.slice();
    var recipe = recipes[key];
    recipe.servings = e.target.value;
    this.setState({ recipes })
  };
  render() {
    return (
      <div className="container-fluid">
        <TableOfContents recipes={this.state.recipes}
                         deleteRecipe={this.deleteRecipe}
                         handlePrepTimeSave={this.handlePrepTimeSave}
                         handleCookTimeSave={this.handleCookTimeSave}
                         getOnServingsChange={this.getOnServingsChange}
        />
      </div>
    );
  }
}

export default App;
