import {AiFillPhone,AiOutlineMail,AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/informationcontainer.sass';

const informationContainer=() =>{
  return <section id="information">
        <div className='info-card'>
            <AiFillPhone id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(14) 9 9681-0417</p>
            </div>
        </div>

        <div className='info-card'>
            <AiOutlineMail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>alanlima4123@gmail.com</p>
            </div>
        </div>

        <div className='info-card'>
            <AiFillEnvironment id='pin-icon'/>
            <div>
                <h3>Localização</h3>
                <p>Botucatu / sp</p>
            </div>
        </div>
  </section>
}

export default informationContainer