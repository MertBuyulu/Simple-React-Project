import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = { monsters: [] };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ monsters: data });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
