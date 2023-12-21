import React, { useContext } from 'react';
import "./dashboardProfile.css"
import { AuthContext } from '../Authentication/AuthProvider';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";


const DashboardProfile = () => {
    let { signedInUser,logOut } = useContext(AuthContext);

    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Log Out Succesfull");
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='w-[90%] mx-auto p-4 profileBg rounded-lg'>
            <div className='px-8 flex justify-between'>
                <div className='flex items-center gap-6'>
                    <img className='w-[100px] rounded-full' src={signedInUser?.photoURL} alt="" />
                    <div>
                        <h1 className='text-3xl text-[#363636] font-bold'>Hello, {signedInUser?.displayName}</h1>
                        <h3 className='text-xl text-[#363636] font-medium'>{signedInUser?.email}</h3>
                        <h3 className='text-xl text-[#363636] font-medium'>Create new tasks & manage them accordingly</h3>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <Link to={"/createTask"}>
                        <button className='bg-[#4fc444] px-7 py-3 rounded-md text-white font-bold hover:bg-[#4fc444a2] flex justify-between items-center gap-2'>
                            Create Task
                            <FaArrowUpRightFromSquare />
                        </button>
                    </Link>

                    <button onClick={handleLogout} className='bg-[#df4949] px-7 py-3 rounded-md text-white font-bold hover:bg-[#df4949b7] flex justify-center items-center gap-3'>
                        Logout
                        <TbLogout2 className='text-2xl'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardProfile;