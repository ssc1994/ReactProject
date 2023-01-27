import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from './Header.module.css';


const Header = () => {

    const navigator = useNavigate();
    const sinclClick = () => {
        navigator("/");
    }

    const[loginCate, setLoginCate] = useState('login');
    const[visible, setVisible] = useState(true);
    const loginInfo = sessionStorage.getItem('login');

    //mount이후에 session의 유무에 따라서 카테고리명 LOGIN / LOGOUT 변경처리
    //& JOIN 카테고리 visible true/false 처리하여 LOGOUT일 경우에는 숨김 처리 해주었다.
    useEffect(() => {
        if(loginInfo !== null){
            setLoginCate("LOGOUT");
            setVisible(false);
        }else{
            setLoginCate("LOGIN");
            setVisible(true);
        }
    }, [loginInfo]);
    
    // LOGOUT 클릭시 session 삭제 처리
    const onClickLogCate = () => {
        if(loginCate === "LOGOUT"){
            sessionStorage.removeItem('login');
            navigator('/');
        }else{ //로그인
            navigator('/login');
        }
    }


    return (
        <header id="header">
            <nav className={styled.nav}>
                <div className={styled.uniqueColorHeader}>
                    <h4>운동을 습관화 합시다블라블라</h4>
                </div>
                <div className={styled.whiteHeader}>
                    <img src="/img/sincl.png" className={styled.sincl} onClick={sinclClick}/>
                    <ul className={styled.headerBox}>
                        <li><Link to="/map" className={styled.map}>MAP</Link></li>
                        <li><Link to="/record" className={styled.record}>RECORD</Link></li>
                        {!visible ? <li><Link to="/mypage" className={styled.mypage}>MYPAGE</Link></li> : null}
                        <li><Link to="/login" className={styled.login} onClick={onClickLogCate}>{loginCate}</Link></li>
                        {visible ? <li><Link to="/join" className={styled.join} >JOIN</Link></li> : null}
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </header>
    )
}

export default Header;