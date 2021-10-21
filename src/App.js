import { Component } from 'react';

import { CardList } from './components/cardList/cardList';
import { SearchBox } from './components/searchBox/searchBox';

import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => { this.setState({ searchField: e.target.value }) }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <h1>Boorgir</h1>
        <SearchBox handleChange={(e) => this.setState({ searchField: e.target.value })} placeholder="Search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
