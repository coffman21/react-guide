import React, {Component} from 'react';

class ValidationComponent extends Component {
  render() {
    return <label>{this.props.status}</label>
  }
}

export default ValidationComponent