import { useState } from "react"
//hook do rract para mudanças de estado
import "./style.scss"

export default function App () {
  //VARIAVEL DE ESTADO
  //primeiroValor é a variáve de estado
  //setPrimeiroValor é a função atualizadora
  const{primeiroValor, setPrimeiroValor} =useState()
  const{segundoValor, setSegundoValor} =useState()

  const capturandoPrimeirovalor = (e) => { 
    setPrimeiroValor(Number(e.target.value))
    console.log(e.target.value)
  }
  const capturandosegundaValor = (e) => {
    setSegundoValor(Number(e.target.vale))
  } 
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeirovalor} type="number" placeholder="Insira um número"/>
      <input onChange={capturandosegundaValor} type="number" placeholder="Insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}
