'use client'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    axios.defaults.withCredentials = true;
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const loginAccount = async (e:any) => {
        e.preventDefault();
        try {
         
            const response = await axios.post('http://localhost:8080/api/login');
            if (response.data === "Success") {
                toast.success('Login Successfully!', {
                    theme: "colored",
                });
            } else if (response.data === "Your account is not yet verified by the Developer!") {
                toast.info('Your account is not yet verified by the Developer!, Please contact the developer to verify your account!', {
                    theme: "colored",
                });
                alert(2)
            } else {
                toast.error("Email or Password doesn't match!", {
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login. Please try again later.', {
                theme: "colored",
            });
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-slate-200'>
            <div className="w-[350px] h-fit rounded-md shadow-md text-black bg-white flex flex-col gap-10 p-5 ">
                <div className="flex justify-center items-center flex-col gap-1">
                    <BiLogIn className='text-[34px] text-gray-600'/>
                    <span className="text-2xl font-bold text-[#d6543a]">LOGIN</span>
                </div>
                <form action="" onSubmit={ loginAccount }>
                    <div className="flex flex-col gap-14 h-full">
                        <div className="w-full flex flex-col gap-2">
                            <input type="text" className='w-full p-2 shadow-lg border text-center' onChange={ e => setValues({ ...values, email: e.target.value })} placeholder='Enter Email' required/>
                            <input type="password" className='w-full p-2 shadow-lg border text-center' onChange={ e => setValues({ ...values, password: e.target.value })} placeholder='Enter Password' required/>
                            <Link href={'/forgotpassword'}>
                                <div className="text-end">
                                    <span className='text-sm italic'>Forgot Password</span>
                                </div>
                            </Link>
                            
                        </div>
                        <div className="flex flex-col justify-between gap-4 h-full">
                            <button className='bg-green-700 hover:bg-green-500 w-full rounded-md p-2 text-white'>Login</button>
                            <Link href={'/register'} className='flex items-center justify-center'>
                                <button className='text-sm'>Create Account</button>
                            </Link>
                            <Link href='/'>
                                <span className='text-sm '>Home</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;
