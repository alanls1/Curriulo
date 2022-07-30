import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

function Sidebar() {
  return (
    <aside id='sidebar'>
      <img src={Avatar} />
        <p>image</p>
        <p className='title'>Desenvolvedor</p>

        <SocialNetworks/> 
        <InformationContainer/>
        
        <a href="" className='btn'>
          Dowload curriculo 
        </a>
    </aside>
  )
}

export default Sidebar