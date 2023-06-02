import React, { Component } from "react";

// Class Component

export default class ClassComponent extends Component {

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  setTipo(e) {
    // it's not cannot assign to read only property "tipo" of object, ou seja, props que um component recebe por parametro quando é instanciado não podem ser alteradas sem trabalhar com estado

    this.setState({
      tipo: e.target.value
    })
  }

  setNome(e) {
    this.setState({
      nome: e.target.value
    })
  }

  render () {
    // Vai receber props 
    const {tipo, nome} = this.state
 
    return (
      <>
       <h1>Class Component</h1>

        <div>
          <h2> {tipo} {nome} </h2>
          <hr />
          <input type="text" name="text" id="inputText" placeholder="Tipo..." value={tipo} onChange={ e => this.setTipo(e)} />
          <input type="text" name="text" id="inputText" placeholder="Tipo..." value={nome}  onChange={ e => this.setNome(e)} />
        </div>
      </>
    )
  }
}