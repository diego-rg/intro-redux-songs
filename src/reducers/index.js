import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Octavarium", duration: "30:32" },
    { title: "Pull me under", duration: "15:12" },
    { title: "Metropoplis", duration: "12: 54" },
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
