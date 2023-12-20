import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    // let navigate = useNavigate();
    // let { register, logOut } = useContext(AuthContext);
    let handleRegister = (e) => {
        // e.preventDefault();
        // let email = e.target.email.value;
        // let password = e.target.password.value;
        // let name = e.target.fullName.value;
        // let img = e.target.imgUrl.value;


        // if (password.length < 6) {
        //     return Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Password Length should be at least 6 Characters!'
        //     })
        // }

        // if (!/[A-Z]/.test(password)) {
        //     return Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Password should contain at least one capital letter!'
        //     })
        // }
        // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        //     return Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Password should contain at least one special character!'
        //     })
        // }
        // register(email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         updateProfile(auth.currentUser, {
        //             displayName: name, photoURL: img
        //         }).then(() => {
        //             logOut()
        //                 .then(() => {
        //                     console.log("Log Out Succesfull");
        //                 }).catch((error) => {
        //                     console.log(error);
        //                 });
        //             Swal.fire(
        //                 'Registration Successful!',
        //                 'Please Login Now with Email & Password',
        //                 'success'
        //             )
        //         }).catch((error) => {
        //             console.log(error);
        //         });
        //         navigate('/login');
        //         console.log(user);
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         console.log(errorCode);
        //         if (errorCode === "auth/email-already-in-use") {
        //             return Swal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: 'Email Already in Use!'
        //             })
        //         }
        //     });
    }

    return (
        <div>
            <div className="p-8 lg:w-1/2 mx-auto">
                <div className="bg-gray-100 rounded-b-lg py-24 px-4 lg:px-24">
                    <p className="text-center text-sm text-gray-500 font-light">
                        <p className='text-[#363636] font-medium'>Please Register with your info</p>
                        <p className='font-semibold text-xl text-[#363636]'>Already have an account? <Link to={"/login"}><span className='text-[#5a55ca] font-bold hover:underline cursor-pointer'>Login</span></Link></p>
                    </p>
                    <form onSubmit={handleRegister}>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Full Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            type="text"
                                            required
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="John Smith"
                                            name="fullName"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Image Link</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            type="text"
                                            required
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="img.jpg"
                                            name="imgUrl"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label for="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                        <input
                                            type="email"
                                            required
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="johnsmith@example.com"
                                            name="email"
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-6">
                                    <label for="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************"
                                            name="password"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-full px-3">
                                    <p className='text-red-600'></p>
                                    <button className="block w-full max-w-xs mx-auto bg-[#5a55ca] hover:bg-white border-2 border-[#5a55ca] text-white hover:text-[#5a55ca] hover:border-2 hover:border-[#5a55ca] font-bold rounded-lg px-3 py-3">REGISTER NOW</button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </div >
    );
};

export default Register;