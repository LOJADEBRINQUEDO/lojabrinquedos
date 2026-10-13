import React from 'react'
import Contato from './contato'
import Sobre from './sobre'

const Header = () => {
  return (
    <div>
        <header>
            <h1>Fiap Store</h1>

            <nav>
                <a href="/">Início</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
            </nav>
        </header>
    </div>
  )
}

export default Header
