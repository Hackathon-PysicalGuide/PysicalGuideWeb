import LoginCon from "../containers/LoginCon";
import InputLabel from "../components/InputLabel";
import LoginButton from "../components/LoginButton";
import axios from "axios";

function Regist() {

    return (
        <LoginCon title={"회원가입"}>
            <InputLabel label="아이디" name="username" placeholder="아이디를 입력해주세요" id='idIn'/>
            <InputLabel label="비밀번호" name="password" placeholder="비밀번호를 입력해주세요" type="password" id='pwIn'/>
            <InputLabel label="비밀번호 확인" placeholder="비밀번호 확인" type="password"/>
            <LoginButton onClick={()=> {
                    console.log(document.getElementById('idIn').value,
                    document.getElementById('pwIn').value)
                    axios.post('http://192.168.45.175:8080/user/sign-up',{
                        id: document.getElementById('idIn').value,
                        pw: document.getElementById('pwIn').value
                    }, {
                        headers: { "Content-Type": "application/json"},
                    }).then(function (response){
                        console.log(response)
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            }>회원가입</LoginButton>
            
        </LoginCon>
    )
}

export default Regist