import React from 'react'
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list'
class App extends React.Component {
  constructor(props) {
    super();
    //set it to default 
    this.state = {
      characters: ""
    };
    this.showList = this.showList.bind(this)
  }

  async componentDidMount() {
    await  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(users => this.setState({characters: users}))
    
  }

   showList(){
             return Object.values(this.state.characters.results).map(character =>  <h1>{character.name}</h1>)
  }


  render(){
    return (
      <div className="App">
          
          
          { this.state.characters !==""?
                  // console.log(this.state.characters.amiibo)
                 <CardList characters = {this.state.characters}/>
                  // {Object.values(this.state.characters.results).map(character =>  <h1>{character.name}</h1>)}
                :
              <div></div>
            }
      </div>
    );
  }
}

export default App;
