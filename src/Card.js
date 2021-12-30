import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from "react-star-rating-component-new";


const Card = (props) => {
  return (
    <div>
     <div className="hero-container">
  <div className="main-container">
    <div className="poster-container">
      <a href="#"><img  src={props.el.posteURL} className="poster" /></a>
    </div>
    <div style={{backgroundColor:'rgb(236, 244, 252)'}} className="ticket-container">
      <div className="ticket__content">
        <h4 style={{fontSize:'xlarge' ,color:'burlywood'}} className="ticket__movie-title"> {props.el.title} </h4>
        <p style={{fontSize:'large' , color:'#d1750c'}} className="ticket__movie-slogan">
          {props.el.description}
        </p>
        <Link to={`/Trailerrs/${props.el.id}`}><button style={{backgroundColor: '#4CAF50', display:'flex',justifyContent:'center'}}>Details</button></Link>
        <StarRatingComponent size="50px" starCount="10"  value={props.el.rating}  edit={false}/>
        

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card
