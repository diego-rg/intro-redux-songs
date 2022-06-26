//Hooks ciclo de vida e estado de componente. Redux estado general centralizado da APP
import React from "react";

import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="flex justify-center items-center min-w-full min-h-screen bg-indigo-700">
      <SongList></SongList>
      <SongDetail></SongDetail>
    </div>
  );
};

export default App;
