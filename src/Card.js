import React from 'react'
import StarRatingComponent from "react-star-rating-component-new";


const Card = (props) => {
  return (
    <div>
     <div className="hero-container">
  <div className="main-container">
    <div className="poster-container">
      <a href="#"><img  src={props.el.posteURL} className="poster" /></a>
    </div>
    <div className="ticket-container">
      <div className="ticket__content">
        <h4 className="ticket__movie-title"> {props.el.title} </h4>
        <p className="ticket__movie-slogan">
          {props.el.description}
        </p>
        <StarRatingComponent size="500px" starCount="10"  value={props.el.rating}  edit={false}/>
        

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card
