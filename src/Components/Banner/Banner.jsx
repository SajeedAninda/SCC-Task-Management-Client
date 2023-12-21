import React, { useContext } from 'react';
import Lottie from "lottie-react";
import bannerLottie from "../../assets/bannerLottie.json"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Banner = () => {
    let { signedInUser } = useContext(AuthContext);

    return (
        <div className='w-[90%] mx-auto'>
            <div className='flex flex-col md:flex-row py-12 lg:py-6 xl:py-0 justify-between items-center'>
                <div className='flex-1 space-y-3'>
                    <h1 className='text-4xl font-bold text-[#363636]'>Task Mastery at Your Fingertips <br /> Achieve More, Stress Less</h1>
                    <p className='text-lg pb-3 font-medium text-[#363636] w-[80%]'>
                        Unlock your full potential with Task Mastery at Your Fingertips! Say goodbye to overwhelm and hello to productivity. Achieve more, stress less as you seamlessly navigate through your daily tasks with efficiency and ease.
                    </p>
                    {
                        signedInUser ?
                            <Link to={"/dashboard"}>
                                <button className='bg-[#5a55ca] px-7 py-3 rounded-md text-white font-bold hover:bg-[#5b55caab] flex justify-between items-center gap-2'>
                                    Go to Task Management Dashboard
                                    <FaArrowUpRightFromSquare />
                                </button>
                            </Link>
                            :
                            <Link to={"/login"}>
                                <button className='bg-[#5a55ca] px-7 py-3 rounded-md text-white font-bold hover:bg-[#5b55caab] flex justify-between items-center gap-2'>
                                    Lets Explore
                                    <FaArrowUpRightFromSquare />
                                </button>
                            </Link>
                    }
                </div>
                <div className='flex-1'>
                    <Lottie animationData={bannerLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;