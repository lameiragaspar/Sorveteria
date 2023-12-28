import React from 'react';
import './footer.css'

const Footer =()=>(
    <footer>
        <div className='tam-max'>
            <img src='/assets/logo.png'/>
            <div>
                <h3>Endereço</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div>
                <h3>Contatos</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>
            <div>
                <h3>Horários</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        <div className='tam-max dev'>
            <p>Gelateria. Orgulhosamente desenvolvido por "<a href="https://github.com/lameiragaspar" target='_blank'>Pedro Lameira</a>"</p>
        </div>
    </footer>
)
export default Footer;