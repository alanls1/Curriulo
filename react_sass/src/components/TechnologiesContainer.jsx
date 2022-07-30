import {DiHtml5,DiCss3,DiJsBadge,DiReact,DiSass} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies=[
    {id:"html",name:"HTML5",icon: <DiHtml5/>,sumary:'HTML: HyperText Markup Language'},
    {id:"css",name:"CSS3",icon: <DiCss3/>,sumary:'CSS: Cascading Style Sheets'},
    {id:"js",name:"JavaScript",icon: <DiJsBadge/>,sumary:'Scripting Language    '},
    {id:"react",name:"React",icon: <DiReact/>,sumary:'JavaScript library'},
    {id:"sass",name:"Sass",icon: <DiSass/>,sumary:'Sass: Syntactically Awesome Style Sheets'},
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div   className='technologies-grid'>
            {technologies.map((tech)=>(
              <div className='technology-card' id={tech.id} key={tech.id}>
                {tech.icon}
                <div className='technology-info'>
                    <h3>{tech.name}</h3>
                    <p>
                        {tech.sumary}
                    </p>
                </div>

              </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer