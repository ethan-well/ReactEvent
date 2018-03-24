import React from 'react';
import emitter from './events';

class List1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    const listener = () => {
      this.setState({
        count: this.state.count + 1
      });
    }

    this.eventEmitter = emitter.on('incream', listener);
  }

  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  render(){
    return(
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default List1;
