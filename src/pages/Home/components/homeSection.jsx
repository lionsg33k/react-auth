import React, { useState } from 'react';
import "./section1.sass"
import { Link, useNavigate } from 'react-router-dom';
import { CardBody } from 'react-bootstrap';

export const FirstSectionComponent = (props) => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState("")

    const [myCode, setMyCode] = useState(0)
    const showNotif = (e) => {
        let code = Math.round(Math.random() * 9999)
        setMyCode(code)
        e.preventDefault()

        if (Notification.permission == "granted") {
            const body = "test"
            new Notification("2FA Code", {
                body: code,
            })

        } else {
            Notification.requestPermission().then(permission => {
                if (permission == "granted") {
                    new Notification("2FA Code")
                }
            })
        }


    }

    const login = (e) => {
        e.preventDefault()
        alert(myCode)
        let newTab = [...props.profile]


        if (userName && password) {
            let connectedUser = newTab.findIndex((element => element.userName == userName && element.password == password))
            if (connectedUser != -1 && auth == myCode) {
                navigate(`/profile/${newTab[connectedUser].userName}`)
                console.log(newTab[connectedUser]);
                setUserName("")
                setPassword("")

                
            } else {
                alert("User does not exist in database")
            }


        }



    }


    return (
        <>



            <div className="h-screen w-100  bgHero">
                <div className="absolute w-100 h-100 bg-[#00000038] flex items-center justify-center">

                    <div className="w-50 h-[70%] flex flex-col items-center ">
                        <form action="" className='w-100 h-100 flex flex-col items-center justify-around bg-[#00000043] rounded-4 px-2'>
                            <p className='text-white'>Dont have an account ? <Link className='text-white'>SignUp</Link></p>
                            <h1 className='text-white'>Login</h1>
                            <input onChange={(e) => { setUserName(e.target.value) }} value={userName} required className='w-100 py-3 rounded-full text-center placeholder:text-white px-2 bg-[#eeeeee4c]' placeholder='Insert your Email' type="text" />
                            <input onChange={(e) => { setPassword(e.target.value) }} value={password} required className='w-100 py-3 rounded-full text-center placeholder:text-white px-2 bg-[#eeeeee4c]' placeholder='Insert your Password' type="password" />
                            <div className="w-100 flex justify-between ">
                                <button onClick={showNotif} className='w-25 py-3 rounded-full bg-[#979797]'>Receive code </button>
                                <input onChange={(e) => { setAuth(e.target.value) }} required className='w-50 rounded-full bg-[#eeeeee4c] text-center placeholder:text-white' placeholder='Insert your 2FA Code' type="text" />
                            </div>
                            <button onClick={(e) => { login(e) }} className='w-100 py-3 rounded-full bg-[#d1d1d1]'>Login</button>
                            <div className="w-100 flex justify-between px-2">
                                <div className="flex gap-4  py-2">
                                    <inpu className="mt-1" type="checkbox" />
                                    <p className='text-white'>Remember password</p>
                                </div>
                                <div className="text-white underline">Forgot pass ? </div>
                            </div>
                        </form>



                    </div>
                </div>



            </div>




        </>
    );
};

