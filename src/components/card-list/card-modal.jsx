import React from 'react';
import './card-modal.css'
export default class CardModal extends React.Component{
    constructor(props){
        super();

    }



    render(){
        console.log(this.props.data)
        return(
            <div className="modal" >
                <div className="modal-content">
                    
                    <div className="modal-header">
                         <button onClick={()=>  this.props.closeModal(undefined)} className="button"type="button">Close</button>

                        <h1 className="modal-title">{this.props.data.currentCharacer.name}</h1>

                    </div>
                    <div  className="modal-body" className='card-modal-container'>
                        
                            <div className = "image-container">
                            <img alt={this.props.data.currentCharacer.name} src = {this.props.data.currentCharacer.image}/>
                           </div> 
                            <div className = "bio-container">
                                <p>Species: {this.props.data.currentCharacer.species}</p>
                                <p>Gender: {this.props.data.currentCharacer.gender}</p>
                                <p>First Appearence:   </p>
                            </div>
                            {this.props.episodes.length >0 ? 
                            <div className="episode-container">
                                <label for="cars">Episodes:</label>
                                <select id="cars" name="cars">
                                {this.props.episodes.map(episode =>  
                                  
                                  <option value = {episode.name.split("").join("").toLowerCase()}>{episode.name}</option>
                                )}
                            
                                 </select>
                            </div> :
                                 <div></div>
                            }
                            
                    </div>
                    <div className="modal-footer">
                       
                        
                    </div>
                </div>
            </div>
        )
    }



}