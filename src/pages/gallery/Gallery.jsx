import Header from '../../components/Header'
import HeaderImage from '../../images/moon.jpg'

import './gallery.css'


const Gallery = () => {
  const galleryLength =15;
  const images = []

  for(let i =1; i<= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.JPG`))

  }
  
  return (
    <>
    <Header title="Gallery" image={HeaderImage}>
      Lets Scrum , Maul and have some fun with the ball...
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) =>{

            return <article key ={index}>
              <img src={image} alt={'Gallery image ${index + 1}'} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery