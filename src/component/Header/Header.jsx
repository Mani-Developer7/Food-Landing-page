import Button from '../common/Button/Button'
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className="logo">
        <h1> Delivery </h1>
      </div>
      <div className="navbar">
        <ul>
          <li> <NavLink to={'/'}> Home </NavLink></li>
          <li> <NavLink to={'/About'}> About </NavLink> </li>
          <li> <NavLink to={'/Services'}> Services </NavLink></li>
          <li> <NavLink to={'/Contact'}> Contact </NavLink> </li>
        </ul>
      </div>
      <div className="btn-wrapper">
        <Button text="Order Now"/>
      </div>
    </div>
  )
}

export default Header