import Image from '../images/image1.jpg'
import SectionHead from './SectionHead'
import {BiSolidCrown} from 'react-icons/bi'
import { values } from '../data'
import Card from '../ui/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container value__container">

<div className="values__left">

    <div className="values__image">

        <img src={Image} alt='values p'/>

    </div>
</div>
<div className="values__right">
    <SectionHead  icon={<BiSolidCrown/>} title="Values"/>
    <p>
    As a rugby coach, my approach is grounded in my core values of Leadership, Respect, Passion, and Integrity.
    </p>
    <div className="values__wrapper">
        {
            values.map(({id, icon, title, desc}) =>{
                return <Card  key ={id} className="values__value">
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

export default Values