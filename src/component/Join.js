import axios from "axios";
import { Fragment, useCallback, useState } from "react"
import { json, useNavigate } from "react-router-dom";
import './../layout/Member.css'

const Join = () => {

    /* 이메일 */
    // 이메일 유효성 검사 (정규표현식으로 이메일 형식이 맞는지 체크)
    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
    };
    const [email, setEmail] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const isEmailValid = validateEmail(email);

    // 이메일 유효성 검사하여 input태그 아래에 메세지가 나오도록 oncahgne이벤트를 활용하여 구현
    const onChangeEmail = useCallback(async (e) => {
        const currEmail = e.target.value;
        setEmail(currEmail);

        if (!validateEmail(currEmail)) {
            setEmailMsg("이메일 형식이 올바르지 않습니다.");
        } else {
            setEmailMsg("올바른 이메일 형식입니다.👌");
        }
    });

    /* 비밀번호 */
    const validatePwd = (password) => {
        return password
            .toLowerCase()
            .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
    };
    const [password, setPassword] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const isPwdValid = validatePwd(password);

    const onChangePwd = useCallback((e) => {
        const currPwd = e.target.value;
        setPassword(currPwd);

        if (!validatePwd(currPwd)) {
            setPwdMsg("영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.");
        } else {
            setPwdMsg("안전한 비밀번호입니다.");
        }
    }, []);

    /* 비밀번호 확인 */
    const [confirmPwd, setConfirmPwd] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg] = useState('');
    const isConfirmPwd = password === confirmPwd;

    const onChangeConfirmPwd = useCallback((e) => {
        const currConfirmPwd = e.target.value;
        setConfirmPwd(currConfirmPwd);

        if (currConfirmPwd !== password) {
            setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
        } else {
            setConfirmPwdMsg("올바른 비밀번호입니다.");
        }
    }, [password]);


    /* 닉네임 */
    const validateNickname = (nickname) => {
        return nickname
            .toLowerCase()
            .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/)
    };
    const [nickname, setNickname] = useState('');
    const [nicknameMsg, setNicknameMsg] = useState('');
    const isNicknameValid = validateNickname(nickname);

    const onChangeNickname = useCallback((e) => {
        const currNickname = e.target.value;
        setNickname(currNickname);

        if (!validateNickname(currNickname)) {
            setNicknameMsg("1글자 이상 9글자 미만으로 입력해주세요.");
        } else {
            setNicknameMsg("올바른 닉네임 형식입니다.");
        }
    }, []);

    //모든 것들이 유효한지 체크
    const isAllValid = isEmailValid && isPwdValid && isConfirmPwd && isNicknameValid;

    const navigator = useNavigate();
    const onSubmit = () => {
        // 회원가입시 받은 정보를 localstorage에 저장한다.
        const currMemberInfo = JSON.parse(localStorage.getItem('join'));
        const memberInfo = {email : email, password : password, nickname : nickname};
        if(currMemberInfo === null){
            localStorage.setItem('join', JSON.stringify([memberInfo]));
        }else{
            currMemberInfo.push(memberInfo);
            localStorage.setItem('join', JSON.stringify(currMemberInfo));
        }
        alert('가입되었습니다');
        navigator("/login");
    }

    return (
        <Fragment>
            <form action="#" calssName="join">
                <h1>Sign Up</h1>
                <p>use your email for registration</p>

                <input type="text" onChange={onChangeEmail} placeholder="Email"></input>
                <span className={isEmailValid ? 'success' : 'error'}>{emailMsg}</span>

                <input type="password" onChange={onChangePwd} placeholder="password"></input>
                <span className={isPwdValid ? 'success' : 'error'}>{pwdMsg}</span>

                <input type="password" onChange={onChangeConfirmPwd} placeholder="verify password"></input>
                <span className={isConfirmPwd ? 'success' : 'error'}>{confirmPwdMsg}</span>

                <input type="text" onChange={onChangeNickname} placeholder="NickName"></input>
                <span className={isNicknameValid ? 'success' : 'error'}>{nicknameMsg}</span>

                <button onClick={onSubmit} type="submit" disabled={!isAllValid} style={{ marginTop: "10px" }}>Sign Up</button>
            </form>
        </Fragment>
    )
}
export default Join;