import LoginCon from "../containers/LoginCon";
import LoginButton from "../components/LoginButton";
import InputLabel from "../components/InputLabel";
import SignupButton from "../components/SignupButton";
import axios from "axios";

function Login() {

    return(
        <LoginCon title={"로그인"}>
            <InputLabel label="아이디" name="username" placeholder="아이디를 입력해주세요" id="idIn"/>
            <InputLabel label="비밀번호" name="password" placeholder="비밀번호를 입력해주세요" type="password" id="pwIn"/>
            <LoginButton onClick={() => {
                console.log(document.getElementById('idIn').value,document.getElementById('pwIn').value)
                axios.post('http://192.168.45.175:8080/user/sign-in',{
                    id: document.getElementById('idIn').value,
                    pw: document.getElementById('pwIn').value
                }, {
                    headers: { "Content-Type": "application/json"},
                }).then(function (response){
                    console.log(response.data.userData.userId)
                }).catch((error) => {
                    console.log(error);
                })
            }}>로그인</LoginButton>
            <SignupButton to={'/regist'}>아직 회원이 아니신가요?</SignupButton>
        </LoginCon>
    )
}

export default Login