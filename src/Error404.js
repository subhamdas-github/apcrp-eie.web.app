import React from 'react'
import fire from './config/fire';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
function Error404() {
    return (
        <div>
            <h2>Admin Panel is under maintenance ! It will be right back soon..</h2>
            <Button variant="outline-danger" href="/" onClick={()=>{fire.auth().signOut();}}
      // document.getElementById('btngroup').style.display='block';
      // document.getElementById('teachersdescrp').style.display='block';
    //   document.getElementById('front').style.display='block';
    //   document.getElementById('frontheading').style.display='block';
    //   document.getElementById('frontfooter').style.display='block';}}
      >
          Logout</Button>
        </div>
    )
}

export default Error404
