import React from 'react';
import './card-modal.css'
export default class CardModal extends React.Component{
    constructor(props){
        super();
        this.state = {selectedEpisode: ''}
    }


    setEpisode = (e) =>{
        this.setState({selectedEpisode: e.target.value})
    }

    redirectToEpisode = () =>{
        const episodeLink = this.state.selectedEpisode.split(" ").join("-")
        window.open(
              `https://www.adultswim.com/videos/rick-and-morty/${episodeLink}`, "_blank");
        
    
    }

    render(){
        console.log(this.props.data)
        return(
            <div className="modal" >
                <div className="modal-content">
                    
                    <div className="modal-header">
                         <button onClick={()=>  this.props.closeModal(undefined)} className="close-button"type="button">X</button>

                        <h1 className="modal-title">{this.props.data.currentCharacer.name}</h1>

                    </div>
                    <div  className="modal-body" className='card-modal-container'>
                        
                            <div className = "image-container">
                            <img alt={this.props.data.currentCharacer.name} src = {this.props.data.currentCharacer.image}/>
                           </div> 
                            <div className = "bio-container">
                                <p>Species: {this.props.data.currentCharacer.species}</p>
                                <p>Gender: {this.props.data.currentCharacer.gender}</p>
                                <p>First Appearence: {this.props.episodes[0].name} </p>
                            </div>
                            {this.props.episodes.length >0 ? 
                            <div className="episode-container">
                                <label for="cars">Episodes:</label>
                                <select className = "dropdown" value={this.state.selectedEpisode} 
                                       onChange={this.setEpisode} >
                                <option value=""> Select Episodes</option>
                                {this.props.episodes.map(episode =>  
                                  
                                  <option value = {episode.name.split("").join("").toLowerCase()}>{episode.name}</option>
                                )}
                            
                                 </select>
                                 {this.state.selectedEpisode !== "" ?
                                    <div className="streaming-button-container">
                                     <button className="streaming-button" onClick={this.redirectToEpisode}>STREAM {this.state.selectedEpisode.toUpperCase()}</button>
                                     </div>
                                    :
                                    <div></div>
                                 }
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