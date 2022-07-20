import '../App.css'
import { Link } from 'react-router-dom'
import strength from '../img/strength.png'


function InNav() {
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
                        <Link to="/logout">
                            <b>
                                {localStorage.getItem('username')} 님 환영합니다
                            </b>
                        </Link>
                        
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default InNav