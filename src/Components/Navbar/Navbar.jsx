import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Navbar = () => {
    let { signedInUser, logOut } = useContext(AuthContext);

    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Log Out Succesfull");
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-[#5a55ca]">
                {/* Navbar */}
                <div className="w-[90%] mx-auto navbar  text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 justify-center lg:justify-start ">
                        <Link>
                            <h2 className='text-2xl font-bold'>SCC Technovision</h2>
                        </Link>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal flex justify-between items-center gap-6">
                            {/* Navbar menu content here */}
                            <NavLink
                                to={"/"}
                                end
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to={"/aboutUs"}
                                end
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                                }
                            >
                                About Us
                            </NavLink>

                            <NavLink
                                to={"/knowMore"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                                }
                            >
                                Know More
                            </NavLink>

                            <NavLink
                                to={"Route-3"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                                }
                            >
                                Route-3
                            </NavLink>

                            {
                                signedInUser ?
                                    <button onClick={handleLogout} className="text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md cursor-pointer">
                                        Logout
                                    </button>
                                    :
                                    <NavLink
                                        to={"/login"}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                                        }
                                    >
                                        Login
                                    </NavLink>
                            }
                        </ul>
                    </div>
                </div>
            </div>



            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu menu-horizontal bg-[#5a55ca] text-white flex flex-col justify-normal lg:justify-between items-center gap-6 h-full px-8 pt-6">
                    {/* Navbar menu content here */}
                    <NavLink
                        to={"/"}
                        end
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/aboutUs"}
                        end
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                        }
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to={"knowMore"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                        }
                    >
                        Know More
                    </NavLink>

                    <NavLink
                        to={"Route-3"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                        }
                    >
                        Route-3
                    </NavLink>
                    {
                        signedInUser ?
                            <button onClick={handleLogout} className="text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md cursor-pointer">
                                Logout
                            </button>
                            :
                            <NavLink
                                to={"/login"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-[#fcf4e9] p-2  font-bold text-base md:text-lg text-[#fcf4e9] rounded-md hover:bg-white hover:text-[#5a55ca]" : "text-base md:text-lg p-2 text-[#fcf4e9] hover:bg-white hover:text-[#5a55ca] rounded-md"
                                }
                            >
                                Login
                            </NavLink>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;