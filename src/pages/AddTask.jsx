import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const AddTask = () => {
    const [task, setTask] = useState('');
    const navigate = useNavigate();
    const [storedTasks, setStoredTasks] = useState([]);

    useEffect(() => {
        const storedTasksString = localStorage.getItem('tasks');
        if (storedTasksString) {
            setStoredTasks(JSON.parse(storedTasksString));
        }
        console.log(storedTasksString);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { task_id: storedTasks.length + 1, task_text: task, task_status: 'uncomplete' };
        const updatedTasks = [...storedTasks, newTask];
        const updatedTasksString = JSON.stringify(updatedTasks);
        console.log(updatedTasksString);
        localStorage.setItem('tasks', updatedTasksString);
        setTask('');
        navigate('/');
    }


    return (
        <div className='w-full h-[100vh]'>
            <Navbar />
            <div className='w-full h-[calc(100vh-128px)] flex flex-col items-center p-2'>
                <h3 className='text-2xl font-medium'>React To-Do Application </h3>
                <div className='h-1 bg-yellow-600 w-[300px] my-1 rounded-lg' />
                <div className='h-[500px] w-full flex flex-col items-center justify-center'>
                    <h3 className='text-xl font-medium mt-4'>Add Task</h3>
                    <div className='h-1 bg-yellow-600 w-[100px] my-1 rounded-lg' />
                    <form onSubmit={handleSubmit} className='sm:w-[70%] w-full flex flex-col items-center justify-between my-4 p-4 gap-4 h-[140px]'>
                        <input
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            className='border-2 border-yellow-300 rounded-xl px-2 py-1 w-full focus:outline-none focus:border-4'
                            required
                        />
                        <button type='submit' className='bg-gradient-to-br from-yellow-100 to-yellow-500 px-4 py-2 rounded-full text-yellow-700 text-lg font-medium hover:px-4 hover:py-3 hover:text-xl
                    transition-all duration-200 ease-in-out hover:text-white sm:w-auto w-full'>
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddTask