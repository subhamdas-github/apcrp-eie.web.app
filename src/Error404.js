import React from 'react'
import fire from './config/fire';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
function Error404() {
    return (
        <div>
            <h1>Admin web app is under maintenance ! Sorry for the inconvenience..</h1>
            <Button variant="outline-danger" onClick={()=>{fire.auth().signOut();
      // document.getElementById('btngroup').style.display='block';
      // document.getElementById('teachersdescrp').style.display='block';
      document.getElementById('front').style.display='block';
      document.getElementById('frontheading').style.display='block';
      document.getElementById('frontfooter').style.display='block';}}>Logout</Button>
        </div>
    )
}

export default Error404
