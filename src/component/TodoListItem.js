import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../layout/TodoListItem.css'
import moment from 'moment';
import { useState } from 'react';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    
    const [nowTime,setNowTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

    const todayTime = () => {
        let now = new Date(); //현재 날짜 및 시간
        let year = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
    }

    return (
        <div className='TodoListItem'>
            <div className={cn ('checkBox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{nowTime} {text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;