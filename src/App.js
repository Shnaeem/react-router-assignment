import './App.css';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';
import PlanetDetails from './components/PlanetDetail';
import RandomPlanet from './components/RandomPlanet';
//import FetchData from "./services/FetchData";


function App() {
  return (
    <div className = "App">
        <nav>
          <li>
            <Link exact to="/">Home</Link>
          </li>

          <li>
            <Link to="/planets">Planets</Link>
          </li>


          <li>
            <Link to="/randomplanet">Random Planet</Link>
          </li>
         </nav>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/planetdetails" component={PlanetDetails} />
          <Route path="/RandomPlanet" component={RandomPlanet} />
        </main>
    </div>
      
    
  );
}

export default App;
