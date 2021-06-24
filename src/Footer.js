import React,{useState} from 'react'
import { Col, Container, Row,Nav,ProgressBar } from 'react-bootstrap'
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
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BackToTop from 'react-back-to-top';
import z from './images/z.png'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ForwardIcon from '@material-ui/icons/Forward';
import CodeIcon from '@material-ui/icons/Code';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
            <ScrollUpButton EasingType="easeInQuart"/>
            {/* <Progressbar /> */}
            {/* <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span>scroll up</span>
      </BackToTop> */}
<div style={{display:'block'}} className={sty.controlpanelfont} >
                {/* <Footer/> */}
                
                <div style={{padding:20}} className={containerStyle.grad}>
                
            {/* <Container fluid='xl'> */}
            {/* <Container fluid='xl'  > */}
                <br/><br/>
                
                <Paper elevation={9} style={{backgroundColor:'black',color:'whitesmoke',maxHeight:2000,padding:25}}>

                <Row>
                    <Col sm >
                    <br/>
                        
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    {/* <h3 style={{color:'#20b2aa'}} >Acharya Prafulla Chandra Ray Polytechnic</h3> */}
                    <div style={{display:'flex'}}><span ><ForwardIcon/> </span><h4 style={{color:'#20b2aa',paddingTop:2}}>&nbsp;Acharya Prafulla Chandra Ray Polytechnic</h4></div>
                    <div className={containerStyle.footerconcept}>
                    <h4 >Department of Electronics and Instrumentation Engineering</h4>
                    <h7 >188, Raja Subodh Chandra Mallick Road Jadavpur,Kolkata: 700032<br/> 
                    Call : <a href='tel:03324146241'>03324146241</a>
                    <br/>email: <a href="mailto:apcraypolytechnic@gmail.com" target='_blank'>apcraypolytechnic@gmail.com</a>/<br/><a href='mailto:officeapcray@gmail.com' target='_blank'>officeapcray@gmail.com</a>
                    {/* <br/>Visit our <a href='https://www.facebook.com/groups/192098204773124' target='_blank'><sup> <SiFacebook/> </sup> facebook</a> community */}
                    </h7>
                    </div>
                    </Col>
                    <Col sm>
                        <br/>
                        
                        <div style={{display:'flex'}}><span ><ForwardIcon/> </span><h4 style={{color:'#20b2aa',paddingTop:2}}>&nbsp;Quick Links</h4></div>
                        <div style={{display:'flex'}}>
                            <div className={containerStyle.footerconcept} >
                            <h7><Nav.Link className={navstyle.navifooter} href='/' >  <span>&gt;Home</span> </Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} href='/#about-eie'>  <span>&gt;About</span> </Nav.Link></h7>
                            {/* <h7><Nav.Link className={navstyle.navifooter} href='#preface' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='block';}}>&gt; Preface</Nav.Link></h7> */}
                            <h7><Nav.Link className={navstyle.navifooter} href='/students' > <span>&gt;Students</span></Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} href='/teachers' > <span>&gt;Teachers</span></Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} href='/feedback' > <span>&gt;Feedback</span></Nav.Link></h7>
                            
                            </div>
                            <div style={{paddingLeft:30}}>
                            
                            <h7><Nav.Link className={navstyle.navifooter} onClick={()=>{setModalShowGallery(true)}}> <span>&gt;Gallery</span></Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} href='/#events-eie'> <span>&gt;Events</span></Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} onClick={() => {setModalShowRecrt(true);}}> <span>&gt;Recruiters</span></Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} href='/about/privacy_policy'> <span>&gt;Privacy Policy</span></Nav.Link></h7>
                            <h7><Nav.Link className={navstyle.navifooter} href='/preface'> <span>&gt;Why this website?</span></Nav.Link></h7>
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
                    
                    {/* <h4 style={{color:'#20b2aa'}} >✒️Conceptualist</h4> */}
                    <div style={{display:'flex'}}><span ><ForwardIcon/> </span><h4 style={{color:'#20b2aa',paddingTop:2}}>&nbsp;Conceptualist</h4></div>
                    <div className={containerStyle.footerconcept}>
                    <div style={{display:'flex'}}> <h5 style={{paddingTop:4.5}}>Alok Mondal &nbsp; </h5><span ><AccountCircleIcon/></span></div>
                     
                    <a href='https://www.facebook.com/alok.mondal.56481379' target='_blank' className={navstyle.linkfacebook}>
                        <FaFacebook /></a>&nbsp;
                    <a href='https://www.instagram.com/i.am.alok.mondal/' target='_blank' className={navstyle.linkfacebook}>
                            <RiInstagramFill/></a> &nbsp;
                    <a href='https://www.linkedin.com/in/alok-mondal-84664a200' target='_blank' className={navstyle.linkfacebook}>
                        <FaLinkedinIn/></a> &nbsp;
                    <a href='mailto:alokmondal70@gmail.com' target='_blank' className={navstyle.linkfacebook}>
                        <MdEmail/></a> 
                        
                    <br/> Electronics & Instrumentation Engineering<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032<br/>
                    
                    </div>
                    </Col>

                    
                
                    <Col sm ><br/>
                    {/* <hr style={{borderWidth:5,borderColor:'#FF4500'}}></hr> */}
                    
                    {/* <h4 style={{color:'#20b2aa'}} >👨‍💻Designed & Developed by</h4> */}
                    <div style={{display:'flex'}}><span ><ForwardIcon/> </span><h4  style={{color:'#20b2aa',paddingTop:2}}>&nbsp;Designed & Developed by</h4></div>
                    <div className={containerStyle.footerconcept}>
                        <p>
                        
                    <div style={{display:'flex'}}> <h5 style={{paddingTop:4.5}}>Subham Das &nbsp; </h5><span><CodeIcon/></span></div>
                     <a href='https://www.facebook.com/subham.das.908347' target='_blank' className={navstyle.linkfacebook}>
                    <FaFacebook /></a>&nbsp;<a href='/' target='_blank' className={navstyle.linkfacebook}>
                    <RiInstagramFill/></a> &nbsp;
                    <a href='https://www.linkedin.com/in/subham-das-43a396199/' target='_blank' className={navstyle.linkfacebook}>
                    <FaLinkedinIn/></a> &nbsp;<a href='mailto:dsubham776@gmail.com' target='_blank' className={navstyle.linkfacebook}>
                    <MdEmail/></a>&nbsp;<a href='https://github.com/dsubham76' target='_blank' className={navstyle.linkfacebook}>
                    <FaGithub/></a>&nbsp;<FaHackerrank/><br/> Computer Science & Technology<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032</p>
                    </div>
                    </Col>
                    <Col sm ><br/>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                        <p></p>
                        <div> <img src={z} width={140}/></div>
                        <p></p>
                    </div>
                    
                    </Col>
                </Row>
                <br/>
                {/* <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                    <p></p>
                   <div> <img src={z} width={100}/></div>
                    <p></p>
                </div> */}
                <br/>
                <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                    <p></p>
                   <div> <a className={navstyle.navifooter} href='/feedback'>Is this website helpful ? Give a feedback</a><sup><InsertEmoticonIcon/></sup></div>
                    <p></p>
                </div>
                
                <p></p><br/>
                <p style={{fontSize:15}}>©️ This Web Application doesn't collect any personal data or cookie from anyone. The information contained in this website are not verified. The data in this website is used in due permission from their respective owners. The present administrator(s) is fully responsible for availability of data and information in this website. see our <a href='/about/privacy_policy'>Privacy Policy</a> </p>
                <p style={{textAlign:'center'}}><a href=''>Copyright © {getdate()}</a>. All rights reserved.</p>
            {/* </Container> */}
            {/* </Container> */}
            </Paper>
            </div>
            
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

export default Footer
