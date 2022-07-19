import styled from "styled-components"
import { shadow } from '../lib/styleUtil' 

import { Link } from "react-router-dom";

const Alert = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 30rem;
    height: 20rem;
    display : flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 2rem;
    ${shadow[2]}
`;

const Container = styled.div`
    display : flex;
    justify-content : space-around;
    width : 100%;
`;

const TButton = styled(Link)`
    width: 60%;
    height 2rem;
    border-radius: 5rem;
    color: black;
    background: #FFD990;

    &:hover{
        background: #FFD970;
        ${shadow(0)}
    }

    &:active {
        background: #FFD950;
    }

    display : flex;
    justify-content : center;
    align-items: center;

    margin-left: 2rem;
    margin-right: 2rem;
`;


const Title = styled.div`
    font-size: 1.5rem;
`;

function Logout() {

    return (
        <Alert>
            <Title>
                로그아웃 하시겠습니까?
            </Title>
            
            <Container>
                <TButton to={'/'}>취소</TButton>
                <TButton to={'/'} onClick={() => {
                    localStorage.removeItem('username');
                    window.location.href = '/';
                }}>확인</TButton>
            </Container>

        </Alert>
    )
}

export default Logout