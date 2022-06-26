import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="flex" key={song.title}>
          <div className="flex-none">
            <p>{song.title}</p>
          </div>
          <div className="flex-none">
            <button
              className="inline-block px-4 py-2 bg-white border border-indigo-700 text-indigo-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700
             hover:shadow-lg hover:text-white transition duration-150 ease-in-out"
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
      <div className="flex flex-col h-full bg-white">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps)(SongList); //Función que devolve unha función (ten outra dentro de ela), polo que se pon ()() para executar a interna
