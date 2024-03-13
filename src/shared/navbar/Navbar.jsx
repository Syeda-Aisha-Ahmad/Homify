import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-14 py-4 text-white bg-[#182b02]'>
            <div className='text-2xl font-serif'>H O M I F Y</div>
            <div className='flex items-center gap-10'>
                <Link to={"/"}><p>Home</p></Link>
                <Link to={"/my-appointments"}><p>My Appointments</p></Link>
                <Link to={"/booking"}><p>Booking</p></Link>
                <Link to={"/login"}><p>Login</p></Link>
                <Link to={"/register"}><p>Register</p></Link>
            </div>
        </div>
    );
};

export default Navbar;