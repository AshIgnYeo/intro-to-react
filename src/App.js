import { useEffect, useState } from "react";
import "./App.css";
import Flat from "./components/Flat";
import Map from "./components/Map";
import Search from "./components/Search";

function App() {
  const [allFlats, setAllFlats] = useState([]);
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then((res) => res.json())
      .then((flats) => {
        setAllFlats(flats);
        setFlats(flats);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <div className="contents">
          <Search setFlats={setFlats} allFlats={allFlats} />

          <div className="flats-wrapper">
            {flats.length
              ? flats.map((flat) => <Flat flat={flat} selectedFlat={selectedFlat} setSelectedFlat={setSelectedFlat} />)
              : "No results found"}
          </div>
        </div>
      </main>

      <div className="map">
        <Map flats={flats} selectedFlat={selectedFlat} setSelectedFlat={setSelectedFlat} />
      </div>
    </div>
  );
}

export default App;
