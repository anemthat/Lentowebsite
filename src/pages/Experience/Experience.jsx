import './experience.css'
import { FaFootballBall } from "react-icons/fa"
import Image from '../../images/experience.jpg'
import Card from '../../ui/Card'
import { experience } from '../../data'
import SectionHead from '../../components/SectionHead'

const Experience = () => {
  return (

    
      <section className='experience'>
          <div className="container experience__container">
  
  <div className="experience__left">
  
      <div className="experience__image">
  
          <img src={Image} alt='exp p'/>
  
      </div>
  </div>
  <div className="experience__right">
      <SectionHead  icon={<FaFootballBall/>} title="Experience"/>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore laboriosam dolor veritatis beatae enim molestiae quam quidem quos est, et
           ipsam nesciunt harum, numquam officiis dignissimos illo minus optio?
      </p>
      <div className="experience__wrapper">
          {
              experience.map(({id, icon, title, desc}) =>{
                  return <Card  key ={id} className="experiences__experience">
                      <span> {icon}</span>
                      <h4>{title}</h4>
                      <small>{desc}</small>
  
  
                  </Card>
              })
          }
  
        </div>
    </div>
  </div>
  
  
      </section>
    
    
    
  )
}

export default Experience






