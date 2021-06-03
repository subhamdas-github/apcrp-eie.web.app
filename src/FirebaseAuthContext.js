import React, {createContext,useState, useEffect} from 'react';
import fire from './config/fire';
// import {auth} from './firebase';
export const AuthContext= createContext({userPresent:false,user:null})
function FirebaseAuthContext(props){
    
   
    let [state,changeState] = useState({
        userDataPresent:false,
        
        user:null
        // listener:null
    })

    useEffect(()=>{
        
        // if(state.listener==null){
        console.log('listener')
       
        changeState({...state,listener:fire.auth().onAuthStateChanged((user)=>{
            console.log('auth')
           if(user){
            changeState(oldState=>({...oldState,userDataPresent:true,user:user}));console.log('success')}
            else{
            changeState(oldState=>({...oldState,userDataPresent:true,user:null}));}
        })});
        
    // }
    // return ()=>{
    //   if(state.listener){
    //     state.listener()}
    // }
    
    },[])
  
  
  
    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}
// export const AuthContext
export default FirebaseAuthContext
