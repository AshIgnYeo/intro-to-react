import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = ({ allFlats, setFilteredFlats }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const search = e.target.value;
    search.includes("test") ? setValue("") : setValue(search);
  };

  useEffect(() => {
    if (value.length) {
      const results = allFlats.filter((flat) => {
        const flatName = flat.name.toLowerCase();
        return flatName.includes(value.toLowerCase());
      });

      setFilteredFlats(results);
    } else {
      setFilteredFlats(null);
    }
  }, [value, allFlats, setFilteredFlats]);

  return (
    <div className="search-wrapper">
      <input type="text" placeholder="Search for flats.." value={value} onChange={handleChange} />
    </div>
  );
};
export default Search;
