import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
          <div>
            <div>Select</div>
          </div>
          <div>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps)(SongList); //Función que devolve unha función (ten outra dentro de ela), polo que se pon ()() para executar a interna
