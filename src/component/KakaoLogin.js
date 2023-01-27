import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
// import KakaoLogin from "react-kakao-login";

const KakaoLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    const REST_API_KEY = "ceb3bb708012abc0345f87c354269cb4";
    const REDIRECT_URI =  "http://localhost:3000/oauth/token";

    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token`,{
            method: 'POST',
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        })
        .then(res => res.json())
        .then(data => {
            if(data.access_token){
                localStorage.setItem('token', data.access_token);
            }else{
                navigate('/');
            }
        });
    };

    useEffect(()=>{
        if(!location.search) return;
        getKakaoToken();
    },[]);

    return(
        <div>
            카카오로그인
        </div>
    )
}

export default KakaoLogin;