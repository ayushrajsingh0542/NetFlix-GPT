import { useState } from "react";
import Header from "./Header";

function Login() {
   const [isSignInForm,setIsSignInForm]=useState(true);
    function toggleSignIn(){
       setIsSignInForm(!isSignInForm);
    }
    return ( 
        <div>
            <Header/>
            <div className="absolute">
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
            alt="bg-img" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>

                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />}
                

                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />

                <input type="password" placeholder="password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />

                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="py-4 cursor-pointer text-red-500 font-bold text-lg" onClick={toggleSignIn}>{isSignInForm?"New to NetFlixGPT? Sign Up Now":"Already registered? Sign In Now"}</p>

            </form>
        </div>
        
     );
}

export default Login;
