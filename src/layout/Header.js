import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from './Header.module.css';


const Header = () => {

    const navigator = useNavigate();

    const sinclClick = () => {
        navigator("/");
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
                        <li><Link to="/map" className={styled.map}>시설찾기</Link></li>
                        <li><Link to="/record" className={styled.record}>운동기록</Link></li>
                        <li><Link to="/mypage" className={styled.mypage}>마이페이지</Link></li>
                        <li><Link to="/login" className={styled.login}>로그인</Link></li>
                        <li><Link to="/join" className={styled.join}>회원가입</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header;