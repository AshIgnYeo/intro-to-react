import { useEffect, useState } from "react";
import "./App.css";
import Flats from "./components/Flats";
import Map from "./components/Map";
import Search from "./components/Search";

function App() {
  const [allFlats, setAllFlats] = useState([]);
  const [filteredFlats, setFilteredFlats] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then((res) => res.json())
      .then((flats) => setAllFlats(flats));
  }, []);

  return (
    <div className="App">
      <main>
        <div className="contents">
          <Search setFilteredFlats={setFilteredFlats} allFlats={allFlats} />
          <Flats flats={filteredFlats === null ? allFlats : filteredFlats} />
        </div>
      </main>
      <div className="map">
        <Map flats={filteredFlats === null ? allFlats : filteredFlats} />
      </div>
    </div>
  );
}

export default App;
