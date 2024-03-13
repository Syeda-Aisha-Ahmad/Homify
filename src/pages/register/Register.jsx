import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);


const Register = () => {
    const provider = new GoogleAuthProvider();

    const googleHandler = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                // setUser(user);
                console.log(user);
            })

            .catch(error => {
                console.error(error);
            })
    }



    const signInHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email, pass);

        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">

            <div className="h-screen bg-gradient-to-br to-[#c2cfb3] from-[#f4faed]  flex flex-col justify-center items-center w-full">

                <div className='bg-white rounded px-8 pt-6 pb-8 mb-4 '>
                    <form onSubmit={signInHandler} className="">
                        <h1 className="text-center text-4xl font-serif font-semibold text-[#182b02] mb-7">Sign up</h1>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">

                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                />
                            </div>
                            <div className="md:ml-2">
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <div className="mb-2">
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                        </div>
                        <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />
                                {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
                            </div>
                            <div className="md:ml-2">
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-600 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="c_password"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>
                        <div className="mb-6 text-center">

                            <button className='css-button-retro--black w-full'>Register Account</button>
                        </div>

                        <div className='flex items-center gap-4 mt-2'>
                            <div className='border-b border-neutral-400 w-full mt-1'></div>
                            <div className='text-neutral-500'>or</div>
                            <div className='border-b border-neutral-400 w-full mt-1'></div>
                        </div>


                    </form>

                    <button onClick={googleHandler} className='css-button-retro--black w-full my-5 flex items-center justify-center gap-3'><FcGoogle className='text-lg' /> Login with Google</button>

                    <div className="text-center">
                        {/* <a className="inline-block text-sm text-neutral-500 dark:text-neutral-500 align-baseline hover:text-blue-800"
                            href="./index.html">
                            Already have an account? <span className='text-[#182b02] font-semibold border-b border-[#182b02]'>Login!</span>
                        </a> */}

                        <span className="ml-2 text-sm text-neutral-500 font-semibold">Already have an account?<Link to={"/login"} className="text-xs ml-2 text-[#182b02] font-semibold border-b border-[#182b02]">Login</Link>
                        </span>
                    </div>
                </div>
                <div className="text-center">
                </div>

                <div className="pt-2 mr-[430px] text-base font-semibold float-left leading-7">
                    <p className="font-sans text-[#182b02] float-left bg-red-600 text-md hover:text-[#203606]">
                        <a href="/" className="absolute">&larr; Home</a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Register;