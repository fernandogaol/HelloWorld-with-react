import React from "react";
import "./style.css";

class HelloWorld extends React.Component {
  state = {
    who: "World"
  };

  displayWord = Word => {
    this.setState({
      who: Word
    });
  };

  render() {
    return (
      <main>
        <div className="app-title">
          <h1>Hello, {this.state.who}</h1>
        </div>
        <div className="app-buttons">
          <button onClick={() => this.displayWord("World")}>World</button>
          <button onClick={() => this.displayWord("Friend")}>Friend</button>
          <button onClick={() => this.displayWord("React")}>React</button>
        </div>
      </main>
    );
  }
}

export default HelloWorld;
