import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display flex;
    justify-content: end;
`;

const Btn = styled.a`
    -webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    -o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
    display: block;
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 180px;
    text-decoration: none;
    border-radius: 4px;
    padding: 20px 30px;

    color: #000;
    box-shadow: #FFD990 0 0px 0px 2px inset;

    &:hover {
        color: #000;
        box-shadow: #FFD990 0 0px 0px 40px inset;
    }
`;



function Write({ onClick }) {
    return (
        <Container>
            <Btn onClick={onClick}>글쓰기</Btn>
        </Container>
    )
}



export default Write