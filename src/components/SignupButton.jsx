import styled from "styled-components";
import { Link } from "react-router-dom";

const Aligner = styled.div`
    margin-top: 1rem;
    text-align: right;
`;

const StyledLink = styled(Link)`
    color: #FFD990;
    &:hover {
        color: #FFD970;
    }
`


function SignupButton({to, children}) {
    return (
        <Aligner>
            <StyledLink to={to}>
                {children}
            </StyledLink>
        </Aligner>
    )
}

export default SignupButton