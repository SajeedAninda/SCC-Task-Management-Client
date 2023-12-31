import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import './update.css';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Authentication/AuthProvider';

const UpdateTask = () => {
    let singleTaskData = useLoaderData();
    let { register, handleSubmit } = useForm();
    let { signedInUser } = useContext(AuthContext);
    let userEmail = signedInUser?.email
    let navigate = useNavigate();

    let onSubmit = (data) => {
        let taskData = { ...data, status: 'todo', email: userEmail };

        axios.put(`https://ssc-techno-task-management-server.vercel.app/updateTask/${singleTaskData?._id}`, taskData)
            .then((res) => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Task Updated Successfully!');
                    navigate("/dashboard");
                } else {
                    toast.error('Task Update Failed');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    let todayDate = new Date().toISOString().split('T')[0];

    return (
        <div className='createTaskBg mx-auto w-[90%] my-8 rounded-xl px-8 py-12'>
            <h1 className='text-center font-bold text-[#363636] text-4xl pb-6'>Update Your Task!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex-1'>
                        <label className='text-2xl text-[#363636] font-semibold' htmlFor='title'>
                            Task Title:
                        </label>{' '}
                        <br />
                        <input
                            {...register('title', { required: true })}
                            defaultValue={singleTaskData?.title || ''}
                            className='px-3 w-full py-3 rounded-lg mt-2'
                            type='text'
                            id='title'
                            name='title'
                            placeholder='Write the task title name'
                        />
                    </div>

                    <div className='flex-1'>
                        <label className='text-2xl text-[#363636] font-semibold' htmlFor='description'>
                            Task Description:
                        </label>{' '}
                        <br />
                        <input
                            {...register('description', { required: true })}
                            defaultValue={singleTaskData?.description || ''}
                            className='px-3 w-full py-3 rounded-lg mt-2'
                            type='text'
                            id='description'
                            name='description'
                            placeholder='Write the task Description'
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <div className='flex-1'>
                        <label className='text-2xl text-[#363636] font-semibold' htmlFor='deadline'>
                            Task Deadline:
                        </label>{' '}
                        <br />
                        <input
                            {...register('deadline', { required: true })}
                            defaultValue={singleTaskData?.deadline || ''}
                            className='px-3 w-full py-3 rounded-lg mt-2'
                            type='date'
                            id='deadline'
                            name='deadline'
                            min={todayDate}
                        />
                    </div>

                    <div className='flex-1'>
                        <label className='text-2xl text-[#363636] font-semibold' htmlFor='priority'>
                            Task Priority:
                        </label>{' '}
                        <br />
                        <select
                            {...register('priority', { required: true })}
                            defaultValue={singleTaskData?.priority || ''}
                            className='px-3 w-full py-[14px] rounded-lg mt-2'
                            name='priority'
                            id='priority'
                        >
                            <option value='low'>Low</option>
                            <option value='moderate'>Moderate</option>
                            <option value='high'>High</option>
                        </select>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-8'>
                    <button
                        className='bg-[#4640b3] w-full py-3 rounded-md text-white font-bold hover:bg-[#5b55caab] flex justify-center text-xl items-center gap-2 border-2 border-white'
                        type='submit'
                    >
                        Update Task <FaArrowRightFromBracket />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;