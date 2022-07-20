import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components"
import axios from 'axios'
import Ip from '../CommonIp'

const View = styled.div`
    position: absolute;
    width:80%;
    height: 100%;
    left:50%;
    transform:translate(-50%);
`;

const Container = styled.div`
    margin-top: 10rem;
    width: 100%;
    border: 1px solid #333;
    padding: 10px 0 30px 0;
    border-radius: 5px;
    background-color : white;
    display : flex;
    justify-content: center;
    align-items: center;
`;

const Formwrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitleIn = styled.input`
    width: 500px;
    height: 40px;
    margin: 10px;
`;

const ContentIn = styled.textarea`
    width: 80%;
    min-height: 500px;
    margin-bottom: 5rem;
`;

const Title = styled.p`
    font-size : 3rem;
`;


function Show() {

    const param = useLocation();

    let [item,setItem] = useState({});
    let [arr,setArr] = useState([]);
    
    let [Save,setSave] = useState([]);

    const Loginchk = () => {
        return !!localStorage.getItem('username')
    };

    useEffect(()=>{
        const fetchData = () => {
            const get = axios.get(
                Ip+'/manual/'
            ).then((response) => {
                setArr(response.data.list)
            });
        }
        fetchData();
        Loginchk();
        setSave(param.pathname.split('/'))

    },[])
    
    console.log()

    arr.map((item)=>{

        if(Save[Save.length-1] === item.idx){
            setItem(item)
        }
        console.log(item)
    })
    
    return(
        <View>
            <h1>{ item.category }</h1>

            <Container>
                <Title>{ item.title }</Title>
                <div>{ item.content }</div>
            </Container>
            { Loginchk() ? <Formwrapper>
                <TitleIn type={'text'} placeholder='제목' id="titlearea"/>
                <ContentIn id="contentarea"/>
            </Formwrapper> : <h4>글 수정 기능은 로그인을 해야 사용 가능합니다.</h4> }
        </View>
    )
    
}

export default Show