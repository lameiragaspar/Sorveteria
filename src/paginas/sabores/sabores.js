import React from 'react';
import Topo from '../../Componentes/topo/topo.js';
import Footer from '../../Componentes/Rodape/footer.js';
import '../home/home.css'
import './sabores.css'

const Sabores =()=>(
    <>
        <Topo/>
        <main id='Sabores'>
            <section className='banner'>
                <div className='max-width'>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className='sabores'>

                <div className='max-width'>
                    <h2>Sabores de Sorvete</h2>

                    <div className='cardsSabores'>
                        <div className='card'>
                            <div className='imagemSabores'>
                                <img src='/assets/sabor-oreo.png'/>
                            </div>

                            <div className="descricaoSabores">
                                <span>Sorvete de Oreo</span>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagemSabores M5'>
                                <img src='/assets/sabor-pistache.png'/>
                            </div>

                            <div className="descricaoSabores ">
                                <span>Sorvete Pistache</span>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagemSabores M5'>
                                <img src='/assets/sabor-cookies-avela.png'/>
                            </div>

                            <div className="descricaoSabores">
                                <span>Sorvete Cookies & Avelã</span>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagemSabores'>
                                <img src='/assets/sorbet-kiwi.png'/>
                            </div>

                            <div className="descricaoSabores">
                                <span>Sorvete de Kiwi</span>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagemSabores M5'>
                                <img src='/assets/sorbet-morango.png'/>
                            </div>

                            <div className="descricaoSabores M5">
                                <span>Sorvete de Morango</span>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagemSabores'>
                                <img src='/assets/sorbet-limao.png'/>
                            </div>

                            <div className="descricaoSabores">
                                <span>Sorvete de Limão Siciliano</span>
                                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
        <Footer/>
    </>
)
export default Sabores;