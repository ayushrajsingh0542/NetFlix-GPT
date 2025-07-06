import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef("Ayush");
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignIn() {
    setIsSignInForm(!isSignInForm);
  }

  function handleBtn() {
    //validate the form data
    const message = checkValidData(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );
    console.log(message);
    setErrMsg(message);
    if (message)
      //ie wrong user
      return;
    //ie user is okay so create

    //signup
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/105589428?s=400&u=ab4de09d97c176da5f6c249b4f7ef76513907bd8&v=4",
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName,photoURL}=auth?.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,}));
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error.message);
              // ...
            });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
          // ..
        });
    } //sign in
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />

        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />

        <p className="text-red-500 font-bold text-lg p-2">{errMsg}</p>

        <button
          onClick={handleBtn}
          className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 cursor-pointer text-red-500 font-bold text-lg"
          onClick={toggleSignIn}>
          {isSignInForm
            ? "New to NetFlixGPT? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
