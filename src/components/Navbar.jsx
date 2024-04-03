import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-[64px] p-2 flex justify-around items-center gap-2 bg-yellow-300 rounded-b-2xl'>
            <Link to='/' className='w-[160px] flex items-center justify-center'>
                <img src={logo} alt="logo" className='h-10 hover:h-12 transition-all ease-in-out duration-300' />
            </Link>
            <NavLink to='/alltasks' className={({isActive})=> isActive ? 'text-yellow-700 text-2xl font-medium border-b-4 border-white rounded-md sm:flex hidden' : 'text-yellow-600 text-2xl hover:font-medium sm:flex hidden'}>
                All Tasks
            </NavLink>
            <NavLink to='/addtask' className={({isActive})=> isActive ? 'text-yellow-700 text-2xl font-medium border-b-4 border-white rounded-md sm:flex hidden' : 'text-yellow-600 text-2xl hover:font-medium sm:flex hidden'}>
                Add Task
            </NavLink>
        </div>
    )
}

export default Navbar