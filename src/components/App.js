//Hooks ciclo de vida e estado de componente. Redux estado general centralizado da APP
import React from "react";

import SongList from "./SongList";

const App = () => {
  return (
    <div className="bg-red-500">
      <SongList></SongList>
    </div>
  );
};

export default App;
