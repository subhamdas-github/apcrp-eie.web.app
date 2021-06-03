import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, FormControl, Button,NavDropdown} from 'react-bootstrap';
import {FcHome,FcFeedback,FcAbout,FcQuestions,FcReading,FcBusinesswoman,FcPhotoReel,FcStackOfPhotos,FcConferenceCall} from 'react-icons/fc';
import fire from './config/fire';
import containerStyle from './AdminContainer.module.css'

function AdminNavigation() {
  const [path ,setPath] = useState('#')

  const logout = ()=>{
    fire.auth().signOut()
    .then(function(){

    }).catch((e)=>{

    })
  }
    return (
        <div>
          <Container fluid='xl'>
         <Container fluid='xl' className={containerStyle.containerfront}>

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
    <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
    
    <Nav className="mr-auto">
      <Nav.Link id="home" href="#home"><FcHome/> Home</Nav.Link>
      <Nav.Link id="about" href="#About"><FcAbout/> About</Nav.Link>
      <Nav.Link id='students' href="#student"><FcReading/> Students</Nav.Link>
      <Nav.Link id='teachers' href="#teacher"><FcBusinesswoman/> Teachers</Nav.Link>
      <Nav.Link id="slideshows" href="#slideshow"><FcPhotoReel/> Slideshow</Nav.Link>
      <Nav.Link id='gallerycontrol' href="#gallery"><FcStackOfPhotos/> Gallery</Nav.Link>
      <Nav.Link id='recruiterscontrol' href="#recruiters"><FcConferenceCall/> Recruiters</Nav.Link>
      <Nav.Link id='noticecontrol' href="#notice">📋Notice</Nav.Link>
      <Nav.Link id='videocontrol' href="#video">🎦Video</Nav.Link>
      <Nav.Link id='helplink' href="mailto:dsubham776050@gmail.com?subject=Help regarding...&body=Hi, my name is..." target='_blank'><FcQuestions/> Help</Nav.Link>
      
    </Nav>
    <Form inline>
      
      <p>.</p>
      <Button variant="outline-danger" onClick={
        logout
          // fire.auth().signOut();  
          // setPath('/')
        
      
      }>Logout</Button>
    </Form>
    
    
    </Navbar.Collapse>
    
  </Navbar>
 
</Container>
</Container>

        </div>
    )
}

export default AdminNavigation
