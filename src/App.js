import React from 'react'
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list'
class App extends React.Component {
  constructor(props) {
    super();
    //set it to default 
    this.state = {
      characters: "",
      searchField: ''
    };
    this.showList = this.showList.bind(this)
    this. getFilteredCharacters = this.getFilteredCharacters.bind(this)
  }

  async componentDidMount() {
    await  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(users => this.setState({characters: users}))
    
  }

   showList(){
             return Object.values(this.state.characters.results).map(character =>  <h1>{character.name}</h1>)
  }

  getFilteredCharacters(searchField){
     return Object.values(this.state.characters.results).filter(character =>
                    character.name.toLowerCase().includes(searchField.toLowerCase()))
  }

  render(){
    const searchField = this.state.searchField; 
    return (
      <div className="App">
          <input type='search' placeholder = "Search Character" onChange={e =>{this.setState({searchField: e.target.value})}}/>
          
          { this.state.characters != "" ?
                 <CardList characters = {this.getFilteredCharacters(searchField)}/>
                :
              <div>Loading..</div>
            }
      </div>
    );
  }
}

export default App;
