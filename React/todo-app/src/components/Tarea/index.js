import Button from "../Button";

const Tarea = ({todo, onClickCheckbox, onClickRemove}) => {

    const onchangeHandler = ()=>{
        console.log("Soy el hijo. Necesito decirle a mi padrte que cambie el boolean checked de este item", todo.id);
        onClickCheckbox(todo)
    }

    // const onclickHandler = ()=>{
    //     console.log("Soy el hijo. Necesito decirle a mi padrte que cambie el boolean checked de este item", todo.id);
    //     onClickRemove(todo)
    // }

    return (
        <li className='todo-container'>
            <input className='todo-checkbox' type={"checkbox"} checked={todo.checked} onChange={onchangeHandler} />
            <span className='title'>{todo.title}</span>
            <Button 
                className={'todo-delete'} 
                onClick={() => onClickRemove(todo)} 
                text ={' X '}
                disabled={!todo.checked}
            />

        </li>
    )
}

export default Tarea