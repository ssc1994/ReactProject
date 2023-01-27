import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './../layout/Member.css'
import Join from "./Join";
import Login from "./Login";

const Member = () => {

    //login인지 join인지 경로를 얻어서...
    const location = useLocation();
    const container = document.getElementById('container');

    //링크에 따라서 화면이 다르게 보이도록 스타일 태그의 조정.
    const[active, setActive] = useState();
    useEffect(() => {
        if(location.pathname === '/join'){
            setActive("container right-panel-active");
    
        }else{
            setActive("container");
        }
    }, [location]);

    //아래는 버튼을 눌렀을때 움직이도록..
    const onsignUpButton = () => {
        container.classList.add("right-panel-active");
    };
    const onsignInButton = () => {
        container.classList.remove("right-panel-active");
    };

    return (
        <div className="Form">
            <div className={active} id="container">
                <div className="form-container sign-up-container">
                    <Join/>
                </div>
                <div className="form-container sign-in-container">
                    <Login/>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={onsignInButton}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={onsignUpButton}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member;