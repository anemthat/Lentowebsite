import{FaFootballBall} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {skills} from '../data'
import Card from '../ui/Card'
import { Link } from 'react-router-dom'
import {AiOutlineDoubleRight} from 'react-icons/ai'


const Skills = () => {
  return (
    <section className="skills">
        <div className="container skills__container">

     <SectionHead icon={<FaFootballBall />} title="Skills"/> 
        
        <div className="skills__wrapper">
            {
                skills.map(({id, icon, title, info,path}) => {
                  return (<Card className="skills__skill" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Learn more<AiOutlineDoubleRight /></Link>

                  </Card>)
                })
            }

        </div>
        </div>

    </section>
  )
}

export default Skills 