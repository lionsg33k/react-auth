import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/myLogo.png"

export const Header = () => {


    return (
        <>
            <div className="h-[12vh] bg-transparent z-10 flex items-center justify-between px-5 fixed w-100">
                <img width={60} src={logo} alt="" />
                <div className="w-[60%] h-100 flex items-center justify-evenly">
                    <Link to={""} className='no-underline text-white text-xl'>Home</Link>
                    <Link to={""} className='no-underline text-white text-xl'>Blog </Link>
                    <Link to={""} className='no-underline text-white text-xl'>About </Link>
                    <Link to={""} className='no-underline text-white text-xl'>Contact</Link>
                </div>
                <div className="w-[25%] h-100  flex items-center justify-around  ">
                    <Link to={"/signup"} className=' py-3 px-5 rounded-full bg-[#d1d1d1] text-black no-underline hover:bg-slate-300 '>Sign up</Link>
                    <Link  to={"/"} className=' py-3 px-5 rounded-full bg-[#d1d1d1] text-black no-underline hover:bg-slate-300 '>Login</Link>

                </div>

            </div>



        </>
    );
};

