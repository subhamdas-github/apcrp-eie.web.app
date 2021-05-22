import React,{useEffect,useState} from 'react'
import fire from './config/fire';

export const AuthContext = React.createContext();

export const AuthProvider=({children})=> {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        fire.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    return (
        <div>
            <AuthContext.Provider
            value={{
                currentUser
            }}
            >
                {children}
            </AuthContext.Provider>
        </div>
    )
}
