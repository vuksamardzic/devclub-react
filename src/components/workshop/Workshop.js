import React, { Component } from 'react';
import './Workshop.css';


class Workshop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="flex-c">
        <div className="text-white">{this.props.text} {this.state.count}</div>
        <button className="btn"
                onClick={this.onClick}>Increment
        </button>
      </div>
    );
  }

  onClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
}

// const Workshop = props => {
//   return (
//     <div className="w-text">{props.text}</div>
//   );
// };

export default Workshop;
