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
  // const [count, setCount] = React.useState(0)
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h1></h1>
      </div>
    );
  }
}

export default App;
