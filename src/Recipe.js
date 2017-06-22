/**
 * Created by sophia on 6/21/17.
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
  //show: false
});

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.recipe ? Object.assign({}, props.recipe) : Object.assign({}, initialState);
  };
  getOnServingsChange = (e) => {
    this.setState({
      servings: e.target.value
    })
  }
  timeConversion = (time) => {
    var timeArr = [];
    if (time < 60) {
      timeArr = [0, time];
    } else if (time >= 60) {
      var hrs = Math.floor(time / 60);
      var mins = time - (hrs * 60);
      timeArr = [hrs, mins];
    }
    return timeArr;
  };
  render() {
    const timeDisplay = (numMins) => {
      var time = this.timeConversion(numMins);
      return (
        <div>
          { time[0] !== 0 ?
            <div style={{display: 'inline-block'}}>
              <span>{time[0]}</span>
              <span style={{color: '#8c8c8c'}}>{'\u00A0'}h{'\u00A0'}</span>
            </div>
            : null }
          { time[1] !== 0 ?
            <div style={{display: 'inline-block'}}>
              <span>{time[1]}</span>
              <span style={{color: '#8c8c8c'}}>{'\u00A0'}m</span>
            </div>
          : 'n/a' }
        </div>
      )
    };
    return (
      <div className="col-md-8 col-xs-12 recipe">
        <div className="row">
          <h2>
            <input type="text" value={this.state.name} />
          </h2>
        </div>
        <hr />
        {/*<img />*/}
        <div className="row">
          <h4>Directions</h4>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-1 prep-sum-col">
            <i className="fa fa-clock-o fa-3x" />
          </div>
          <div className="col-xs-1 prep-sum-col vertical-line" /*onClick={}*/>
            <p className="prep-label">Prep</p>
            {timeDisplay(this.state.prepTime)}
          </div>
          <div className="col-xs-1 prep-sum-col vertical-line">
            <p className="prep-label">Cook</p>
            {timeDisplay(this.state.cookTime)}
          </div>
          <div className="col-xs-1 prep-sum-col">
            <label htmlFor="servings">Serves</label>
            <input className="input-prep" type="text" name="servings" value={this.state.servings} onChange={this.getOnServingsChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;