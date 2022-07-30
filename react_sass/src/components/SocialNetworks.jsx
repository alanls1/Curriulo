import {FaLinkedinIn,FaGithub} from 'react-icons/fa';

import '../styles/components/socialsetworks.sass';

const socialNetworks=[
    {name:"linkedin",icon: <FaLinkedinIn/> , link:'https://linkedin.com/in/alan-lima-3584a41b9'},
    {name:"github",icon: <FaGithub/>,link:'https://github.com/alanls1/alanls1.git'},
];

const SocialNetworks =()=> {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network)=>(
            <a href={network.link} className='social-btn' id={network.name} key={network.name} target='_blank'>{network.icon}</a>
        ))}
    </section>
    );
};

export default SocialNetworks;