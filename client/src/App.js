import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import './App.css';
import SearchBar from "./components/SearchBar";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import People from "./components/People";
import Films from "./components/Films";
import Species from "./components/Species";

function App() {
  return (
    <div className="App">
      {/* Search Bar */}
      <SearchBar/>

      {/* Routes */}
      <Routes>
        {/* Planets */}
        <Route path="/planets/:id" element={<Planets/>}/>

        {/* Starships */}
        <Route path="/starships/:id" element={<Starships/>}/>

        {/* Vehicles */}
        <Route path="/vehicles/:id" element={<Vehicles/>}/>

        {/* People */}
        <Route path="/people/:id" element={<People/>}/>

        {/* Films */}
        <Route path="/films/:id" element={<Films/>}/>

        {/* Species */}
        <Route path="/species/:id" element={<Species/>}/>
      </Routes>
    </div>
  );
}

export default App;