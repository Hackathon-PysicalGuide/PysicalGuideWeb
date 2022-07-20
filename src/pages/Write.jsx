import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display flex;
    justify-content: end;
`;

const Btn = styled.a`
    display: block;


    background-color: #9abf7f;

    box-shadow: 0px 4px 0px #87a86f;

    &:active{
        box-shadow: 0 0 #87a86f; background-color: #87a86f;
    }
`;

function Write() {
    return (
        <Container>
            <button>안녕하세요 버튼입니다.</button>
        </Container>
    )
}



export default Write