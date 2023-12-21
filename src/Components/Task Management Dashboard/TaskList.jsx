import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import axios from 'axios';

const TaskList = () => {
    let { signedInUser } = useContext(AuthContext);
    let userEmail = signedInUser?.email;
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/getTasks/${userEmail}`)
            .then(res => {
                setTasks(res.data);
            })
    }, [signedInUser])

    let fTodos = tasks.filter(task => task.status === "todo");
    let fOngoing = tasks.filter(task => task.status === "ongoing");
    let fCompleted = tasks.filter(task => task.status === "completed");

    console.log(fTodos, fOngoing, fCompleted);

    return (
        <div className='grid grid-cols-3 gap-6 w-[90%] mx-auto my-6 rounded-lg'>

            <div className="todo border-2 border-blue-600 rounded-xl p-2">
                <h2 className='text-center text-2xl font-bold'>Todos</h2>
                {
                    fTodos.map((todo, index) => (
                        <div key={index} className='p-2 mb-2 bg-white rounded-lg'>
                            <h1>{todo?.title}</h1>
                        </div>
                    ))
                }
            </div>


            <div className="ongoing border-2 border-blue-600 rounded-xl p-2">
                <h2 className='text-center text-2xl font-bold'>Ongoing</h2>
                {
                    fOngoing.map((ongoing, index) => (
                        <div key={index} className='p-2 mb-2 bg-white rounded-lg'>
                            <h1>{ongoing?.title}</h1>
                        </div>
                    ))
                }
            </div>


            <div className="ongoing border-2 border-blue-600 rounded-xl p-2">
                <h2 className='text-center text-2xl font-bold'>Completed</h2>
                {
                    fCompleted.map((completed, index) => (
                        <div key={index} className='p-2 mb-2 bg-white rounded-lg'>
                            <h1>{completed?.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TaskList;