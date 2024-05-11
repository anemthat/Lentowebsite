import {BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Competitions from './pages/competitions/Competitions'
import Contacts from './pages/contacts/Contacts'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Experience from './pages/Experience/Experience'
import Footer from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='competitions' element={<Competitions/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
     

      
  )
}

export default App