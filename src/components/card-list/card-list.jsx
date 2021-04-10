import react from 'react';
import './card-list.css'
import {Card} from './card-item';
export const CardList = (props) => (
 <div className='card-list'>
     {Object.values(props.characters.results).map(character =>  
        <Card key = {character.id} character= {character}/>
    //  <h1 key = {character.id}>{character.name}</h1>
     )}
 </div>
)