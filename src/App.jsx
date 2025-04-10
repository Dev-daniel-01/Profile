import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import { Menu } from './components/Menu'
import perfil from './assets/image/Fot-perfil.jpg'
import Drink from './assets/image/Drink-smoke.png'
import sabotage from './assets/image/projeto2.png'
import harley from './assets/image/projeto3.png'

function App() {
  const defaultPhoneNumber = "554199999999";
  const  [formData, setFormData] = useState({
   name: "",
   email: "",
   message: "",
  });
 
 const handleChange = (e) => {
   const {name, value} = e.target;
   setFormData({...formData, [name]: value})
 }
 
 const handleZap = () => {
   const {name, email, message} = formData
 
   const URLzap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}%text=
   Nome:%20${name}%0D%0A
   Email:%20${email}%0D%0A
   Mensagem:%20${message}%0D%0A`
 
   window.open(URLzap, "_blank")
   
 }
  return (
    <>
    <body>
    <Menu option01='Apresentação' option02='Portfólio' option03='Tecnologias' option04='Contato'/>
    <section id='s1' className='cabecalho'>
    <div>
      <img src={perfil} alt="Foto Daniel" className='Foto-perfil'/>
      <h1>Daniel Ribeiro</h1>
      <p>Dev Junior</p>
    </div>
    </section>
    <section id='s2'>
      <h2 className='sobre-titulo'>Sobre mim</h2>
      <div className='sobre-caixa'>
        <p className='sobre-p'>Olá! Sou um desenvolvedor júnior com foco em front-end e back-end, em constante evolução. Tenho conhecimentos em HTML, CSS, JavaScript, React 
          e também estou me aprofundando em tecnologias como Node.js e bancos de dados. Atualmente, estou cursando Técnico em Desenvolvimento de Sistemas 
          pelo SENAI, onde venho desenvolvendo projetos práticos que reforçam minha base lógica, capacidade de resolver problemas e trabalho em equipe.</p>
      </div>

    </section>

    <section id='s3'> 
      <h2 className='Projetos-titulo'> Meus projetos</h2>
      <div className='Projetos-caixa'> 
        
        <div className='Projeto-cards'>
          <img src={Drink} alt="Projeto1" className='projetos-imagem' />
          <h3 className='info-projetos'>Drink-smoke</h3>
          <p className='paragrafo-projeto'>Loja virtual de bebidas e carnes</p>
        </div>

        <div className='Projeto-cards'>
          <img src={sabotage} alt="Projeto2" className='projetos-imagem' />
          <h3 className='info-projetos'>Portfolio-sabo</h3>
          <p className='paragrafo-projeto'>Portfolio pessoal do sabotagem como dev.</p>
        </div>

        <div className='Projeto-cards'>
          <img src={harley} alt="Projeto3" className='projetos-imagem' />
          <h3 className='info-projetos'>Harley-davidson</h3>
          <p className='paragrafo-projeto'>Landing page, visando contar a história da harley, marca registrada e motos do momento</p>
        </div>
      </div>
    </section>
      <section id='s4'>
        <h2 className='titulo-contato'>Contatos</h2>
        <form className='formulario-contato'>
        <input placeholder='Insira seu nome' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/><br /><br />
        <input placeholder='Insira seu email' type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/><br /><br />
        <textarea placeholder='Insira mensagem' id='message' name='message' value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
        </form>
      </section>
    </body>
    
   
    </>
  )
}

export default App
