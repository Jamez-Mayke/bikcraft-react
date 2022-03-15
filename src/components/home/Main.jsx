import React from 'react';
import ImageIntroducao from '../../img/fotos/introducao.jpg';
import './Main.css'

const Main = () => {
  return (
    <main className='introducao-bg'>
      <div className="introducao container">
        <div className="introducao-conteudo">
          <h1 className='font-1-xxl cor-0'>Bicicletas feitas sob medida<span class="cor-p1">.</span></h1>
          <p className='font-2-l cor-5'>
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft<span className='cor-p1'>.</span>
          </p>
          <a className='botao' href='/'>Escolha a sua</a>
        </div>
        <div>
          <img src={ImageIntroducao} alt="Bicicleta elétrica preta" />
        </div>
      </div>
    </main>
  )
}

export default Main;