import styled from "styled-components"
import CategorySearch from "../components/CategorySearch"
import MainLogo from "../components/MainLogo"

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
            <CategorySearch/>
        </Container>
    )
}

export default Main