import styled from "styled-components"
import { shadow } from '../lib/styleUtil' 
import { useNavigate } from "react-router";

import LoginButton from "../components/LoginButton";
import { Link } from "react-router-dom";

const Alert = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 20rem;
    height: 15rem;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 2rem;
    ${shadow[2]}
`;

const TButton = styled(Link)`
    width: 80%;
    height 1.25rem;
    border-radius: 5rem;
    color: black;
`;

function Logout() {


    return (
        <Alert>
            로그아웃 하시겠습니까?
            <TButton to={'/'}>취소</TButton>
            <TButton to={'/'} onClick={() => {
                localStorage.removeItem('username');
            }}>확인</TButton>

        </Alert>
    )
}

export default Logout