import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();

  const astronauts = useSelector((state) => state.astronauts.entities);

  const isLoading = useSelector((state) => state.astronauts.status === "loading");

  function handleClick() {
    // dispatch the action creator (see below!)
    dispatch(fetchAstronauts());
  }


  if (isLoading) return <p>LOADING.. dont panic</p>;

  const astronautsList = astronauts.map((astronaut) => (
    <li key={astronaut.id}>{astronaut.name}</li>
  ));
  
  return (
    <div>
      <button onClick={handleClick}>Get Astronauts</button>
      {astronautsList}
    </div>
  );
}

export default Astronauts;
