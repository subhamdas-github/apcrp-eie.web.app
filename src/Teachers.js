import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import FrontHeading from './FrontHeading'
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
// import Footer from './Footer';
import ClipLoader from "react-spinners";
import Preface from './Preface';
import Notice from './Notice';
import navstyle from './css/FrontNavStyle.module.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PulseLoader from 'react-spinners/PulseLoader'
import Paper from '@material-ui/core/Paper';
import an from './Animated.module.css'
import Review from './Review';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import FadeInSection from './FadeInSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
function Teachers() {
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    const [newfireYear, setNewFireYear] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(false);
    var colors = 
    ['#00FFFF','#8A2BE2','#A52A2A','#5F9EA0','#0000FF','#D2691E','#00FFFF','#006400','#8B008B','#A9A9A9',
     '#556B2F','#FF8C00','#9932CC','#8B0000','#8FBC8F','#483D8B','#E9967A','#2F4F4F','#2F4F4F','#00CED1',
     '#9400D3','#FF1493','#00BFFF','#1E90FF','#696969','#696969','#B22222','#228B22','#DCDCDC','#FF00FF',
     '#F8F8FF','#808080','#DAA520','#FFD700','#ADFF2F','#008000','#FF69B4','#CD5C5C','#F0FFF0','#4B0082',
     '#FFFFF0','#F0E68C','#E6E6FA','#ADD8E6','#F08080','#FFFACD','#E0FFFF','#90EE90','#FFB6C1','#D3D3D3',
     '#FFA07A','#20B2AA','#87CEFA','#778899','#B0C4DE','#FFFFE0','#32CD32','#800000','#0000CD','#66CDAA',
     '#BA55D3','#9370DB','#3CB371','#7B68EE','#00FA9A','#48D1CC','#C71585','#191970','#F5FFFA','#FFE4E1',
     '#FFE4B5','#FFDEAD','#000080','#808000','#6B8E23','#FF4500','#FFA500','#DA70D6','#EEE8AA','#AFEEEE',
     '#DB7093','#FFEFD5','#CD853F','#DDA0DD','#B0E0E6','#800080','#663399','#4169E1','#BC8F8F','#FF0000',
     '#9ACD32','#FFFF00','#008080','#FF6347','#4682B4','#6A5ACD','#2E8B57','#F4A460','#FA8072','#00FF7F']
    var textcolors = 
    ['#008000','#4B0082','#00008B','#DC143C','#800080','#A52A2A','#2F4F4F','#008080','#9400D3','#6A5ACD']

    var faceemoji = 
    ['😀','😃','😄','😁','😊','😇','😎','😉','😋','🙂']
    useEffect(()=>{
      AOS.init();
        fire.firestore().collection('teachers').onSnapshot(function(data){
            setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
            setLoading(false)
            document.getElementById('tea-review').style.display='block'
            })
    },[])
    return (
        <div>
            <FrontHeading/>
            
                
            <div style={{padding:20}} className={containerStyle.grad}>
                {/* <Container fluid='xl'> */}
                {/* <Container fluid='xl' className={containerStyle.container}> */}
            <Paper elevation={9}  className={containerStyle.grad}>
            
            <div style={{display:'block',textAlign:'center'}} className={sty.controlpanelfont}>
            <h1 style={{textAlign:'center',fontSize:40,display:'flex',textAlign:'center',justifyContent:'center'}} className={containerStyle.borderbottomstyle}>
            <div style={{paddingBottom:12,color:'#D1ECF1'}}><SupervisedUserCircleIcon fontSize="large"/></div>
            <span className={containerStyle.ach} style={{paddingTop:10,paddingLeft:2}}><b>Our Teachers</b></span></h1>
                    <Alert variant="info">
                    <Alert.Heading style={{fontSize:25}}>Faculty Members of Electronics and Instrumentation Engineering</Alert.Heading>
                    <p style={{fontSize:20}}>
                        Acharya Prafulla Chandra Roy Polytechnic introducing their respected Teachers of Department
                        of Electronics and Instrumentation Engineering (DEIE)
                    </p>
                    <p style={{fontSize:18}}>(N.B. Information contained in this page are not verified. Information in this page are used in due permission from their respective owners.
                  See our <a href='/about/privacy_policy'>Privacy Policy</a>)</p>
                    <hr />    
                    </Alert>
                    <hr/>
                {/* </Container> */}
                {/* </Container> */}
            </div>
            <div style={{display:'block'}}>
                {/* <Container fluid='xl'> */}
                <div style={{textAlign:'center',paddingTop:50}}><PulseLoader color='white' loading={loading}/></div>
                
                        <CardColumns>
                        {tasks.filter((val)=>{
                            if(searchTerm==""){
                                return val
                            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }else if(val.email.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }).map(spell => (
                          <div data-aos="zoom-in">
                        <Card border='primary'
                            className="text-center p-1"
                            style={{
                                // backgroundOrigin:spell.url
                                backgroundColor: colors[Math.floor(Math.random() * 100)]
                            }}


                        >
                            <div className={sty.controlpanelfont}>
                            <Card.Img src={spell.url} className={containerStyle.imgstyle}/>
                               
                            {/* <Card.Img src={spell.url} className={containerStyle.imgstyle}/> */}
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5><b>{spell.name}</b></h5>
                                {spell.status1}<br/>{spell.status2}<br/>{spell.status3}
                                </ListGroup.Item>
                                <ListGroup.Item><Card.Link>
                                    
                                    &#128140;
                                    {spell.email}</Card.Link></ListGroup.Item>
                                <ListGroup.Item>&#128222;{spell.phone}</ListGroup.Item>
                            </ListGroup>
                            </div>
                            
                        </Card>
                        </div>
                        ))}
                        </CardColumns>
                        <hr/>
                        <div id='tea-review' style={{display:'none',padding:40}} className={sty.controlpanelfont}>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                      <p></p>
                      <div>
                        <h5 style={{fontSize:18,display:'flex'}}><span style={{paddingTop:14}}>Was this page helpful?</span>
                          <span style={{cursor:'pointer'}}>
                            <Tooltip title="Yes" placement="top">
                              <IconButton aria-label="like" onClick={() => {document.getElementById('like').style.color='white'; setPage(false);setTimeout(() => {setModalShow(true);document.getElementById('like').style.color='#175451';}, 3000);}}>
                                <ThumbUpAltIcon id='like' style={{color:'#175451'}} />
                              </IconButton>
                            </Tooltip>
                          </span>
                          <span style={{cursor:'pointer'}}>
                            <Tooltip title="No" placement="top">
                              <IconButton aria-label="dislike" onClick={() =>{document.getElementById('dislike').style.color='white'; setPage(false); setTimeout(() => {setModalShow(true);document.getElementById('dislike').style.color='#175451';}, 3000); }}>
                                <ThumbDownAltIcon id='dislike' style={{color:'#175451'}} />
                              </IconButton>
                            </Tooltip>
                          </span>
                        </h5>
                        {/* <h5 className={an.review} onClick={() => {setPage(false);setModalShow(true)}}>Review this page</h5> */}
                      </div>
                      <p></p>
                    </div>
                </div>
            </div>
            </Paper>
            </div>
            <Footer/>
            <Review
            show={modalShow}
            onHide={() => setModalShow(false)}
            page={page}
            />
        </div>
    )
}

export default Teachers
