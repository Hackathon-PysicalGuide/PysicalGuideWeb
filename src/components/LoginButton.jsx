import styled from "styled-components";
import { shadow } from "../lib/styleUtil"

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: #FFD990;
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover{
        background: #FFD970;
        ${shadow(0)}
    }

    &:active {
        background: #FFD950;
    }

    border-radius: 5rem;
`;

function LoginButton({ children, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}


export default LoginButton