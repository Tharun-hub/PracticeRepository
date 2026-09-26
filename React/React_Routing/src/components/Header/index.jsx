import './index.css'
import { Link } from 'react-router'
const Header = () => (
  <nav className="nav-header">
    <h1 className="blog-title">Dev Blog</h1>
    <ul className="nav-menu">
      <li>
        <Link className='nav-link' to='/'>Home</Link>
      </li>
      <li>
        <Link className='nav-link' to='/about'>About</Link>
      </li>
      <li>
        <Link className='nav-link' to='/contact'>Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
