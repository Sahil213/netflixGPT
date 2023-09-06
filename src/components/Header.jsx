import React from "react";

import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, PHOTO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: { PHOTO_URL },
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // This will be called when component unmounts
    return () => unsubscribe();
  }, []);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img src={user?.photoUrl} alt="logo" className="w-12 h-12" />
          <button className="font-bold text-white" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
