import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (

    <footer> 
        <div className="container footer__container">
            <article>
                <Link  to="/" className="logo">
                    <img src={Logo} alt=" footer logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, consequatur tempore. Delectus doloremque ut
                    vel cum aliquid consequatur ipsum reiciendis?
                </p>
                <div className="footer__socials">
                     <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"> <AiFillLinkedin/>
                      </a>

                     <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> <AiFillFacebook/>
                      </a>


                     <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"> <FaXTwitter/>
                      </a>

                </div>    
            </article>

                <article>
                      <h4>Permalinks</h4>
                      <Link to="/about">About</Link>
                      <Link to="/gallery">Gallery</Link>
                      <Link to="/competitions">Competitions</Link>
                      <Link to="/experience">Experience</Link>
                      <Link to="/contacts">Contacts</Link> 
                     </article>

                     <article>
                      <h4>Insights</h4>
                      <Link to="/s">FAQs</Link> 
                     </article>

                     <article>
                      <h4>Get In Touch</h4>
                      
                     <Link to="/contacts">Contact us</Link> 
                     </article>

       
        </div>
        <div className="footer__copyrights">
            <small> 2023 Anelisa websites &copy; All Rights Reserved</small>
        </div>
        </footer>
  )
}

export default Footer