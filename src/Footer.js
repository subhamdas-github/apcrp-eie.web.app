import React,{useState} from 'react'
import { Col, Container, Row,Nav } from 'react-bootstrap'
import {FaFacebook, FaLinkedinIn,FaWhatsapp,FaGithub,FaHackerrank,FaInstagramSquare} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {SiFacebook} from 'react-icons/si'
import {MdEmail} from 'react-icons/md';
// import containerStyle from './AdminContainer.module.css'
// import alok from './images/alok.jpg'
import subham from './images/subham.jpg'

import sty from './css/adminFormImg.module.css';
// import { Container,ResponsiveEmbed,Image,Spinner, Navbar,NavDropdown,Nav,Button,Tabs,Tab,Modal,Card,ListGroup,Alert,Form, CardDeck,Row,Col, CardColumns,ButtonGroup,ToggleButton,ToggleButtonGroup,Badge, ProgressBar } from 'react-bootstrap'
import Login from './Login';
import App from './App';
import fire from './config/fire'
import { AlignCenter, Justify } from 'react-bootstrap-icons';
import containerStyle from './AdminContainer.module.css'
import { grey } from '@material-ui/core/colors';
import {FcAbout,FcGallery,FcRules,FcFeedback,FcAdvertising,FcSportsMode,FcOrganization,FcVoicePresentation,FcGraduationCap,FcBriefcase,FcNews,FcBullish,FcLibrary,FcReadingEbook,FcDisplay,FcCircuit,FcConferenceCall, FcHighPriority, FcPlus,FcCollapse,FcExpand,FcSearch,FcAddressBook,FcPhone,FcEngineering,FcElectronics,FcIphone,FcHome,FcElectroDevices,FcDepartment} from 'react-icons/fc';
// import {FaFacebook,FaWhatsapp,FaGithub,FaHackerrank,FaLinkedinIn,FaSignInAlt,FaRobot,FaYoutube} from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io'
import {IoHome} from 'react-icons/io5'
// import {MdEmail,MdPhoneInTalk,MdEventNote,MdLocationOn} from 'react-icons/md';
// import {SiFacebook} from 'react-icons/si'
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

import ClipLoader from "react-spinners";
import Preface from './Preface';
import Notice from './Notice';
import navstyle from './css/FrontNavStyle.module.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Footer() {
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    function getdate (){
        return new Date().getFullYear();
    }
    return (
        <div>
            <ScrollUpButton />
            <Progressbar />
<div style={{display:'block'}} className={sty.controlpanelfont}>
                {/* <Footer/> */}
                <div >
                <br/><br/>
            <Container fluid='xl'>
            <Container fluid='xl' className={containerStyle.containerfront} style={{backgroundColor:'black',color:'whitesmoke',maxHeight:2000}}>
                <br/><br/>
                <Row>
                    <Col sm >
                    <br/>
                        
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    <h2 style={{color:'#4169E1'}} >Acharya Prafulla Chandra Ray Polytechnic</h2>
                    <div className={containerStyle.footerconcept}>
                    <h4 >Department of Electronics and Instrumentation Engineering</h4>
                    <h7 >188, Raja Subodh Chandra Mallick Road Jadavpur,Kolkata: 700032<br/> Call : <a href='tel:03324146241'>03324146241</a>
                    <br/>email: <a href="mailto:apcraypolytechnic@gmail.com" target='_blank'>apcraypolytechnic@gmail.com</a>/<br/><a href='mailto:officeapcray@gmail.com' target='_blank'>officeapcray@gmail.com</a>
                    <br/>Visit our <a href='https://www.facebook.com/groups/192098204773124' target='_blank'><sup> <SiFacebook/> </sup> facebook</a> community</h7>
                    </div>
                    </Col>
                    <Col sm>
                        <br/>
                        
                        <h2 style={{color:'#4169E1'}} >🔗Quick Links</h2>
                        <div style={{display:'flex'}}>
                        <div className={containerStyle.footerconcept} > 
                        <h7><Nav.Link className={navstyle.navifooter} href='/' > <span >&gt; Home</span> </Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='/#about-eie'> <span >&gt; About Us</span> </Nav.Link></h7>
                        {/* <h7><Nav.Link className={navstyle.navifooter} href='#preface' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='block';}}>&gt; Preface</Nav.Link></h7> */}
                        <h7><Nav.Link className={navstyle.navifooter} href='/students' >&gt; Students</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='/teachers' >&gt; Teachers</Nav.Link></h7>
                        
                        </div>
                        <div>
                        
                        <h7><Nav.Link className={navstyle.navifooter} onClick={()=>{setModalShowGallery(true)}}>&gt; Gallery</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='/#events-eie'>&gt; Events</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} onClick={() => {setModalShowRecrt(true);}}>&gt; Recruiters</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='/preface'>&gt; Why this website?</Nav.Link></h7>
                        </div>
                        </div>
                    </Col>
                    
                    <Col sm>
                    <br/>
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    <div className={containerStyle.maps} style={{textAlign:'center'}}>
                        <iframe height="250" style={{maxWidth:400}}
                        src="https://maps.google.com/maps?q=apc%20ray%20polytechnic,%20jadavpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='d-block w-100'>
                        </iframe>
                    </div>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col sm ><br/>
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    
                    <h3 style={{color:'#4169E1'}} >✒️Conceptualist</h3>
                    <div className={containerStyle.footerconcept}>
                    <p> <h5 style={{display:'flex'}}>Alok Mondal 
                    {/* <img src={alok} width={23} style={{borderRadius:20}}/> */}
                     </h5>
                    <a href='https://www.facebook.com/alok.mondal.56481379' target='_blank' style={{color:'white'}}><FaFacebook /></a>&nbsp;<a href='https://www.instagram.com/i.am.alok.mondal/' target='_blank' style={{color:'white'}}><RiInstagramFill/></a> &nbsp;<a href='https://www.linkedin.com/in/alok-mondal-84664a200' target='_blank' style={{color:'white'}}><FaLinkedinIn/></a> &nbsp;<a href='mailto:alokmondal70@gmail.com' target='_blank' style={{color:'white'}}><MdEmail/></a> <br/> Electronics & Instrumentation Engineering<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032<br/></p>
                    </div>
                    </Col>


                
                    <Col sm ><br/>
                    {/* <hr style={{borderWidth:5,borderColor:'#FF4500'}}></hr> */}
                    
                    <h3 style={{color:'#4169E1'}} >👨‍💻Designed & Developed by</h3>
                    <div className={containerStyle.footerconcept}>
                        <p>
                     <h5>Subham Das  &lt;/&gt;</h5><a href='https://www.facebook.com/subham.das.908347' target='_blank' style={{color:'white'}}><FaFacebook /></a>&nbsp;<a href='' target='_blank' style={{color:'white'}}><RiInstagramFill/></a> &nbsp;<a href='https://www.linkedin.com/in/subham-das-43a396199/' target='_blank' style={{color:'white'}}><FaLinkedinIn/></a> &nbsp;<a href='mailto:dsubham776@gmail.com' target='_blank' style={{color:'white'}}><MdEmail/></a>&nbsp;<FaGithub/>&nbsp;<FaHackerrank/><br/> Computer Science & Technology<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032</p>
                    </div>
                    </Col>
                </Row>
                
                <p></p><br/>
                <p style={{fontSize:13}}>©️ This Web Application doesn't collect any personal data or cookie from anyone. The information contained in this website are not verified. The data in this website is used in due permission from their respective owners. The present administrator(s) is fully responsible for availability of data and information in this website. see our <a href='/about/privacy_policy'>Privacy Policy</a> </p>
                <p style={{textAlign:'center'}}><a href=''>Copyright © {getdate()}</a>. All rights reserved.</p>
            </Container>
            </Container>
            </div>
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

export default Footer
