import LoginCon from "../containers/LoginCon";
import InputLabel from "../components/InputLabel";
import LoginButton from "../components/LoginButton";
import axios from "axios";
import { useNavigate } from "react-router";

function Regist() {

    let navigate = useNavigate()

    return (
        <LoginCon title={"회원가입"}>
            <InputLabel label="아이디" name="username" placeholder="아이디를 입력해주세요" id='idIn'/>
            <InputLabel label="비밀번호" name="password" placeholder="비밀번호를 입력해주세요" type="password" id='pwIn'/>
            <InputLabel label="비밀번호 확인" placeholder="비밀번호 확인" type="password" id='chkpwIn'/>
            <LoginButton onClick={()=> {
                    if(document.getElementById('pwIn').value !== document.getElementById('chkpwIn')){
                        alert('비밀번호를 다시 확인해주세요.')
                        window.location.href = '/regist';
                    }
                    axios.post('http://101.101.211.153:8080/user/sign-up',{
                        id: document.getElementById('idIn').value,
                        pw: document.getElementById('pwIn').value
                    }, {
                        headers: { "Content-Type": "application/json"},
                    }).then(function (response){
                        navigate('/login')
                    }).catch((error) => {
                        if(error.response.status === 409){
                            alert('이미 존재하는 회원입니다.')
                            navigate('/regist')
                        }
                    })
                }
            }>회원가입</LoginButton>
        </LoginCon>
    )
}

export default Regist