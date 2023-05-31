import React from "react";

// Maneiras de exportar um component

export default function Default(props) {
  return <h1>Componente exportado {props.export} </h1>
}

export const ExportNormal = props => <h1>Compoonente exportado de maneira {props.export} </h1>

export const BoaTarde = () => <h1>Boa Tarde</h1>

// export default {Default, ExportNormal, BoaTarde} / para usar esse modo é necessário nomear no momento da importação e acessar os componetes com a notação ponto