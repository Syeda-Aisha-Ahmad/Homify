import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);

const Login = () => {


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


    const loginUser = (e) => {

        e.preventdefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    // const signoutHandler = () => {
    //     signOut(auth)
    //         .then(() => {
    //             alert("Sign-out successful")
    //             setUser({});
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    // }



    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">

            <div className="h-screen bg-gradient-to-br to-[#c2cfb3] from-[#f4faed]  flex flex-col justify-center items-center w-full">

                <div className='bg-white px-10 py-8 w-screen shadow-xl max-w-sm'>
                    <form onSubmit={loginUser}>
                        <div className="">
                            <div className="space-y-4">
                                <h1 className="text-center text-4xl font-serif font-semibold text-[#182b02]">Login</h1>
                                <hr />
                                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                                    <input className="pl-2 outline-none border-none w-full" type="email" name="email" placeholder="Email" />

                                </div>
                                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                                    <input className="pl-2 outline-none border-none w-full" type="password" name="pass" id="" placeholder="Password" />

                                </div>
                            </div>


                            <button className='css-button-retro--black w-full mt-5'>Login</button>
                            <hr />

                            <div className='flex items-center gap-4 mt-2'>
                                <div className='border-b border-neutral-400 w-full mt-1'></div>
                                <div className='text-neutral-500'>or</div>
                                <div className='border-b border-neutral-400 w-full mt-1'></div>
                            </div>


                        </div>

                    </form>

                    <button onClick={googleHandler} className='css-button-retro--black w-full mt-4 flex items-center justify-center gap-3'><FcGoogle className='text-lg' /> Login with Google</button>

                    {/* <p className="inline-flex items-center mt-5 text-gray-700 font-medium text-xs text-center">
                            <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" className="mr-2" />
                            <span className="text-xs font-semibold">Remember me?</span>
                        </p> */}
                    <div className="flex justify-center items-center mt-4">
                        <p className="inline-flex items-center text-neutral-500 font-medium text-xs text-center">
                            <span className="ml-2">You don't have an account?<Link to={"/register"} className="text-xs ml-2 text-[#182b02] font-semibold border-b border-[#182b02]">Register now</Link>
                            </span>
                        </p>
                    </div>
                </div>
                <p className='bg-red-500 w-4/12 mt-8 font-semibold px-10 text-[#182b02] text-md hover:text-[#203606]'>
                    <Link to={"/"} className="absolute">&larr; Home</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;