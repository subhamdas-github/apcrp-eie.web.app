import React, { useContext } from 'react';
import {AuthContext}from './FirebaseAuthContext';
import {Route,Redirect} from 'react-router-dom';

function ProtectedRoute(props){
   
    const authValue=useContext(AuthContext)
    if (authValue.userDataPresent){
        if(authValue.user==null){
            return(<Redirect to={props.redirectTo}></Redirect>)
        }
        else{
            return(
            
            <Route exact path={props.path}>
                {props.children}

            </Route>)
        }
    }
    else{
        
        return null
    }
}
export default ProtectedRoute