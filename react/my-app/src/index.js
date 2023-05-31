// Módulo node respopnsável pela leitura e transpilação de código JSX para JS e Html
import React from 'react'

// Módulo do node responsável por controlar a DOM no react
import ReactDOM from 'react-dom'
import Primeiro from './components/Primeiro'
import Second from './components/Props'

// componentes exporttados de maneira default não precisam de destructuring
import Default, {ExportNormal, BoaTarde} from './components/Exports'

// JSX é ama extensão da linguagem JavaScript no react onde se usa "html" com JavaScript, e é traduzida em javascript em tempo de execução

const titleElement = <h1>Hello World</h1>
ReactDOM.render( 
  <>
    {titleElement}

    {/* Components must be written with capital letter */}
    <Primeiro />

    {/* It is possible to write data to components with attributes, where the component receives data as a parameter, as shown in the example below and in your file. */}
    <Second  nome="Manicucci" />

    <Default export='default' />
    <ExportNormal export='normal' />
    <BoaTarde />
  </>,
   document.getElementById('root')
)

