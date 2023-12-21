import React, { useContext, useEffect, useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { AuthContext } from '../Authentication/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const TaskList = () => {
    let { signedInUser } = useContext(AuthContext);
    let userEmail = signedInUser?.email;
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/getTasks/${userEmail}`)
            .then(res => {
                setTasks(res.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, [signedInUser, userEmail]);

    let moveTask = async (id, newStatus) => {
        try {
            let updatedTasks = tasks.map(task => {
                if (task._id === id) {
                    task.status = newStatus;
                }
                return task;
            });
            setTasks(updatedTasks);
            toast('Task updated successfully', { duration: 3000, type: 'success' });

            await axios.patch(`http://localhost:5000/updateTask/${id}`, { status: newStatus });
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    let TodoTask = ({ task, index }) => {
        let [, drag] = useDrag({
            type: ItemTypes.TASK,
            item: { id: task._id, status: task.status },
        });

        return (
            <div ref={drag} key={index} className='p-2 mb-2 bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-grab'>
                <h1>{task?.title}</h1>
            </div>
        );
    };

    let OngoingTask = ({ task, index }) => {
        let [, drag] = useDrag({
            type: ItemTypes.TASK,
            item: { id: task._id, status: task.status },
        });

        return (
            <div ref={drag} key={index} className='p-2 mb-2 bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-grab'>
                <h1>{task?.title}</h1>
            </div>
        );
    };

    let CompletedTask = ({ task, index }) => {
        let [, drag] = useDrag({
            type: ItemTypes.TASK,
            item: { id: task._id, status: task.status },
        });

        return (
            <div ref={drag} key={index} className='p-2 mb-2 bg-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-grab'>
                <h1>{task?.title}</h1>
            </div>
        );
    };

    let [, dropTodo] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => moveTask(item.id, 'todo'),
    });

    let [, dropOngoing] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => moveTask(item.id, 'ongoing'),
    });

    let [, dropCompleted] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item) => moveTask(item.id, 'completed'),
    });

    return (
        <div className='grid grid-cols-3 gap-6 w-[90%] mx-auto my-6 rounded-lg'>
            <div ref={dropTodo} className='todo border-2 border-blue-600 rounded-xl p-2'>
                <h2 className='text-center text-2xl font-bold'>Todos</h2>
                {
                    tasks.length === 0 ?
                        <div className='text-2xl text-center font-semibold mt-2'>
                            No Tasks added yet
                        </div>
                        :
                        tasks.filter(task => task.status === 'todo').map((todo, index) => <TodoTask key={index} task={todo} index={index} />)
                }
            </div>

            <div ref={dropOngoing} className='ongoing border-2 border-blue-600 rounded-xl p-2'>
                <h2 className='text-center text-2xl font-bold'>Ongoing</h2>
                {
                    tasks.length === 0 ?
                        <div className='text-2xl text-center font-semibold mt-2'>
                            No Tasks added yet
                        </div>
                        :
                        tasks.filter(task => task.status === 'ongoing').map((ongoing, index) => <OngoingTask key={index} task={ongoing} index={index} />)
                }
            </div>

            <div ref={dropCompleted} className='completed border-2 border-blue-600 rounded-xl p-2'>
                <h2 className='text-center text-2xl font-bold'>Completed</h2>
                {
                    tasks.length === 0 ?
                        <div className='text-2xl text-center font-semibold mt-2'>
                            No Tasks added yet
                        </div>
                        :
                        tasks.filter(task => task.status === 'completed').map((completed, index) => <CompletedTask key={index} task={completed} index={index} />)
                }
            </div>
        </div>
    );
};

export default TaskList;
