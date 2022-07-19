import styled from "styled-components";
import { shadow } from "../lib/styleUtil";
import '../App.css'

const Container = styled.h2`
    margin-top : 2rem;
    position: absolute;
    left 50%; transform: translate(-50%);
    width : 80%;
    height: 10rem;
    display : flex;
    align-items : center;
    justify-content : center;
    ${shadow[2]}
`;

const Logo = styled.p`
    
`;

function Main() {
    return (
        <Container>
            <Logo>
                Pysical guide에 오신걸 환영합니다.
            </Logo>

            
        </Container>
    )
}

export default Main