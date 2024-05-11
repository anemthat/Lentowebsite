import Header from '../../components/Header'

import HeaderImage from '../../images/banner.jpg'
import StoryImage from '../../images/image2.jpg'


import './about.css'



const About = () => {
  return (
    
      
    <>
     <Header  title="About Lubabalo Lento" image={HeaderImage}>
     Lento is a seasoned rugby coach with a distinguished career marked by a relentless pursuit of excellence and a passion for developing forward units. 
     With a robust blend of tactical acumen, leadership prowess, and a deep understanding of the game's dynamics

     </Header>
     <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="My story image" />
        </div>
        <div className="about__section-content">
          <h1>Career Overview</h1>
          <p>Lento's coaching journey is characterized by a commitment to nurturing talent and optimizing team performance. As the Head Coach for the U/20 team at Central University of Technology since October 2023,
             he has been instrumental in devising and implementing strategic game plans, refining players' skills, and fostering a culture of continuous improvement</p>
            <p>Concurrently Lento also serves as the Forwards and Attack Coach at Central University of Technology 1st team, where his focus on set-piece execution and collaborative game planning contributed significantly to the team's success.
               His tenure at Nelson Mandela University and Walter Sisulu University further honed his coaching expertise, where he played integral roles in developing attacking strategies, analyzing opposition defenses, and refining set-piece plays.</p>
              <p>Throughout his career, Lento's coaching prowess has been reflected in a string of notable achievements, including leading teams to championship victories and guiding them through challenging competitions with resilience and determination.
                 Notable highlights include clinching the Free State Challenge Cup and achieving unbeaten status in the Varsity Shield tournament.</p>
                <p>His commitment to professional development is evident through his attainment of certifications such as BokSmart,
                   Level 2 World Rugby 15, and Level 1 World Rugby 15.</p>




        </div>
      </div>
     </section>

     

    </>
  )
}

export default About
