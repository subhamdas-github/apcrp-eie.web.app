import React,{useEffect,useState} from 'react'
import sty from './css/adminFormImg.module.css';
import { Container,ResponsiveEmbed,Image,Spinner, Navbar,NavDropdown,Nav,Button,Tabs,Tab,Modal,Card,ListGroup,Alert,Form, CardDeck,Row,Col, CardColumns,ButtonGroup,ToggleButton,ToggleButtonGroup,Badge, ProgressBar } from 'react-bootstrap'
import Login from './Login';
import App from './App';
import fire from './config/fire'
import { AlignCenter, Justify } from 'react-bootstrap-icons';
import containerStyle from './AdminContainer.module.css'
import { grey } from '@material-ui/core/colors';
import {FcAbout,FcGallery,FcRules,FcFeedback,FcAdvertising,FcSportsMode,FcOrganization,FcVoicePresentation,FcGraduationCap,FcBriefcase,FcNews,FcBullish,FcLibrary,FcReadingEbook,FcDisplay,FcCircuit,FcConferenceCall, FcHighPriority, FcPlus,FcCollapse,FcExpand,FcSearch,FcAddressBook,FcPhone,FcEngineering,FcElectronics,FcIphone,FcHome,FcElectroDevices,FcDepartment} from 'react-icons/fc';
import {FaFacebook,FaWhatsapp,FaGithub,FaHackerrank,FaLinkedinIn,FaSignInAlt,FaRobot,FaYoutube} from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io'
import {IoHome} from 'react-icons/io5'
import {MdEmail,MdPhoneInTalk,MdEventNote,MdLocationOn} from 'react-icons/md';
import {SiFacebook} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Gallery from './Gallery';
import eielogo from './images/logoeie.png';
import alok from './images/alok.jpg'
import ScrollUpButton from "react-scroll-up-button";
import Googlemaps from './Googlemaps';
import Recruiters from './Recruiters';
import Progressbar from './Progressbar';
import { IconContext } from "react-icons";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Footer from './Footer';
import ClipLoader from "react-spinners";
import Preface from './Preface';
import Notice from './Notice';
import navstyle from './css/FrontNavStyle.module.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function FrontHeading() {
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    function academic(){
        return  <span className={navstyle.navi}><span style={{color:'white'}}>📚</span>Academic</span>
    }
    function event(){
        return  <span className={navstyle.navi}><span style={{color:'white'}}>📢</span>Events</span>
    }
    function more(){
        return  <span className={navstyle.navi}><span style={{color:'white'}}></span>More</span>
    }
    return (
        <div>
            <div id='frontheading' style={{display:'block'}} >
            <div className={sty.controlpanelfont}>
            
  

                <Container fluid='xl'>
                <Container fluid='xl' className={containerStyle.containerfront}>
                {/* <Alert variant="success"> */}
                <Row xs={1} md={3} style={{textAlign:'center'}}>
                    <Col md={2}>
                    {/* <img src='https://firebasestorage.googleapis.com/v0/b/collect-db.appspot.com/o/website-images%2F1619426245557.png?alt=media&token=5583d30c-589d-4141-ac30-37ce01b1ead1' width={100}/> */}
                    <img src={eielogo} width={120}/>
                    </Col>
                    <Col md={6}><h4 style={{color:'#00008B',fontSize:27}}>⚡Electronics and Instrumentation Engineering</h4><h5 style={{color:'#800000',fontSize:23}}>🏫Acharya Prafulla Chandra Ray Polytechnic</h5>
                    <span style={{fontSize:18}}>🚏Address: P.0.-Jadavpur University, Kolkata-700032</span>
                    </Col>
                    <Col >
                    📮<a href="mailto:apcraypolytechnic@gmail.com" target='_blank'>apcraypolytechnic@gmail.com</a><br/>📮<a href='mailto:officeapcray@gmail.com' target='_blank'>officeapcray@gmail.com</a><br/>☎️<a href='tel:03324146241'>(033) 2414 6241</a>/Fax no. 24146164
                    <br/>
<span style={{fontSize:18}}>visit our <a href='https://www.facebook.com/groups/192098204773124' target='_blank'><span style={{fontSize:20}}><sup><SiFacebook/></sup></span> facebook</a> group</span>
                    </Col>
                </Row>

                {/* </Alert> */}
                
                </Container>
                </Container>
                
            </div>
                <Container fluid='xl' className={sty.controlpanelfont}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                {/* <Navbar.Brand href="#home" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('frontimage').style.display='block';}}> Electronics</Navbar.Brand> */}
                
                
                    <Nav className="mr-auto">
                    <Nav.Link href="/" ><span className={navstyle.navi}><span style={{color:'white'}}>🏠</span>Home </span></Nav.Link>
                    <Nav.Link href="/preface" ><span className={navstyle.navi}><span style={{color:'white'}}>💖</span>Preface</span></Nav.Link>
                    <Nav.Link href="/#about-eie" ><span className={navstyle.navi}><span style={{color:'white'}}>📜</span>About</span></Nav.Link>
                    
                    <NavDropdown title={academic()} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/students" >🎓Our Students</NavDropdown.Item>
                        <NavDropdown.Item href="/teachers" >👩‍🏫Our Teachers</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link onClick={()=>{setModalShowGallery(true)}}><span className={navstyle.navi}><span style={{color:'white'}}>🌄</span>Gallery</span></Nav.Link>
                    {/* <Nav.Link href="/#events-eie" ><span className={navstyle.navi}><span style={{color:'white'}}>📢</span>Events</span></Nav.Link> */}
                    <NavDropdown title={event()} id="collasible-nav-dropdown">
                        <NavDropdown.Item id='aboutevent' href="/#about-events" >About</NavDropdown.Item>
                        <NavDropdown.Item id='videoevent' href="/#video-events">Videos</NavDropdown.Item>
                        <NavDropdown.Item id='noticeevent' href="/#notice-events" >Notice</NavDropdown.Item>
                        <NavDropdown.Item id='magazineevent' href="/#mazagize-events" >Our Magazines</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="mailto:alokmondal70@gmail.com" target='_blank'><span className={navstyle.navi}><span style={{color:'white'}}>📧</span>Feedback</span></Nav.Link> */}
                    <Nav.Link onClick={() => {setModalShowRecrt(true);}}><span className={navstyle.navi}><span style={{color:'white'}}>💼</span>Our Recruiters</span></Nav.Link>
                    <Nav.Link href="/login" ><span className={navstyle.navi}><span style={{color:'whitesmoke'}}>🔑</span>Admin Login</span></Nav.Link>
                    {/* <Nav.Link href="#collegecontact" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='block';document.getElementById('preface').style.display='none';}}><FcVoicePresentation/>Contact</Nav.Link> */}
                    {/* <Nav.Link href="#developercontact" onClick={()=>{<PDFReader url="127.31.32.1:3000/test.pdf"/>}}><AiFillGithub/>Developer Contact</Nav.Link>                 */}
                    <NavDropdown title={more()} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/feedback" >📩Feedback</NavDropdown.Item>
                        <NavDropdown.Item href="mailto:dsubham776@gmail.com" target='_blank'>🐞Bug Report</NavDropdown.Item>
                        <NavDropdown.Item href="/" >Admin Contact</NavDropdown.Item>
                        <NavDropdown.Item href="/about/privacy_policy" >🔐Privacy Policy</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/#events-eied" >Developer Contact</NavDropdown.Item> */}
                    </NavDropdown>
                    </Nav>
                    
                

                </Navbar.Collapse>
                </Navbar>
                </Container>

            </div>
            {/* <Login
            show={modalShow}
            onHide={() => setModalShow(false)}
            /> */}
            <Gallery
            show={modalShowGallery}
            onHide={() => setModalShowGallery(false)}
            />
            <Recruiters
            show={modalShowRecrt}
            onHide={() => setModalShowRecrt(false)}
            />
        </div>
    )
}

export default FrontHeading
