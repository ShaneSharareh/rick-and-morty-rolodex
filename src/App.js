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


   componentDidMount() {

    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,242,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30')
    .then(response => response.json())
    .then(users => this.setState({characters: users}))

    

    fetch(`https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30`)
    .then(response => response.json())
    .then(users => this.setState({episodes: users}))

    
  } 

    

   setCurrentCharacter = (e, data) =>{
     this.setState({currentCharacer: e}, console.log(e))


  }


  getFilteredCharacters = (searchField) =>{
     console.log("porfavorsenor")

     return Object.values(this.state.characters).filter(character =>
                    character.name.toLowerCase().includes(searchField.toLowerCase()))
  }

   getFilteredEpisodes = () =>{
     return Object.values(this.state.episodes).filter(episode =>
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
