import React from 'react';
import Logo from '../../img/bikcraft.svg';
import './Header.css'
const Header = () => {
  return (
    <header className='header-bg'>
      <div className="header container">
        <a href="/">
          <img src={Logo} alt="Logo da bikcraft" />
        </a>
        <nav aria-label='Navegação principal'>
          <ul class="header-menu font-1-m cor-0">
            <li>
              <a href="/">Bicicletas</a>
            </li>
            <li>
              <a href="/">Seguros</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
