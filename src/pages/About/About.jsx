import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export const AboutPage = (props) => {

    const [username, setUserName] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const navigate = useNavigate();


    const register = (e) => {
        //* to prevent refresh  
        e.preventDefault()
        //* temp array
        let newTab = [...props.profile]

        //* check if ther is a  user  with the same userName

        let userExist = newTab.findIndex(element => element.userName == username)  // if the user already exist  method return the  index of the user / ila l9a lia l user  kayn  kayrje3 l index dyalo  else si non ila la  kayraje3 - 1

        if (username && useremail && password && confirmPassword && confirmPassword == password) {
            if (userExist == -1) {

                let user = {
                    userName: username,
                    userEmail: useremail,
                    password: password,
                    image: image, // Include the image in the user object
                }

                newTab.push(user)
                console.log(newTab);
                props.setProfile(newTab)


                setUserName("")
                setUserEmail("")
                setPassword("")
                setConfirmPassword("")
                console.log(newTab);
                // navigate("/")

            } else {
                alert("User already exist ")
            }
        } else {
            alert("All Inputs should be filed")
        }

    }

    const checkConfirm = (e) => {
        setConfirmPassword(e.target.value);
        console.log(confirmed);
        if (e.target.value == password) {
            setConfirmed(!confirmed)
        } else {
            setConfirmed(!confirmed)
        }
    }
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        // Validate if the selected file is an image (you can add more validation as needed)
        if (selectedImage && selectedImage.type.startsWith('image/')) {
            setImage(selectedImage);
        } else {
            alert("Please select a valid image file.");
        }
    };


    return (
        <>



            <div className="h-screen w-100  bgHero">
                <div className="absolute w-100 h-100 bg-[#00000038] flex items-center justify-center ">

                    <div className="w-50 h-[75%] flex flex-col items-center mt-2 ">
                        <form action="" className='w-100 h-100 flex flex-col items-center justify-around bg-[#00000043] rounded-4 px-2'>
                            <p className='text-white'>Aready have an account ? <Link className='text-white'>Login</Link></p>
                            <h1 className='text-white'>Signup</h1>
                            <input value={username} onChange={(e) => { setUserName(e.target.value) }} required className='w-100 py-3 rounded-full text-center placeholder:text-white px-2 bg-[#eeeeee4c]' placeholder='Insert your Username' type="text" />
                            <input value={useremail} onChange={(e) => { setUserEmail(e.target.value) }} required className='w-100 py-3 rounded-full text-center placeholder:text-white px-2 bg-[#eeeeee4c]' placeholder='Insert your email' type="email" />
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className='w-100 py-3 rounded-full text-center placeholder:text-white px-2 bg-[#eeeeee4c]' placeholder='Insert your Password' type="password" />
                            <input value={confirmPassword} onChange={(e) => { checkConfirm(e) }} required className={`w-100 py-3 rounded-full ${confirmed ? "outline outline-green-500" : ""} text-center placeholder:text-white px-2 bg-[#eeeeee4c]`} placeholder='Confirm your Password' type="password" />
                            <input type="file" accept="image/*" onChange={handleImageChange} className="w-100 py-3 rounded-full text-center placeholder:text-white px-2 bg-[#eeeeee4c]" placeholder="Select Profile Image" />
                            <button onClick={(e) => { register(e) }} className='w-100 py-3 rounded-full bg-[#d1d1d1]'>Signup</button>


                        </form>



                    </div>
                </div>



            </div>


        </>
    );
};

