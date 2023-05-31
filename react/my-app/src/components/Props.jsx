import React from "react";

// Component like receive a param and show in screen
export default function Props(props) {
  return (

    // components with more than one html tag must be written with a fragment or div
    <>
      <h1>Bom dia {props.nome} </h1>
      <h2>Até breve!</h2>
    </>

    /* Or
    <div>
      <h1>Bom dia {props.nome} </h1>
      <h2>Até breve!</h2>
    </div>
    */
  ) 
} 