import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
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
