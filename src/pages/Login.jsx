import LoginCon from "../containers/LoginCon";
import LoginButton from "../components/LoginButton";
import InputLabel from "../components/InputLabel";
import SignupButton from "../components/SignupButton";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

function Login() {

    useEffect(() => {})

    let navigate = useNavigate();
    return(
        <LoginCon title={"로그인"}>
            <InputLabel label="아이디" name="username" placeholder="아이디를 입력해주세요" id="idIn"/>
            <InputLabel label="비밀번호" name="password" placeholder="비밀번호를 입력해주세요" type="password" id="pwIn"/>
            <LoginButton onClick={() => {
                axios.post('http://101.101.211.153:8080/user/sign-in',{
                    id: document.getElementById('idIn').value,
                    pw: document.getElementById('pwIn').value
                }, {
                    headers: { "Content-Type": "application/json"},
                }).then(function (response){
                    localStorage.setItem('username',response.data.userData.userId);
                    window.location.href = '/';
                    
                }).catch((error) => {
                    if(error.response.status === 404){
                        alert('아이디가 존재하지 않습니다.')
                        navigate('/login')
                    }else if(error.response.status === 400){
                        alert('비밀번호가 틀렸습니다.')
                        navigate('/login')
                    }
                })
            }}>로그인</LoginButton>
            <SignupButton to={'/regist'}>아직 회원이 아니신가요?</SignupButton>
        </LoginCon>
    )
}

export default Login