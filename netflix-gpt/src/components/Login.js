import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL } from "../utils/constants";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
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
            photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName,photoURL}=auth?.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL,}));
              
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
          src={BG_IMG_URL}
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
