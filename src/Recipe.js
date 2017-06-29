/**
 * Created by sophia on 6/21/17.
 */
import React from 'react';
import TimeChangeModal from './TimeChangeModal';


class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, activity: ''};
  };
  getOnChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  };
  openPrepTimeModal = () => {
    this.setState({
      showModal: true,
      activity: 'prep'
    });
  };
  openCookTimeModal = () => {
    this.setState({
      showModal: true,
      activity: 'cook'
    });
  };
  getOnServingsChange = (e) => {
    this.setState({
      servings: e.target.value
    })
  };
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
  closeModal = () => {
    this.setState({
      showModal: false,
      activity: ''
    })
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

    var steps = this.props.recipe.steps.map((step, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-xs-1 step-col">
            <span className="step-number">{index + 1}</span>
          </div>
          <div className="col-xs-11 step-col">
            <p contentEditable="true" className="step">{step}</p>
          </div>
        </div>
      )
    });
    return (
      <div className="recipe" /*col-md-8 col-xs-12*/>
        <div className="row">
          <h2>
            <input type="text" value={this.props.recipe.name} onChange={this.getOnChangeName} />
          </h2>
        </div>
        <hr />
        {/*<img src=`${this.state.image}` />*/}
        <div className="row">
          <h4>Directions</h4>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-1 prep-sum-col">
            <i className="fa fa-clock-o fa-3x" />
          </div>
          <div className="col-xs-1 prep-sum-col vertical-line" onClick={this.openPrepTimeModal}>
            <p className="prep-label prep" name="prep">Prep</p>
            {timeDisplay(this.props.recipe.prepTime)}
          </div>
          <div className="col-xs-1 prep-sum-col vertical-line" onClick={this.openCookTimeModal}>
            <p className="prep-label">Cook</p>
            {timeDisplay(this.props.recipe.cookTime)}
          </div>
          <div className="col-xs-1 prep-sum-col">
            <label htmlFor="servings">Serves</label>
            <input className="input-prep" type="text" name="servings" value={this.props.recipe.servings} onChange={this.getOnServingsChange} />
          </div>
        </div>
        <hr />
        <div className="steps">
          {steps}
        </div>
        { this.state.showModal ?
          <TimeChangeModal prepTime={this.props.recipe.prepTime}
                           cookTime={this.props.recipe.cookTime}
                           activity={this.props.recipe.activity}
                           showModal={this.state.showModal}
                           closeModal={this.closeModal}
          />
        : null }
      </div>
    );
  }
}

export default Recipe;