/**
 * Created by sophia on 6/22/17.
 */
import React from 'react';

class TimeChangeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPrepTime: props.prepTime,
      newCookTime: props.cookTime
    }
  }
  handleOutsideClick = (e) => {
    if (e.target.id === 'timeChangeModal') {
      this.props.closeModal();
    }
  };
  prepTimeOnChange = (e) => {
    this.setState({
      newPrepTime: e.target.value
    })
  };
  cookTimeOnChange = (e) => {
    this.setState({
      newCookTime: e.target.value
    })
  };
  handleSave = (e) => {
    e.preventDefault();
    (this.props.activity === 'prep' ? this.props.handlePrepTimeSave(this.state.newPrepTime) : this.props.handleCookTimeSave(this.state.newCookTime));
    this.props.closeModal();
  };
  render() {
    var title = (this.props.activity === 'prep' ? 'Prep Time' : 'Cook Time');
    return (
      <div id="timeChangeModal" className="modal" style={{ display: this.props.showModal ? 'block' : 'none' }} onClick={this.handleOutsideClick}>
        <div className="modal-content">
          <div className="row">
            <h4 className="modal-title">{title}</h4>
            <div className="closeModal" onClick={this.props.closeModal}>X</div>
          </div>
          <hr />
          <div className="row">
            { this.props.activity === 'prep' ?
              <input className="modal-input" type="text" placeholder="Enter number of minutes" value={this.state.newPrepTime} onChange={this.prepTimeOnChange} />
            : <input className="modal-input" type="text" placeholder="Enter number of minutes" value={this.state.newCookTime} onChange={this.cookTimeOnChange} /> }
          </div>
          <div className="row saveCloseBtns">
            <button className="btn btn-default save-btn" onClick={this.handleSave}>Save</button>
            <button className="btn btn-default" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeChangeModal;