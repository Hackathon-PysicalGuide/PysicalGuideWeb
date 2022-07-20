import '../App.css'
import { Link } from 'react-router-dom'
import strength from '../img/strength.png'

function Nav() {
    return(
        <div className="App">
            <nav class="navbar">
                <div class="navbar__logo">
                    <Link to='/'>
                        <img src={strength} alt=''></img>
                        <i class="fas fa-blog">Physical Guide</i>
                    </Link>
                </div>
                <div className='navbar__menu'>
                    <li>
                        <Link to="/login">
                            <b>
                                Login
                            </b>
                        </Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav