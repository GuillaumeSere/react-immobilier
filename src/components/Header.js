import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { AiOutlineHome } from 'react-icons/ai';

const Header = () => {
    return (
        <header className='py-6 bg-black border-b-2 border-black'>
            <div className="container mx-auto flex justify-between">
                <Link to='/'>
                    <div className='flex gap-2'>
                        <AiOutlineHome className='text-white mr-5 text-4xl'/>
                        <img src={Logo} alt="" className='bg-white w-24 p-2 rounded-lg' />
                    </div>
                </Link>
                <div className='flex items-center gap-6'>
                    <Link className='hover:text-violet-200 text-white transition' to=''>Login</Link>
                    <Link className='bg-violet-700 hover:bgbg-violet-800 text-white px-3 py-2 rounded-lg transition' to=''>Sign up</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
