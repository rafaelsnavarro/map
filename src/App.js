import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  state = {
    IT: [
      {
        name: "Rafael",
        age: 27,
        profession: "Front End Developer"
      },
      {
        name: "Italo",
        age: 24,
        profession: "Development Analyst"
      },
      {
        name: "Vinicius",
        age: 24,
        profession: "Network analyst"
      },
      {
        name: "Daniel",
        age: 23,
        profession: "Network analyst"
      },
      {
        name: "Léo",
        age: 24,
        profession: "IT Student"
      },
      {
        name: "João",
        age: 18,
        profession: "Student"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.IT.map((item) => (
          <div>
            <h2>Name: {item.name}</h2>
            <h2>Profession: {item.profession}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
