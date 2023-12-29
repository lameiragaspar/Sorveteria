import React from 'react';
import Topo from '../../Componentes/topo/topo.js';
import Footer from '../../Componentes/Rodape/footer.js';
import './home.css'

const Home =()=>(
    <>
        <Topo />
        <main id='Home'>
            <section className='banner'>
                <div className='max-width'>
                    <h1>Sorvete Artesanal</h1>
                </div>
            </section> {/*Fim do Banner*/}

            <section className='sabores'>
                <div className='tam-max'>
                    <img src='/assets/banner-sabores.jpg'/>
                    <div className='descricao'>
                        <div>
                            <h2>Nossos Sabores</h2>
                            <span>Novos de deliciosos!</span>
                        </div>
                        <p>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </div>
            </section>{/*Fim*/}

            <section className='eventos'>
                <div className='tam-max'>
                    <div className='descricao'>
                        <div>
                            <h2>NOSSOS EVENTOS</h2>
                            <span>Delicias com sorvete!</span>
                        </div>
                        <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                    <img src='/assets/eventos-image.jpg'/>
                </div>
            </section> {/*Fim*/}

            <section className='sobre'>
                <div className='tam-max'>
                    <img src='/assets/sobre-image.jpg'/>
                    <div className='descricao'>
                        <div>
                            <h2>SOBRE NÓS</h2>
                            <span>Alegria em cada casquinha!</span>
                        </div>
                        <p>
                        Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
)
export default Home;