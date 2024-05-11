import {useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {

    const [isNavShowing, setisNavShowing]= useState(false);
  return (
    <nav>
        <div className="container nav__container">
             <Link to= "/" className='logo' onClick={()=> setisNavShowing(false)}>
                <img src={Logo} alt=" Nav Logo"/>

               </Link>
            <ul className={`nav__links ${isNavShowing ? 'nav__show' : 'hide__nav'}`} 
            >
                {
                    links.map(({name, path}, index)=> {
                        return(<li key={index}>
    
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ' '}
                            
                            onClick={()=> setisNavShowing(prev => !prev)}>{name} </NavLink>
                        </li>)
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={()=> setisNavShowing(prev => !prev)}>

                {
                    isNavShowing ?<MdOutlineClose/>:<FaBars/>
                }
            </button>
        </div>

    </nav>

  )
}

export default Navbar