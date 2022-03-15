import React from 'react';
import ImageIntroducao from '../../img/fotos/introducao.jpg';
import BicicletaMagicMight from '../../img/bicicletas/magic-home.jpg';
import BicicletaNimbusStark from '../../img/bicicletas/nimbus-home.jpg';
import BicicletaNebulaStark from '../../img/bicicletas/nebula-home.jpg';
import './Main.css'

const Main = () => {
  return (
    <>
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

      <article className='bicicletas-lista'>
        <h2 className='container font-1-xxl'>Escolha a sua<span className='cor-p1'>.</span></h2>

        <ul>
          <li>
            <a href='/'>
              <img src={BicicletaMagicMight} alt="Bicicleta magic might" />
              <h3 className='font-1-xl'>Magic Might</h3>
              <span className='font-2-m cor-8'>R$: 2.499,00</span>
            </a>
          </li>
          <li>
            <a href='/'>
              <img src={BicicletaNimbusStark} alt="Bicicleta Nimbus Stark" />
              <h3 className='font-1-xl'>Nimbus Stark</h3>
              <span className='font-2-m cor-8'>R$: 4.999,00</span>
            </a>
          </li>
          <li>
            <a href='/'>
              <img src={BicicletaNebulaStark} alt="Bicicleta Nebula Stark" />
              <h3 className='font-1-xl'>Nebula Stark</h3>
              <span className='font-2-m cor-8'>R$: 3.999,00</span>
            </a>
          </li>
        </ul>
      </article>
    </>
  )
}

export default Main;