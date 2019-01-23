import React, { Component } from 'react';
import './App.css';


const persons = [
  {
    id: 1,
    name: "Courtney Kalina"
  },
  {
    id: 2,
    name: "Delmer Paquet"
  },
  {
    id: 3,
    name: "Teofila Reinsch",
  },
  {
    id: 4,
    name: "Tiera Coto",
  },
  {
    id: 5,
    name: "Phuong Arbuckle",
  },
];


const UsersList = (props) => {

  const persons = props.persons.map(person => (
    <li key={person.id}>{person.name}</li>
  ))

  if (persons.length > 0) {
    return (
      <ul className="list">
        {persons}
      </ul>
    )
  }
  return (
    <p>No results!</p>
  )
}


class App extends Component {

  state = {
    filteredUsers: persons
  }


  filterUsers = (e) => {

    const value = e.target.value;

    const filteredUsers = persons.filter(person => person.name.toLowerCase().includes(value.toLowerCase()));

    this.setState({
      filteredUsers
    })
  }

  render() {

    return (
      <div className="app" >
        <h1 className="title">Simple React app!!!</h1>
        <input onChange={this.filterUsers} className="input" type="text" placeholder="Wpisz imię" />
        <UsersList persons={this.state.filteredUsers} />
      </div>
    )
  }
}

export default App;
