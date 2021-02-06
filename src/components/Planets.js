import React, { useState, useEffect } from "react";
import FetchData from "../services/FetchData";
// import planetDetails from "./PlanetDetail";
import { Link } from "react-router-dom";


function Planets(props) {

  const [data, setData] = useState([]);
  const getPlanetName = async() =>{
    const output = await FetchData();
    // console.log(output);
    setData(output.data.planets)
  };

  useEffect( ()=>{
    //useeffect will hold the data that our function getPlanetName fetched for us
    //it will be rendered one time because of the array in the second argument for useeffect
    //
    getPlanetName();
}, []);

  return (
    <div>
      <h1>Planets</h1>

    {/* we mapped to get the list of all the planets from the api - so for normal purpose
    we use the code below */}
      {/* {data.map( (user) =>{
                return(
                    <div>
                        <ul>
                         <li>{user.name}</li>
                        </ul>
                    </div>
                )
            })} */}

    {/* To map the data and link it to another component,  */}
    <div className="planets">
			{data.map((planetArgument, index) => {
				
				return (
					<li key={index}>
					  <Link
							to={{
                //We are linking the component PlanetDetails through the App.js page via route,
                // So basically to render the path its like planet.js -> app.js -> PlanetDetails.js
							pathname: "/planetdetails",

              //props can be name anything, its like the prop for to, where we are store the
              //data for the name, color, moon
							props: {
								name: planetArgument.name,
								color: planetArgument.color,
								moon: planetArgument.num_moons
							}
							}}>
              {/* first rendering the name of the planet, then when we click it 
              it will go to Link ->  path -> app.js -> PlanetDetails -> render data when clicked */}
							{planetArgument.name}
					  </Link>
					</li>
				)
			})}
		</div>

    </div>
  )
}

export default Planets;