/**
 * Created by sophia on 6/22/17.
 */
import React from 'react';

class TimeChangeModal extends React.Component {
  handleOutsideClick = (e) => {
    if (e.target.id === 'timeChangeModal') {
      this.props.closeModal();
    }
  };
  getPrepTimeOnChange = (e) => {
    this.setState({
      prepTime: e.target.value
    })
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
              <input className="modal-input" type="text" placeholder="Enter number of minutes" value={this.props.prepTime} onChange={this.getPrepTimeOnChange} />
            : <input className="modal-input" type="text" placeholder="Enter number of minutes" value={this.props.cookTime} /*onChange={}*/ /> }
          </div>
          <div className="row saveCloseBtns">
            <button className="btn btn-default save-btn" /*onClick={this.handleSave}*/>Save</button>
            <button className="btn btn-default" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeChangeModal;