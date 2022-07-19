import styled from "styled-components"

const Cat = styled.div`
    padding-left : 5px;
    padding-right : 20px;
`;


function Category({title}) {
    return (
        <Cat>{title}</Cat>
    )
}

export default Category