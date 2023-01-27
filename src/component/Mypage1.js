import { Fragment, useState } from "react"

//css파일 경로 링크
import '../layout/MyPage.module.css'
import '../layout/TodoTemplate.css'


const Mypage1 = () => {
    return (

        <Fragment>
            <h3>My Page</h3>
            <div>
                <h3>정보수정</h3>
                <div>
                    아이디 : <input type="text" /> <br />
                    현재 비밀번호 : <input type="text" /><br />
                    새 비밀번호 : <input type="text" /><br />
                    새 비밀번호 확인: <input type="text" /><br />
                    <button type="submit">수정완료</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Mypage1;