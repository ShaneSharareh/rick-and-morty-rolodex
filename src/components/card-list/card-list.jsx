import React from 'react';
import './card-list.css'
import './card-item.css' 
import {Card} from './card-item';
class CardList extends React.Component{
 
 constructor(props) {
    super();
    //set it to default 
    
   
  }

   



 render(){
 return (<div className='card-list'>
     {this.props.characters.map(character =>  
            <Card setCurrentCharacter ={this.props.setCurrentCharacter} key = {character.id} character= {character}/>
     )}
 </div>)
 }
}

export default CardList