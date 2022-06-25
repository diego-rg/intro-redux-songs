import React from "react";
import { connect } from "react-redux";

const SongList = () => {
  return <div>Lista de cancións</div>;
};

export default connect()(SongList); //Función que devolve unha función (ten outra dentro de ela), polo que se pon ()() para executar a interna
