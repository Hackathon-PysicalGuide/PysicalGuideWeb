import styled from "styled-components"

const Cat = styled.div`
    width : 100%;
    margin-top : 3rem;
    padding-left : 5px;
    padding-right : 20px;
`;


function Category({title}) {
    return (
        <Cat>{title}</Cat>
    )
}

export default Category