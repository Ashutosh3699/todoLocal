import {useState, useEffect } from "react";
import { TodoContextProvider } from "./context/TodoContext"
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo=(todo)=>{

    setTodos((prev) => [...prev, todo] )

  }

  console.log(todos);

  const delTodo=(id)=>{

    setTodos((prevTodo)=> prevTodo.filter((todo)=> todo.id !== id));
  }

  const updateTodo=(id,newTodo)=>{

    setTodos((prevTodo)=> prevTodo.map((todo)=>todo.id===id ? newTodo : todo ));
  }

  const toggleComplete=(id)=>{

    setTodos((prevTodo)=> prevTodo.map((todo)=>(todo.id===id? {...todo, complete: !todo.complete} : todo)));
  }

  useEffect(()=>{
    
    const result = JSON.parse(localStorage.getItem("todos"));

    if(result && result.length>0){
      setTodos(result);
    }
  },[]);

  useEffect(()=>{

    localStorage.setItem("todos",JSON.stringify(todos) );

  },[todos])

  return (
    <TodoContextProvider  value={{todos,addTodo,delTodo,updateTodo, toggleComplete}}  >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    
                        {
                          todos.map((todo) =>(
                            <div  key={todo.id}
                            className="w-full"
                            >
                              <TodoItem todo={todo} />
                             
                            </div>
                          ))
                        }
                        
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
