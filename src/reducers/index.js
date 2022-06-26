import { combineReducers } from "redux";

import "../index.css";

const songsReducer = () => {
  return [
    { title: "Octavarium", duration: "30:32" },
    { title: "Pull me under", duration: "15:12" },
    { title: "Metropolis", duration: "12: 54" },
    { title: "Under a glass moon", duration: "7:32" },
    { title: "Erotomania", duration: "9:53" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
