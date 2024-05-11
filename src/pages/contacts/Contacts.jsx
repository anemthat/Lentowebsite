import Header from '../../components/Header'
import HeaderImage from '../../images/logo.png'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './contacts.css'

const Contacts = () => {
  return (
    <>
    <Header title= "Get In Touch" image={HeaderImage}>
Got a question? No problem, I've got answers.
</Header>
<section className="contact">
  <div className="container contact__container">
    <div className="contact__wrapper">
      <a href="mailto:lentonlulo1@gmail.com" target="_blank" rel="noreferrer noopener">  <MdEmail/></a>
      <a href="https://m.me/anelisaelzma.mthathi/" target="_blank" rel="noreferrer noopener">  <FaFacebookMessenger/></a>
      <a href="https://wa.me/+27612458376" target="_blank" rel="noreferrer noopener">  <FaWhatsapp/></a>
    </div>
  </div>
</section>
    </>
    
  )
}

export default Contacts