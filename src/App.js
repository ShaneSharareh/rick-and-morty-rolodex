import React from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list'
import CardModal from './components/card-list/card-modal'
import {SearchBox} from './components/search-box/search-box'
class App extends React.Component {
  constructor(props) {
    super();
    //set it to default 
    this.state = {
      characters: "",
      searchField: '',
      currentCharacer: undefined,
      episodes: undefined
    };

   
  }
  calculateEpisodes = () =>{
      const numOfEpisodes = []
      for (let i = 1; i<20; i++){
        numOfEpisodes.push(i)
      }
      return numOfEpisodes.join(",")
    }

   componentDidMount() {

    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(users => this.setState({characters: users}))

    

    fetch(`https://rickandmortyapi.com/api/episode/`)
    .then(response => response.json())
    .then(users => this.setState({episodes: users}))

    
  } 

    

   setCurrentCharacter = (e, data) =>{
     this.setState({currentCharacer: e}, console.log(e))


  }


  getFilteredCharacters = (searchField) =>{
     console.log("porfavorsenor")

     return Object.values(this.state.characters.results).filter(character =>
                    character.name.toLowerCase().includes(searchField.toLowerCase()))
  }

   getFilteredEpisodes = () =>{
     return Object.values(this.state.episodes.results).filter(episode =>
                    this.state.currentCharacer.episode.includes(episode.url))
  }

  handleSearchChange = (e) =>{
   this.setState({searchField: e.target.value})
  }

  closeModal = (e) =>{
    this.setState({currentCharacer: ""})
  }


  render(){
    const searchField = this.state.searchField; 
    return (
      <div className="App">
        <h1>Rick and Morty Rolodex</h1>
          <SearchBox 
            placeholder= 'search characters...'
            handleSearchChange={this.handleSearchChange} 
            />
          <div>
            {  this.state.currentCharacer && this.state.episodes  ?
              <div>
                <CardModal data ={this.state} closeModal = {this.closeModal} episodes = {this.getFilteredEpisodes()} />
              </div>  :
              <div></div>
          }
          </div>
          { this.state.characters != "" ?
                 <CardList setCurrentCharacter = {this.setCurrentCharacter} characters = {this.getFilteredCharacters(searchField)}/>
                :
              <div>Loading..</div>
            }
      </div>
    );
  }
}

export default App;
