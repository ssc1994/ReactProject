import { useEffect, useState } from 'react';

import styled from '../layout/MyPage.module.css';



const currentLogin = JSON.parse(sessionStorage.getItem("login"));
if( currentLogin.email==null){
    const memberInfo = {email : "aa123@naver.com", password : "aaaa1234!", nickname : "aa123"};
    localStorage.setItem('join', JSON.stringify([memberInfo]));
    currentLogin = JSON.parse(localStorage.getItem("join"));
}
const email = currentLogin.email;
const nickname = currentLogin.nickname;
const password = currentLogin.password;

function Article(props) {
    return <article className={styled.my_wrap}>
        {props.email == currentLogin.email ? <div>
            <h2>email : {props.email}</h2>
            <p>Nickname : {props.nickname}</p>
            <p>Password : {props.password}</p>
        </div>
            : <h3>{props.nickname}</h3>}

    </article>
}
function Header(props) {
    return <header className={styled.my_wrap2}>
        <h1><a href="/"  onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
        }}>{props.nickname}</a></h1>
    </header>
}
function Nav(props) {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/' + t.id} className={styled.my_wrap3} onClick={event => {
                event.preventDefault();
                props.onChangeMode(Number(event.target.id));
            }}>{t.nickname}님 ({t.email}) 정보 수정</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Update(props) {

    const [nickname, setTitle] = useState(props.nickname);
    const [password, setBody] = useState(props.password);
    return <article className={styled.my_wrap4}>
        <h2>email : {email !=undefined ?  "로그인하세요" : {email} }</h2>

        <form onSubmit={event => {
            event.preventDefault();
            const nickname = event.target.nickname.value;
            const password = event.target.password.value;
            props.onUpdate(nickname, password);
        }}>

            <div className={styled.my_wrap6}>
           
            <p>Nickname : <input type="text" name="nickname" placeholder="nickname" value={nickname} onChange={event => {
                setTitle(event.target.value);
            }} /></p>
            <p>Password : <input type="text" name="password" placeholder="password" value={password} onChange={event => {

                setBody(event.target.value);
            }}></input></p>
            <p><input type="submit" value="Update"></input></p>
            </div>
        </form>
    </article>
}

function Mypage() {

    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, nickname: `${nickname}`, password: `${password}`, email: `${email}` },
    ]);
    console.log(topics);
    let content = null;
    let contextControl = null;
    if (mode === 'WELCOME') {
        content = <Article nickname={nickname + "님 환영합니다"} password="*******"></Article>
    } else if (mode === 'READ') {
        let nickname, password = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                nickname = topics[i].nickname;
                password = topics[i].password;
            }
        }

        content = <Article email={email} nickname={nickname} password={password}></Article>
        contextControl = <li className={styled.my_wrap5}><a href={'/update/' + id} onClick={event => {

            event.preventDefault();
            setMode('UPDATE');
        }}>Update</a></li>
    } else if (mode === 'UPDATE') {
        let nickname, password = null;
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                nickname = topics[i].nickname;
                password = topics[i].password;
            }
        }
        content = <Update email={email} nickname={nickname} password={password} onUpdate={(nickname, password) => {
            console.log(nickname, password);            //수정된 값들
            const newTopics = [...topics]
            const updatedTopic = { email: `${email}`, password: `${password}`, nickname: `${nickname}` }
            const currMemberInfo = JSON.parse(localStorage.getItem('join'));

            localStorage.setItem('join', JSON.stringify(updatedTopic));
            sessionStorage.setItem('login', JSON.stringify(updatedTopic));

            for (let i = 0; i < newTopics.length; i++) {
                if (newTopics[i].id === id) {
                    newTopics[i] = updatedTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode('READ');
        }}></Update>
    }
    return (
        <div>
            <Header nickname="회원정보 수정" onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id);
            }}></Nav>
            {content}
            <ul>
                {contextControl}
            </ul>
            
        </div>
    );
}
export default Mypage;