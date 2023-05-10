import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import './App.css';
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      {/* Search Bar */}
      <SearchBar/>
    </div>
  );
}

export default App;