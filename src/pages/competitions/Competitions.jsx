import './competitions.css'
import { FaTrophy } from "react-icons/fa";
import SectionHead from '../../components/SectionHead';
import { competitions } from '../../data';
import Card from '../../ui/Card';



const Competitions = () => {
  return (
    <section className="competitions">
        <div className="container competitions__container">

     <SectionHead icon={<FaTrophy />} title="Competitions"/> 
        
        <div className="competitions__wrapper">
            {
                competitions.map(({id, icon, title, info}) => {
                  return (<Card className="competitions__competition" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                 

                  </Card>)
                })
            }

        </div>
        </div>

    </section>
  )
}

export default Competitions