import { Fragment } from "react"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header id="">
            <ul>
                <li><Link to ="/map">시설찾기</Link></li>
                <li><Link to ="/record">운동기록</Link></li>
                <li><Link to ="/mypage">마이페이지</Link></li>
                <li><Link to ="/login">로그인</Link></li>
                <li><Link to ="/join">회원가입</Link></li>
            </ul>
        </header>
    )
}

export default Header;