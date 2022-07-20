import styled from "styled-components"
import CategorySearchBoard from "../components/CategorySearchBoard";
import MainLogo from "../components/MainLogo"
import Write from "./Write";

const Container = styled.div`
    position: absolute;
    width: 80%;
    left 50%; transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


function Main() {
    return(
        <Container>
            <MainLogo/>
            <Write/>
            <CategorySearchBoard/>
        </Container>
    )
}

export default Main