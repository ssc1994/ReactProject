import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

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
        console.log(memberInfo);

        if(memberInfo === null){
            alert('아이디, 비밀번호를 확인해주세요');
            navigator('/login');
        }
        
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
        navigator('/login');
    }

    //d9cad28960d5574cecdd05c486f1419d 카카오 javascript
    const REST_API_KEY = "ceb3bb708012abc0345f87c354269cb4";
    const REDIRECT_URI =  "http://localhost:3000/oauth/token";
    // const KAKAO_AUTH_URL = `/oauth/token?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code HTTP/1.1`;
    const KAKAO_AUTH_URL =  `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <Fragment>
            <form action="#">
                <h1>Sign in</h1>
                <p>use your account</p>
                <div class="social-container">
                    <a href={KAKAO_AUTH_URL} class="social" onClick={kakaoLogin}><FontAwesomeIcon icon={faComment}/></a>
                </div>
                
                <input type="email" placeholder="Your Email" onChange={onChangeEmail}></input>
                <input type="password" placeholder="Your Password" onChange={onChangePW}></input>

                <a href="#">Forgot your password?</a>
                <button onClick={onClickLogin}>Sign In</button>
            </form>
        </Fragment>
    )
}
export default Login;