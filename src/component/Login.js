import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const [pw, setPw] = useState('');
    const onChangePW = (e) => {
        setPw(e.target.value);
    }

    const navigator = useNavigate();
    const onClickLogin = () => {
        const memberInfo = JSON.parse(localStorage.getItem('join'));
        
        //localStorage에 저장된 회원정보들 긁어와서... 로그인을 시도한 email과 pw와 매칭..
        for(var i = 0; i < memberInfo.length; i++){
            if(memberInfo[i].email === email){
                if(memberInfo[i].password === pw){
                    //로그인 성공시 session생성.
                    const nick = memberInfo[i].nickname;
                    sessionStorage.setItem('login', JSON.stringify({email: email, password: pw, nickname: nick}));
                    alert(`${nick}님 환영합니다.`);
                    // 이후 마이페이지로 이동?
                    navigator("/");
                    return;
                }
            }
        }
        alert('아이디, 비밀번호를 확인해주세요');
    }


    return (
        <Fragment>
            <form action="#">
                <h1>Sign in</h1>
                <p>use your account</p>
                
                <input type="email" placeholder="Your Email" onChange={onChangeEmail}></input>
                <input type="password" placeholder="Your Password" onChange={onChangePW}></input>

                <a href="#">Forgot your password?</a>
                <button onClick={onClickLogin}>Sign In</button>
            </form>
        </Fragment>
    )
}
export default Login;