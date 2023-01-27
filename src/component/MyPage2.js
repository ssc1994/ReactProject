import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import './../layout/Member.css'
import Join from "./Join";


const MyPage2 = () => {

    const loginInfo = JSON.parse(sessionStorage.getItem('login'));
    const nickname = loginInfo.nickname;
    const email = loginInfo.email;

    const [visible, setVisible] = useState(false);
    const onModify = () => {
        setVisible(true);
    }

    return (
        <Fragment>
            <div className="Form">
                <div id="container">
                    <div className="container right-panel-active" id="container">

                        {/* 개인정보를 수정할 수 있는 화면 */}
                        <div className="form-container sign-up-container">
                            <form action="#">
                                {
                                    visible === true ?
                                        <div>
                                            <Join />
                                        </div>
                                        :
                                        <div>
                                            <img src="https://cdn-icons-png.flaticon.com/512/5393/5393061.png" alt="profile" width="200px" />
                                        </div>
                                }
                            </form>
                        </div>

                        {/* 정보에 따라서 가입유도 화면 또는 마이페이지 정보 */}
                        <div className="overlay-container">
                            <div className="overlay">
                                {/* 마이페이지 */}
                                <div className="overlay-panel overlay-left">
                                    <h1>[{nickname}]님!</h1>
                                    <p>Your email : {email}</p>
                                    <button className="ghost" id="signIn" onClick={onModify}>Info Modify</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyPage2;