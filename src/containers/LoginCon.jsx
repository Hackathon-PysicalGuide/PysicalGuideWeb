import '../App.css'
import styled from 'styled-components'
import { shadow } from '../lib/styleUtil.js'
import oc from 'open-color';


const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30rem;
    ${shadow[1]}
`;

const LogoWrapper = styled.div`
    background: #FFD990;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 50px 0 0; 
`;

const Logo = styled.div`
    color : white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    border-radius: 0 0 15px 50px;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

function LoginCon( {title, children} ) {
    return (
        <Container>
            <LogoWrapper>
                <Logo>Pysical guide</Logo>
            </LogoWrapper>
            <Contents>
                <Title>
                    {title}
                </Title>
                {children}
            </Contents>
        </Container>
    )
}

export default LoginCon
