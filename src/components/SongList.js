import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="flex justify-between" key={song.title}>
          <div className="flex items-center p-2">
            <p>{song.title}</p>
          </div>
          <div className="flex p-2">
            <button
              className="inline-block px-4 py-2 bg-white border border-indigo-700 text-indigo-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700
             hover:shadow-sm hover:shadow-black hover:text-white transition duration-150 ease-in-out"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="flex flex-col m-2 p-8 bg-white rounded shadow-sm shadow-black">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong: selectSong })(SongList); //Función que devolve unha función (ten outra dentro de ela), polo que se pon ()() para executar a interna
