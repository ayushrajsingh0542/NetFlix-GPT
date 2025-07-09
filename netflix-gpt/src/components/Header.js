import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate,useLocation,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const location = useLocation();
  const { movieTrailer } = useParams();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  useEffect(() => {
    //we want this only once so use effect
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (location.pathname === "/") 
        navigate("/browse"); //since header is everywhere and also in router provider so navigate will work here and also the best place for auth..hygiene practise

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //when header component unloads,we want to unsubscribe to onauthstatechange..unsubscribe is provided by firebase only and it is onauthstate fn itself
  }, []);

  function handleGptSearchClick() {
    dispatch(toggleGptSearchView());
    navigate("/browse")
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex md:flex-row flex-col justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {location.pathname===`/browse/${movieTrailer}` && (showGptSearch===false) && <button className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-xl" onClick={()=>navigate("/browse")}><i class="fa-solid fa-house-user"></i>&nbsp; Home</button>}
          <button
            className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-xl" id="toggler"
            onClick={handleGptSearchClick}>
            {showGptSearch ? (
             <> <i class="fa-solid fa-house-user"></i>&nbsp; Home</>
            ) : (
              <>
                <i className="fa-solid fa-magnifying-glass"></i>&nbsp;GPT Search
              </>
            )}
          </button>

          <img  src={user?.photoURL} alt="user-logo" className="w-12 h-12 hidden md:block " />
          <button className="font-bold text-white" onClick={handleSignOut}>
            &nbsp;&nbsp;Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
