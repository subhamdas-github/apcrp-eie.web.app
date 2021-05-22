import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {FcHome,FcFeedback,FcAbout,FcQuestions,FcReading,FcBusinesswoman,FcPhotoReel,FcStackOfPhotos,FcConferenceCall} from 'react-icons/fc';
import fire from './config/fire';
function AdminNavigation() {
    return (
        <div>
         <Container fluid='xl'>   
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
    <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
    
    <Nav className="mr-auto">
      <Nav.Link id="home" href="#home"><FcHome/> Home</Nav.Link>
      <Nav.Link id="about" href="#About"><FcAbout/> About</Nav.Link>
      <Nav.Link id='students' href="#student"><FcReading/> Students</Nav.Link>
      <Nav.Link id='teachers' href="#teacher"><FcBusinesswoman/> Teachers</Nav.Link>
      <Nav.Link id='slideshows' href="#slideshow"><FcPhotoReel/> Slideshow</Nav.Link>
      <Nav.Link id='gallerycontrol' href="#gallery"><FcStackOfPhotos/> Gallery</Nav.Link>
      <Nav.Link id='recruiterscontrol' href="#recruiters"><FcConferenceCall/> Recruiters</Nav.Link>
      <Nav.Link id='noticecontrol' href="#notice">📋Notice</Nav.Link>
      <Nav.Link id='videocontrol' href="#video">Video</Nav.Link>
      <Nav.Link id='helplink' href="mailto:dsubham776050@gmail.com?subject=Help regarding...&body=Hi, my name is..." target='_blank'><FcQuestions/> Help</Nav.Link>
      {/* <Nav.Link id='feedbacklink' href="mailto:dsubham776050@gmail.com" target='_blank'><FcFeedback/> Feedback</Nav.Link> */}
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button> */}
      <p>.</p>
      <Button variant="outline-danger" onClick={()=>{fire.auth().signOut();
      // document.getElementById('btngroup').style.display='block';
      // document.getElementById('teachersdescrp').style.display='block';
      document.getElementById('front').style.display='block';
      document.getElementById('frontheading').style.display='block';
      document.getElementById('frontfooter').style.display='block';}}>Logout</Button>
    </Form>
    
    
    </Navbar.Collapse>
    
  </Navbar>
  {/* <br />
  <Navbar bg="primary" variant="dark" fixed='bottom'>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar> */}

  <br />
  {/* <Navbar bg="light" variant="light" fixed='bottom'>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar> */}
</Container>
        </div>
    )
}

export default AdminNavigation
