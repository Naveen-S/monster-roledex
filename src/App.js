import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(monsters => {
      this.setState({monsters: monsters});
    });
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  getFilterList = () => {
    const {monsters, searchField} = this.state;
    var newList = monsters;
    if(searchField) {
      newList = this.state.monsters.filter(monster => {
        // Note: You can use includes insteas of indexOf
        return (monster.name.toLowerCase().indexOf(searchField.toLowerCase()) >= 0);        
      })
    }
    return newList;
  }

  render() {
    const newList = this.getFilterList();
    return (
      <div className="App">
          <h1> Monster Roledex </h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <CardList monsters={newList}/>
      </div>
    );
  }
}

export default App;
