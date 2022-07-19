import styled from "styled-components"
import Category from "./Category";

const Container = styled.div`
    width: 100%;
    height: 50rem;
    display : flex;
    background-color : white;
    border: 5px solid black;

    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const SearchTab = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.p`
    font-size : 3vh
`;

const Line = styled.hr`
    width: 0;
    height: auto;
`;

function CategorySearch() {
    return (
        <Container>
            <SearchTab>
                <Title>
                    상체                
                </Title>
                <ul>
                    <Category>
                        프론트 레이즈
                    </Category>
                </ul>
                
            </SearchTab>
            <Line/>
            <SearchTab>
                <Title>
                    복근
                </Title>
                <Category>
                    사이드 체스트
                </Category>
            </SearchTab>
            <Line/>
            <SearchTab>
                <Title>
                    하체
                </Title>
                <Category>
                    헤비 스퀏
                </Category>
            </SearchTab>
        </Container>
    )
}

export default CategorySearch