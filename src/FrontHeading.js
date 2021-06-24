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
import y from './images/y.png'
import x from './images/x.png'
import z from './images/z.png'
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
import Paper from '@material-ui/core/Paper';
import n from './images/normallogo.jpg'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ExploreIcon from '@material-ui/icons/Explore';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FeedbackIcon from '@material-ui/icons/Feedback';
import BugReportIcon from '@material-ui/icons/BugReport';
import PolicyIcon from '@material-ui/icons/Policy';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LandscapeIcon from '@material-ui/icons/Landscape';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MoreIcon from '@material-ui/icons/More';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import LockIcon from '@material-ui/icons/Lock';
function FrontHeading() {



    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    function academic(){
        return  <span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><MenuBookIcon fontSize="small"/></sup></span> Academic</span>
    }
    function event(){
        return  <span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><ExploreIcon fontSize="small"/></sup></span> Events</span>
    }
    function more(){
        return  <span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><MoreIcon fontSize="small"/></sup></span> More</span>
    }
    return (
        <div>
           
            <div id='frontheading' style={{display:'block'}} className={containerStyle.grad}>
            <div className={sty.controlpanelfont} style={{padding:20}}>
            <br/><br/>
  
                <Paper elevation={9}  >
                {/* <Container fluid='xl'> */}
                {/* <Container fluid='xl' > */}
                <Alert variant='info' style={{padding:15}}>
                <Row xs={1} md={3} style={{textAlign:'center'}}>
                    <Col md={2}>
                    <img src={z} width={135}/>
                    </Col>
                    <Col md={6}>
                        {/* <h4 style={{fontSize:28,color:'#002b80'}}>Electronics and Instrumentation Engineering</h4> */}
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                    <div><span><sup><BubbleChartIcon /></sup></span><span style={{fontSize:28,color:'#002b80'}}>Electronics and Instrumentation Engineering</span></div>
                        <p></p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                    <div><span><sup><AccountBalanceIcon fontSize="small"/></sup></span><span style={{fontSize:25,color:'#800000'}}> Acharya Prafulla Chandra Ray Polytechnic</span></div>
                        <p></p>
                    </div>

                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                    <div><span><sup><LocationOnIcon fontSize="small"/></sup></span><span style={{fontSize:20,color:'#003300'}}>Address: P.0.-Jadavpur University, Kolkata-700032</span></div>
                        <p></p>
                    </div>
                    
                    {/* <span style={{fontSize:20,color:'#003300'}}><LocationOnIcon/>Address: P.0.-Jadavpur University, Kolkata-700032</span> */}
                    </Col>
                    <Col >
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                        <div><span><sup><EmailIcon fontSize="small"/></sup></span><a href="mailto:apcraypolytechnic@gmail.com" target='_blank' ><span style={{fontSize:18}}> apcraypolytechnic@gmail.com</span></a></div>
                        <p></p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                        <div><span><sup><EmailIcon fontSize="small"/></sup></span><a href='mailto:officeapcray@gmail.com' target='_blank' ><span style={{fontSize:18}}> officeapcray@gmail.com</span></a></div>
                        <p></p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                        <div><span><sup><PhoneIcon fontSize="small"/></sup></span><a href='tel:03324146241' ><span style={{fontSize:18}}>(033) 2414 6241</span></a>/Fax no. 24146164</div>
                        <p></p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                        <div>Visit Our<span><sup><FacebookIcon fontSize="small"/></sup></span><a href='https://www.facebook.com/groups/192098204773124' target='_blank' ><span style={{fontSize:18}}>facebook group</span></a>/
                        <span><sup><FacebookIcon fontSize="small"/></sup></span><a  href='https://www.facebook.com/A-P-C-Roy-Polytechnic-DEIE-102763967751067/' target='_blank' ><span style={{fontSize:18}}>facebook page</span></a>
                        </div>
                        <p></p>
                    </div>
                    {/* <EmailIcon/><a href="mailto:apcraypolytechnic@gmail.com" target='_blank'>apcraypolytechnic@gmail.com</a><br/> */}
                    {/* <EmailIcon/><a href='mailto:officeapcray@gmail.com' target='_blank'>officeapcray@gmail.com</a><br/> */}
                    {/* <PhoneIcon/><a href='tel:03324146241'>(033) 2414 6241</a>/Fax no. 24146164 */}
                    {/* <br/> */}
{/* <span style={{fontSize:19}}>visit our <a href='https://www.facebook.com/groups/192098204773124' target='_blank'><span style={{fontSize:20}}><FacebookIcon/></span> facebook</a> group/<a href='https://www.facebook.com/A-P-C-Roy-Polytechnic-DEIE-102763967751067/' target='_blank'><span style={{fontSize:20}}><FacebookIcon/></span> facebook</a> page</span> */}
                    </Col>
                </Row>

         
                
                {/* </Container> */}
                {/* </Container> */}
                </Alert>
                </Paper>
            </div>
                <Container fluid='xl' className={sty.controlpanelfont} >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="/"><span style={{fontSize:25}} className={containerStyle.ach}><b>apcrp-eie.web.app</b></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                
                
                
                    <Nav className="mr-auto">
                    <Nav.Link href="/" ><span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><HomeIcon fontSize="small"/></sup></span>Home </span></Nav.Link>
                    <Nav.Link href="/preface" ><span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><LabelImportantIcon fontSize="small"/></sup></span>Preface</span></Nav.Link>
                    <Nav.Link href="/#about-eie" ><span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><InfoIcon fontSize="small"/></sup></span>About</span></Nav.Link>
                    
                    <NavDropdown title={academic()} id="collasible-nav-dropdown">
                        <NavDropdown.Item className={navstyle.navdropdown} href="/students" ><sup><GroupIcon /></sup>Our Students</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} href="/teachers" ><sup><SupervisedUserCircleIcon /></sup>Our Teachers</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link onClick={()=>{setModalShowGallery(true)}}><span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><LandscapeIcon fontSize="small"/></sup></span> Gallery</span></Nav.Link>
                    
                    <NavDropdown title={event()} id="collasible-nav-dropdown" >
                        <NavDropdown.Item className={navstyle.navdropdown} id='aboutevent' href="/#about-events" ><sup><InfoIcon /></sup>About</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} id='videoevent' href="/#video-events"><sup><YouTubeIcon /></sup>Videos</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} id='noticeevent' href="/#notice-events" ><sup><EventNoteIcon /></sup>Notice</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} id='magazineevent' href="/#mazagize-events" ><sup><PictureAsPdfIcon /></sup>Our Magazines</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link onClick={() => {setModalShowRecrt(true);}}><span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><BusinessCenterIcon fontSize="small"/></sup></span> Our Recruiters</span></Nav.Link>
                    <Nav.Link href="/feedback" ><span className={navstyle.navi}><span style={{color:'#D1ECF1'}}><sup><FeedbackIcon fontSize="small"/></sup></span> Feedback</span></Nav.Link>
                    
                    
                    <NavDropdown title={more()} id="collasible-nav-dropdown">
                        <NavDropdown.Item className={navstyle.navdropdown} href="/login" ><sup><LockIcon/></sup>Admin Login</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} href="/signup" ><sup><PersonPinIcon /></sup>Admin Signup</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} href="mailto:dsubham776@gmail.com" target='_blank'><sup><BugReportIcon /></sup>Bug Report</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} href="/" ><sup><ContactMailIcon /></sup> Admin Contact</NavDropdown.Item>
                        <NavDropdown.Item className={navstyle.navdropdown} href="/about/privacy_policy" ><sup><PolicyIcon /></sup>Privacy Policy</NavDropdown.Item>

                    </NavDropdown>
                    </Nav>
                    
                

                </Navbar.Collapse>
                </Navbar>
                </Container>

            </div>
            
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
