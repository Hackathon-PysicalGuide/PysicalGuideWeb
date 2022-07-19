import styled from "styled-components";
import { shadow } from "../lib/styleUtil";
import '../App.css'


const Container = styled.div`
    margin-top : 2rem;
    width: 100%;
    height: 10rem;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color: #D9D9D9;
    ${shadow[2]}
`;

const Text = styled.p`
    font-size: 2rem;
`;


function MainLogo() {

    return (
        <Container>
            <Text>
                Physical guide에 오신 것을 환영합니다
            </Text>
        </Container>
    )
}

export default MainLogo