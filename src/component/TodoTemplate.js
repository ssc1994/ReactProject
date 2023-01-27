

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">운동 기록표</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;