import React from 'react';

export class Settings extends React.Component {
  constructor(props) {
    super();
    this.state = {
      lives:1
    }
  }

  render(){
    return(
      <div className="wrapper settings">
      <div className="inputLives">
        <div className="input-container">
          <label>Lives</label>
          <input type="range" min="1" max="5" value={this.state.lives} />
          <span>{this.state.lives}</span>
        </div>
      </div>
      </div>
    )
  }
}
