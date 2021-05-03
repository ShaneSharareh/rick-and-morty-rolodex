import react from 'react';
import './card-item.css' 
export const Card = (props) => (
    <div onClick={ () => {props.setCurrentCharacter(props.character)}}  className='card-container'>
        <img alt={props.character.name} src = {props.character.image}/>
        <h1>{props.character.name}</h1>
    </div>
)


//Has single Cycle?

