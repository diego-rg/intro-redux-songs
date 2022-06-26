import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="flex flex-col m-2 p-8 bg-white rounded shadow-sm shadow-black">
        Select a song.
      </div>
    );
  }
  return (
    <div className="flex flex-col m-2 p-8 bg-white rounded shadow-sm shadow-black">
      <h1 className="p-2 text-2xl font-bold">Details:</h1>
      <p className="p-2">
        <span className="font-semibold">Title: </span>
        {song.title}
      </p>
      <p className="p-2">
        <span className="font-semibold">Duration: </span> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
