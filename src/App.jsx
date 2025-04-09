import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import { Menu } from './components/Menu'

function App() {

  return (
    <>
     <Menu option01='Apresentação' option02='Portfólio' option03='Contato'/>
    <section id='s1'>
    <div>

    </div>
    </section>
    <section id='s2'>

    </section>

    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
   
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    </>
  )
}

export default App
