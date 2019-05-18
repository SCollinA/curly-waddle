import React from 'react';
import './App.css';

interface Props {

}

interface State {
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  incrementCount = () => this.updateCount(this.state.count + 1)
  decrementCount = () => this.updateCount(this.state.count - 1)

  updateCount = (count: number) => this.setState({
    count
  })

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h1>{this.state.count}</h1>
        <div className='counterButtons'>
          <h1 
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={this.incrementCount}
          >
            +
          </h1>
          <h1 
            style={{ display: 'inline', cursor: 'pointer' }}
            onClick={this.decrementCount}
          >
            -
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
