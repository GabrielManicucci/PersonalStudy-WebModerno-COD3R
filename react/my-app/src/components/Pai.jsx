import React from "react";
import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1> {props.nome} {props.sobrenome} </h1>
      <h2>Filhos:</h2>

      <ul>
        {props.children}
        <Filho nome='Gabriel' sobrenome={props.sobrenome}/>
        <Filho nome='Fernando' sobrenome={props.sobrenome}/>
        <Filho nome='Débora' sobrenome={props.sobrenome}/>
      </ul>
    </div>
  )
}