function App(){
    const [todos, setTodos] = React.useState([
            {
                text: "learn react",
                isCompleted: false,
            },
            {
                text: "meet friend for lunch",
                isCompleted: false,
            },
            {
                text: "build todo app",
                isCompleted: false,
            }
        
    ]);
    //code to add new todo item
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        const newTodos = [...todos, {text:value, isCompleted:false}];
        setTodos(newTodos);
        setValue('');
    }
    //remove item from todo list
    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1); //remove the item from the index
        setTodos(temp);
    }

    //update the state + remove item from todo
    return(<>
        {todos.map((todo,i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input type="text"
            className="input"
            value={value}
            placeholder="Add Todo ..."
            onChange={e => setValue(e.target.value)}
            />
        </form>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)