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
    
    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
      }

    //remove item from todo list
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1); //remove the item from the index
        setTodos(temp);
    }

    //update the state + remove item from todo
    return(<>
        {todos.map((todo,i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
        )}
        <TodoForm addTodo={addTodo} />
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)