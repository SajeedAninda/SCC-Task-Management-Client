import React from 'react';
import student from "../../assets/student.jpg"
import developer from "../../assets/developer.jpg"
import banker from "../../assets/banker.jpg"
import corporate from "../../assets/corporate.jpg"

const PeopleUsing = () => {
    return (
        <div className=' chooseBg'>
            <div className='w-[90%] mx-auto'>
                <div className='text-center space-y-4'>
                    <h1 className='text-[#5a55ca] font-bold text-3xl  md:text-4xl'>Discover Who Benefits Most from Our Platform</h1>
                    <h3 className='text-[#363636] font-semibold text-lg'>Our platform caters to a diverse audience, providing value to individuals and professionals across various sectors. <br /> Explore the different user profiles below to understand how our platform can be beneficial for different types of individuals</h3>
                </div>
                <section className="flex items-center pb-10 font-poppins pt-4">
                    <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8" data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom">
                                <div className="flex gap-6 md:gap-0 flex-wrap" >
                                    <div className="w-full px-4 md:w-1/2">

                                        <img src={developer} alt=""
                                            className="object-cover w-full mb-6 rounded-lg h-80" />
                                        <img src={banker} alt=""
                                            className="object-cover w-full rounded-lg h-80" />
                                    </div>
                                    <div className="w-full px-4 md:w-1/2 xl:mt-11">
                                        <img src={corporate} alt=""
                                            className="object-cover w-full mb-6 rounded-lg h-80" />
                                        <img src={student} alt=""
                                            className="object-cover w-full rounded-lg h-80" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8" data-aos="zoom-in-down" data-aos-anchor-placement="top-bottom">
                                <span className="text-[#5a55ca] font-bold text-2xl">Peoples who gets benefitted</span>
                                <h2 className="mt-2 mb-4 text-[#363636] font-medium text-lg">
                                    With years of experience in the industry, our team of seasoned professionals possesses the knowledge and expertise to turn your ideas into reality.
                                </h2>




                                <ul className="mb-10">
                                    <li className="flex items-center mb-4 text-base text-[#363636]">
                                        <span className="mr-3 text-[#5a55ca]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Developers and Tech Enthusiasts: </span> Streamline project workflows, enhance collaboration, and optimize coding processes.</span>
                                    </li>

                                    <li className="flex items-center mb-4 text-base text-[#363636]">
                                        <span className="mr-3 text-[#5a55ca]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Corporate Professionals:</span> Improve team efficiency, track project progress, and ensure seamless communication within the organization.</span>
                                    </li>

                                    <li className="flex items-center mb-4 text-base text-[#363636]">
                                        <span className="mr-3 text-[#5a55ca]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Bankers and Financial Experts:</span> Organize financial tasks, track deadlines, and enhance team coordination for efficient financial management.</span>
                                    </li>


                                    <li className="flex items-center mb-4 text-base text-[#363636]">
                                        <span className="mr-3 text-[#5a55ca]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                                <path fill-rule=""
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                            </svg>
                                        </span>
                                        <span><span className='font-bold'>Students and Researchers: </span>Manage academic projects, collaborate with peers, and stay organized to boost productivity and research outcomes.</span>
                                    </li>

                                    <h2 className="mt-2 mb-4 text-[#363636] font-medium text-lg">
                                        Our platform is designed to empower individuals across diverse domains, fostering a dynamic ecosystem for learning, collaboration, and professional growth. Explore the possibilities and unlock your full potential with our platform.
                                    </h2>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PeopleUsing;