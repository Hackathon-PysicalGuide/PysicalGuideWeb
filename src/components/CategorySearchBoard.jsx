import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from 'axios';
import Ip from '../CommonIp'
import { Link } from "react-router-dom";


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

const Content = styled.p`
    font-size : 2vh;
`;

const Line = styled.hr`
    width: 0;
    height: auto;
`;

function CategorySearchBoard() {

    let [arr, setArr] = useState([]);


    useEffect(() => {
        const fetchData = () => {
            const get = axios.get(
                Ip+'/manual/'
            ).then((response) => {
                setArr([])
                setArr(response.data.list)
            });
        }
        fetchData();
    },[]);

    return (
        <Container>
            <SearchTab>
                <Title>
                    상체
                </Title>
                {arr.map((items) => (
                    <Link to={'/category/'+items.idx}>
                        <Content>{items.category === 'upperBody' || items.category === 'upperbody' ? items.title : null}</Content>
                    </Link>
                ))}
            </SearchTab>
            <Line/>
            <SearchTab>
                <Title>
                    복근
                </Title>
                {arr.map((items) => (
                    <Link to={'/category/'+items.idx}>
                        <Content>{items.category === 'abs' ? items.title : null}</Content>
                    </Link>
                ))}
            </SearchTab>
            <Line/>
            <SearchTab>
                <Title>
                    하체
                </Title>
                {arr.map((items) => (
                    <Link to={'/category/'+items.idx}>
                        <Content>{items.category === 'lowerBody' || items.category === 'lowerbody' ? items.title : null}</Content>
                    </Link>
                ))}
            </SearchTab>
        </Container>
    )
}

export default CategorySearchBoard