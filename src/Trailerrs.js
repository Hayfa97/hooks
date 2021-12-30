import React from "react";
import { useParams } from "react-router-dom";

function Trailerrs(props) {
  const { id } = useParams();
  const film = props.moviee.find((el) => el.id == id);
  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <iframe
        width="560"
        height="315"
        src={film.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Trailerrs;
