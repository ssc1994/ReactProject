import { Fragment, useCallback, useRef, useState } from "react"
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

//css파일 경로 링크
import '../layout/MyPage.module.css'
import '../layout/TodoTemplate.css'



const Mypage = () => {
    const [value, onChange] = useState(new Date()); //캘린더
    const [todos, setTodos] = useState ([
        {
            id: 1,
            text: '리액트 기초',
            checked: true,
        },
        {
            id:2,
            text: '컴포넌트 스타일링',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어보기',
            checked: false,
        },
    ]);

    //고유값으로 사용될 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(4);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1; //nextId 1씩 더하기
        },
        [todos],
    );
    

    //하이라이트가 들어갈 날짜를 배열로 작성했는데 안먹는이유가..
    const marks = [
        "15-01-2023",
        "15-01-2023",
    ];

    return (

        <Fragment>
            <h3>마이페이지</h3>
            <div>
                {/* 달력 */}
                <Calendar
                    onChange={onChange}
                    value={value}
                    locale="en-EN"
                    //date와 우리가 작성한 배열인 marks를 비교하며 해당되는 날짜에 highlight를 클래스명으로 주게 된다.
                    tileClassName={({ date, view }) => {
                        if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                            return "highlight";
                        }
                    }}
                />
                {/* 여기까지 달력 */}
                <br />
                {/* todo */}
                <TodoTemplate>
                    <TodoInsert/>
                    <TodoList todos={todos}/>
                </TodoTemplate>



                {/* 마이페이지 */}
                <h3>정보수정</h3>
                <div>
                아이디 : <input type="text" /> <br/>
                현재 비밀번호 : <input type="text" /><br/>
                새 비밀번호 : <input type="text" /><br/>
                새 비밀번호 확인: <input type="text" /><br/>
                <button type="submit">수정완료</button>
                </div>








            </div>
        </Fragment>
    )
}

export default Mypage;