import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = ({ allFlats, setFlats }) => {
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

      setFlats(results);
    } else {
      setFlats(allFlats);
    }
  }, [value, allFlats, setFlats]);

  return (
    <div className="search-wrapper">
      <input type="text" placeholder="Search for flats.." value={value} onChange={handleChange} />
    </div>
  );
};
export default Search;
