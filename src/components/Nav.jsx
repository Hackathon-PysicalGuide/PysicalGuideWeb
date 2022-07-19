import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div className="App">
            <nav class="navbar">
                <div class="navbar__logo">
                    <Link to='/'>
                        <i class="fas fa-blog">Pysical Guide</i>
                    </Link>
                </div>
                <div className='navbar__menu'>
                    <li>
                        <Link to='/login'>
                        <b>
                            로그인
                        </b>
                        </Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav