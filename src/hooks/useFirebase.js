import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('');

     const auth = getAuth();



     //create user
     const registerUser = (email, password, location, navigate) => {
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
               .then((res) => {

                    navigate('/appointment');
                    setAuthError('');
               })
               .catch((error) => {
                    setAuthError(error.message)
               })
               .finally(() => setIsLoading(false));
     }

     //login user
     const loginUser = (email, password, location, navigate) => {
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
               .then((res) => {
                    const destination = location?.state?.from || '/';
                    navigate(destination);
                    setAuthError('')
               })
               .catch((error) => {
                    setAuthError(error.message)
               })
               .finally(() => setIsLoading(false));
     }

     //log out user
     const logOut = () => {
          setIsLoading(true)
          signOut(auth)
               .then(() => {
                    setUser({})
               })
               .catch((error) => {
                    //if an error happened.
               })
               .finally(() => setIsLoading(false))
     }

     //an observer for user state changes
     useEffect(() => {
          const unSubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user)
               }
               else {
                    setUser({})
               }
               setIsLoading(false)
          });
          return () => unSubscribed
     }, [])


     return {
          user,
          registerUser,
          loginUser,
          logOut,
          isLoading,
          authError
     }

}

export default useFirebase;