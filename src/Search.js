import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { MDBCol, MDBIcon } from "mdbreact";

const Search = ({ handleSearchtit ,SearchByRate}) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchtit(search);
  };

  const ratingChanged = (newRating) => {
    SearchByRate(newRating);
  };
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <form onSubmit={handleSubmit}>
         <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>
    </MDBCol>
      </form>
      <ReactStars 
        size="500px"
        count="10"
        onChange={ratingChanged}
      />
    </div>
  );
};

export default Search;
