import React from 'react';
import ImageIntroducao from '../../img/fotos/introducao.jpg';
import BicicletaMagicMight from '../../img/bicicletas/magic-home.jpg';
import BicicletaNimbusStark from '../../img/bicicletas/nimbus-home.jpg';
import BicicletaNebulaStark from '../../img/bicicletas/nebula-home.jpg';
import ImageTecnologia from '../../img/fotos/tecnologia.jpg';
import IconMotorEletrico from '../../img/icones/eletrica.svg';
import IconRastreador from '../../img/icones/rastreador.svg';
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
      
      <article className='tecnologia-bg'>
        <div className='tecnologia container'>
          <div className="tecnologia-conteudo">
            <span className='font-2-l-b cor-5'>Tecnologia avançada</span>
            <h2 className='font-1-xxl cor-0'>Você escolhe as suas cores e componentes <span className='cor-p1'>.</span></h2>
            <p className='font-2-l cor-5'>
              Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.
            </p>
            <a href="/" className="link">Escolha um modelo</a>
            <div className='tecnologia-vantagens'>
              <div>
                <img src={IconMotorEletrico} alt="" />
                <h3 className='font-1-m cor-0'>Motor Elétrico</h3>
                <p className='font-2-s cor-5'>
                  Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.
                </p>
              </div>
              <div>
                <img src={IconRastreador} alt="" />
                <h3 className='font-1-m cor-0'>Rastreador</h3>
                <p className='font-2-s cor-5'>
                  Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.
                </p>
              </div>
            </div>
          </div>
          <div className='tecnologia-imagem'>
            <img src={ImageTecnologia} alt="" />
          </div>
        </div>
      </article>
    </>
  )
}

export default Main;