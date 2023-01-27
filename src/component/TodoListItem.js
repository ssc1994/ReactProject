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

    return (
        <div className='TodoListItem'>
            <div className={cn ('checkBox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className='text'>`{nowTime} {text}`</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;