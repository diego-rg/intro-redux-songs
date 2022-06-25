//Action creator
export const selectSong = (song) => {
  //Devolve action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
