import React from 'react';
import Topo from '../../Componentes/topo/topo.js';
import Footer from '../../Componentes/Rodape/footer.js';
import './sobre.css'

const Sobre =()=>(
    <>
        <Topo />
        <main id='Sobre'>
            <section className='banner'>
                <div className='max-width'>
                    <h1>A geladaria</h1>
                </div>
            </section>
            <section className='SobreNos'>
                <div className='max-width'>
                    <div>
                        <h2>Sobre Nós</h2>
                        <span>Nós simplesmente amamos sorvete!</span>
                    </div>
                    <div>
                        <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                        <p>
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                        </p>
                    </div>
                </div>
            </section>
            <section className='fotosSobre'>
                <img src='/assets/sobre-image.jpg'/>
                <img src='/assets/sorveteria.jpg'/>
            </section>
        </main>
        <Footer />
    </>
)
export default Sobre;