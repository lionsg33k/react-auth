import React from 'react';
import { useParams } from 'react-router-dom';

export const Profile = ({ profile }) => {
    const { id } = useParams();

    // Find the user directly when rendering
    const onlineUser = profile.find(element => element.userName === id);

    return (
        <div className="h-screen w-100 bgHero">
            <div className="absolute w-100 h-100 bg-[#00000038] flex items-center justify-center">
                <div className="w-50 h-[70%] flex flex-col items-center bg-[#000000a6]">
                    {/* Display onlineUser information */}
                    {onlineUser ? (
                        <>
                            <img src={URL.createObjectURL(onlineUser.image)} alt="" />
                            <h1 className='text-white'>{onlineUser.userName}</h1>
                            {/* Add more profile information as needed */}
                        </>
                    ) : (
                        <p className="text-white">User not found</p>
                    )}
                </div>
            </div>
        </div>
    );
};
