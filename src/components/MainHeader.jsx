import { Link } from "react-router-dom"
import image from '../images/profile.jpg'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__hearder-container">

      <div className="main__header-left">
          <h4>#RoadToBecomingTheWinningCoach</h4>
          <h1>Welcome to the Home of Winning Strategies</h1>
          <p>Where Passion Meets Precision: Elevating Rugby Excellence, One Forward at a Time.
             </p>
             <Link to="/about" className="btn lg">Get Started </Link>
        </div>

        <div className="main__header-right">
                <div className="main__header-circle"></div>
                  {/* <div className="main__header-image">  */}
                       {/* <img src ={image} alt="profile "/> */}
                   {/* </div> */}
                </div>
        </div>

    </header>
  )
}

export default MainHeader