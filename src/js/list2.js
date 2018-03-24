import React, { Component } from 'react';
import emitter from './events';

class List2 extends React.Component {
  constructor(props) {
    super(props);
  }

  onHandleIncream() {
    emitter.emit('incream');
  }

  render() {
    return(
      <div>
        <button onClick={this.onHandleIncream.bind(this)}>incream</button>
      </div>
    )
  }
}

export default List2;
