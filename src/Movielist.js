import React from 'react';
import Card from './Card';

const Movielist = (props) => {
    return (
        
        <div className="App-header" >
            
        {props.movies.map(el=><Card el={el} />)}
        </div> 
    )
}

export default Movielist
