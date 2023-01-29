import { Fragment, useCallback, useRef, useState } from "react"
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

//css파일 경로 링크


// import '../layout/MyPage.module.css'
import '../layout/TodoTemplate.css'
import styled from '../layout/Record.module.css';

const Record = () => {
    const [value, onChange] = useState(new Date()); //캘린더
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '중량 80쳤다',
            checked: true,

        },
        {
            id: 2,
            text: '야근으로 인한 결석',
            checked: false,
        },
    ]);

    //하이라이트가 들어갈 날짜를 배열로 작성했는데 안먹는이유가..
    const marks = [
        "15-01-2023",
        "15-01-2023",
    ];

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

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    );

    //배열에서 변화가 필요한 원소만 업데이트되고 나머지는 그대로 남아있게 됨.
    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    );



    return (

        
            <div className={styled.container}>
                <h3 className={styled.calendarTitle}>Calendar</h3>
                {/* 달력 */}

                <div className={styled.calendarBox}>
                    <Calendar
                        className={styled.calendar}
                        onChange={onChange}
                        value={value}
                        locale="en-EN"
                        //date와 우리가 작성한 배열인 marks를 비교하며 해당되는 날짜에 highlight를 클래스명으로 주게 된다.
                        tileClassName={({ date, view }) => {
                            if (marks.find((x) => x == moment(date).format("DD-MM-YYYY"))) {
                                return "highlight";
                            }
                        }}
                    />
                </div>
                <div className={styled.todoBox}>
                    {/* todo */}
                    <TodoTemplate>
                        <TodoInsert onInsert={onInsert} />
                        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
                    </TodoTemplate>
                </div>

            </div>
    );
};

export default Record;