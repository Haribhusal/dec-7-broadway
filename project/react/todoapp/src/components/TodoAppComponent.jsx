import React, { useState, useRef, useEffect } from 'react'
import TodoListComponent from './TodoListComponent'

const TodoAppComponent = () => {
    const todoNameRef = useRef()

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    console.log('currenttext', text)

    const handleInputChange = (e) => {
        setText(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoNameRef.current.value == '') {
            return;
        }



        setTodos((oldtodos) => {
            return [...oldtodos, {
                id: 1,
                text: text
            }]
        })
        todoNameRef.current.value = null



    }



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (title == '') return;
    //     // prevent the default reloading behaviour
    //     setTodos((oldTodos) => {
    //         return [...oldTodos, { id: uuidv4(), title: title, isCompleted: false, time: new Date() }]
    //     })
    //     setIsOpen(false);
    //     setTitle('');
    // }


    return (
        <div className="box bg-white w-[33%] p-10 rounded-md shadow-md">
            <h3 className="title font-bold text-3xl ">My To Do App</h3>

            <form onSubmit={handleSubmit} className="bg-cyan-100 p-2 rounded-md flex justify-between my-5">
                <input ref={todoNameRef} type="text" onChange={handleInputChange} className="flex-1 py-2 px-3 focus:ring-0 focus:outline-0" autoFocus placeholder="Enter here.." />
                <button type="submit" className="bg-cyan-500 px-3 text-white">Submit</button>
            </form>

            <TodoListComponent todos={todos} />
            <div className="flex justify-between mt-5">
                <div className="text">5 Items</div>
                <div className="bg-cyan-700 text-sm text-white px-3 py-0 rounded-sm">Clear All</div>
            </div>
        </div>
    )
}

export default TodoAppComponent