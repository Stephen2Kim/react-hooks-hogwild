import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm"; // Ensure this path matches where HogForm.js is located
import hogs from "../porkers_data";

function App() {
  const [greasedFilter, setGreasedFilter] = useState(false);
  const [sortOption, setSortOption] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState(new Set());
  const [hogData, setHogData] = useState(hogs);

  const handleFilterChange = () => {
    setGreasedFilter(prev => !prev);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleHideHog = (hogName) => {
    setHiddenHogs(prev => new Set(prev.add(hogName)));
  };

  const handleAddHog = (newHog) => {
    setHogData(prevHogs => [...prevHogs, newHog]);
  };

  const filteredHogs = hogData
    .filter(hog => !greasedFilter || hog.greased)
    .filter(hog => !hiddenHogs.has(hog.name))
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'weight') return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <HogList
        hogs={filteredHogs}
        onHideHog={handleHideHog}
      />
      <HogForm onAddHog={handleAddHog} />
    </div>
  );
}

export default App;
