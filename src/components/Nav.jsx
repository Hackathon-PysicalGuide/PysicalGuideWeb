import '../App.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useState } from 'react';

const Strength = styled.img`
    width: 2rem;
    height: 2rem;
    max-width: 100%;
`;

function Nav() {

    let [isLogin,setisLogin] = useState(false)

    return(
        <div className="App">
            <nav class="navbar">
                <div class="navbar__logo">
                    <Link to='/'>
                        <Strength src='../img/strength.png' alt=''/>
                        <i class="fas fa-blog">Pysical Guide</i>
                    </Link>
                </div>
                <div className='navbar__menu'>
                    <li>
                        
                        <Link to={ localStorage.getItem('username') === undefined || localStorage.getItem('username') === null ? "/login" : "/logout" }>
                            <b>
                                {localStorage.getItem('username') !== undefined ? localStorage.getItem('username') + "님 환영합니다!" : "Log in"}
                            </b>
                        </Link>
                        
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Nav