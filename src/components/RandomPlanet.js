import axios from "axios";
import React, { useState, useEffect } from "react";


function RandomPlanet(props) {

  const [randomplanet, setRandomPlanet] = useState([]);

  const fetchData = async () => {
		const output = await axios.get("https://wdi-nyc-planets-api.herokuapp.com/planets/random");
		setRandomPlanet(output.data.planet);
	};

	useEffect(() => {
		fetchData();
	}, []);

  return (
    <div>
      <h1>Random Planet</h1>
      <h2> {randomplanet.name} </h2>
      <h2> {randomplanet.color} </h2>
      <h2> {randomplanet.num_moons} </h2>
    </div>
  )
}

export default RandomPlanet