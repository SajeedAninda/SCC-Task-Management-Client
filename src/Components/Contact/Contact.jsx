import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    let handleSubmit = (e) => {
        e.preventDefault();
        let emailInput = e.target.email;
        let email = emailInput.value;
        if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: 'Thank you for Sending Us a Message',
            });
        }
    }

    return (
        <div className='w-[90%] mx-auto '>
            <h3 className='text-4xl text-[#363636] font-bold text-center pt-8'>
                If you have any further question, Please send us a message
            </h3>
            <div className="h-fit my-8 p-8 rounded-md border-2 border-[#5a55ca] flex-1">

                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row w-full gap-6'>
                        <div className='w-full'>
                            <label className='text-2xl text-[#151515] font-bold' htmlFor="name">Name</label> <br />
                            <input className='py-3 px-3 mt-2 w-full border-2 border-[#5a55ca] rounded-md' name='name' type="text" placeholder='Please Enter Your Name' />
                        </div>
                        <div className='w-full'>
                            <label className='text-2xl text-[#151515] font-bold' htmlFor="email">Email</label> <br />
                            <input className='py-3 px-3 mt-2 w-full border-2 border-[#5a55ca] rounded-md' name='email' type="email" placeholder='Please Enter Your Email' />
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <label className='text-2xl text-[#151515] font-bold' htmlFor="subject">Subject</label> <br />
                        <input className='py-3 px-3 mt-2 w-full border-2 border-[#5a55ca] rounded-md' name='subject' type="text" placeholder='Please Enter Your Subject' />
                    </div>

                    <div className='w-full mt-4'>
                        <label className='text-2xl text-[#151515] font-bold' htmlFor="message">Message</label> <br />
                        <textarea rows="5" className='py-3 px-3 mt-2 w-full border-2 border-[#5a55ca] rounded-md' name='message' type="text" placeholder='Please Enter The Message That Your Want To Send' />
                    </div>

                    <button type='submit' className='px-6 w-full text-white text-lg py-3 font-bold mt-4 rounded-md bg-[#5a55ca] hover:bg-[#5b55cabe]'>Send Your Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;