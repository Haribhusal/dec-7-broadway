import React from 'react'

const TodoListComponent = ({ todos }) => {

    return (
        <ul className="border-b-2 border-dashed pb-5 border-gray-300">
            {/* Loop Starts */}

            {todos.map((todo) => (
                <li key={todo.id} className="flex justify-between mb-1 hover:bg-cyan-50 group cursor-pointer">
                    <div className="text">{todo.text}</div>
                    <div className="bg-cyan-700 text-sm text-white px-3 py-0 rounded-sm opacity-0 group-hover:opacity-100">Delete</div>
                </li>
            ))}

            {/* loop ends */}

        </ul>
    )
}

export default TodoListComponent