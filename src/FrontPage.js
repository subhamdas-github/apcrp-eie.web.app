import React,{useState} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { MobilePDFReader,PDFReader } from 'reactjs-pdf-reader';
// import { Document, Page, Text, View, StyleSheet,PDFViewer,ReactPDF } from '@react-pdf/renderer';
import sty from './css/adminFormImg.module.css';
import { Container,ResponsiveEmbed,Image,Spinner, Navbar,NavDropdown,Nav,Button,Modal,Accordion, Card,ListGroup,Alert,Form, CardDeck,Row,Col, CardColumns,ButtonGroup,ToggleButton,ToggleButtonGroup, ProgressBar } from 'react-bootstrap'
// import Login from './Login';
// import App from './App';
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
import x from './images/x.png'
import y from './images/y.png'
import z from './images/z.png'
import alok from './images/alok.jpg'
import ScrollUpButton from "react-scroll-up-button";
import Googlemaps from './Googlemaps';
import Recruiters from './Recruiters';
import Progressbar from './Progressbar';
import { IconContext } from "react-icons";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Footer from './Footer';
import ClipLoader, { PropagateLoader, PulseLoader } from "react-spinners";
import Preface from './Preface';
import Notice from './Notice';
import navstyle from './css/FrontNavStyle.module.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FrontHeading from './FrontHeading';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import SyncLoader from 'react-spinners/SyncLoader'
import PuffLoader from 'react-spinners/PuffLoader'
import PacmanLoader from 'react-spinners/PacmanLoader'
import BeatLoader from 'react-spinners/BeatLoader'
import DotLoader from 'react-spinners/DotLoader'
import HashLoader from 'react-spinners/HashLoader'
import './HoverNav.css';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import Paper from '@material-ui/core/Paper';
import n from './images/normallogo.jpg'
import an from './Animated.module.css'
import Review from './Review';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import NearMeIcon from '@material-ui/icons/NearMe';

import ButtonBase from '@material-ui/core/ButtonBase';
import stu from './images/students.jpg'
import tea from './images/teachers.jpg'
import FadeInSection from './FadeInSection';
import FadeInSectionL from './FadeInSectionL';
import FadeInSectionR from './FadeInSectionR';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
// import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import './css/fadein.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import InfoIcon from '@material-ui/icons/Info';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ExploreIcon from '@material-ui/icons/Explore';


function FrontPage({placeName}) {
  const images = [
    {
      url: {stu},
      title: 'Visit Our Students',
      width: '34%',
      href:'/students',
    },
    {
      url: {tea},
      title: 'Visit Our Teachers',
      width: '33%',
      href:'/teachers',
    },
    {
      url: 'https://static.vecteezy.com/system/resources/previews/000/403/929/original/vector-floral-frame-card-design-illustration.jpg',
      title: 'Love from Seniors',
      width: '33%',
      href:'/preface',
    },
  ];
  

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `scrollable-force-tab-${index}`,
          'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
      }
      const useStyles = makeStyles((theme) => ({
        
        root: {
          flexGrow: 1,
          width: '100%',
          backgroundColor: theme.palette.background.paper,
        },
        im:{
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: 300,
          width: '100%',
        },
        image: {
          position: 'relative',
          height: 350,
          [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 300,
          },
          '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
              opacity: 0.15,
            },
            '& $imageMarked': {
              opacity: 0,
            },
            '& $imageTitle': {
              border: '4px solid #20b2aa',
              color:'#17827d',
              
            },
          },
        },
        focusVisible: {},
        imageButton: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          
        },
        imageSrc: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#20b2aa',
          opacity: 0.8,
          transition: theme.transitions.create('opacity'),
          
        },
        imageTitle: {
          position: 'relative',
          padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
          fontSize:24,
          fontWeight:'bold',
        },
        imageMarked: {
          height: 3,
          width: 18,
          backgroundColor: theme.palette.common.white,
          position: 'absolute',
          bottom: -2,
          left: 'calc(50% - 9px)',
          transition: theme.transitions.create('opacity'),
          
        },
      }));
      function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }

      const [dense, setDense] = React.useState(false);
      const [secondary, setSecondary] = React.useState(false);

    const [tasks, setTasks] = useState([]);
    const [tasksS, setTasksS] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [page, setPage] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    const [newfireYear, setNewFireYear] = React.useState('');

    const [tasksNot, setTasksNot] = React.useState([]);
    const [tasksVid, setTasksVid] = React.useState([]);
    const [tasksMag, setTasksMag] = React.useState([]);

    const [count, setcount] = React.useState(0)
    const [countx, setcountx] = React.useState('')

    const [countVid, setcountVid] = React.useState(0)
    const [county, setcounty] = React.useState('')

    const [countz, setcountz] = React.useState('')

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userloading, setUserLoading] = useState(true);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
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

    var videocard = 
    ['primary','secondary','warning','danger','info','success','dark']

    React.useEffect(()=>{
      AOS.init({duration:1150});
        fire.firestore().collection('slideshow').onSnapshot(function(data){
            setTasksS(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
        });

        const fetchData = async ()=>{

            const db = fire.firestore();

            fire.firestore().collection('notice')
            .onSnapshot(function(data){
            setTasksNot(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));setcount(data.size);
                if(data.size==0){
                // setcountx(<span style={{display:'flex'}}><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span><span style={{paddingTop:8,paddingLeft:5}}>Notice</span></span>);document.getElementById('nonotice').style.display='block';
            }
                else{
                    // document.getElementById('nonotice').style.display='none';
                // setcountx(<span style={{display:'flex'}}><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span><span style={{paddingTop:8,paddingLeft:5}}>Notice</span> <sup><Badge style={{fontSize:12}} pill variant='primary'>{data.size}</Badge></sup></span>);
                setcountx(<Badge badgeContent={data.size} color="secondary" overlap="circle">
                <EventNoteIcon style={{color:'white'}} fontSize="large"/>
              </Badge>)
            }
            })

            fire.firestore().collection('video')
                .onSnapshot(function(data){ 
                setTasksVid(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
                setcountVid(data.size);
                if(data.size==0){
                // setcounty(<span style={{display:'flex'}}><span style={{color:'red',fontSize:20}}><IoLogoYoutube/> </span><span style={{paddingTop:8,paddingLeft:5}}> Videos</span></span>);
            }else{
                // setcounty(<span style={{display:'flex'}}><span style={{color:'red',fontSize:20}}> </span><span style={{paddingTop:8,paddingLeft:5}}> Videos</span> <sup><Badge style={{fontSize:12}} pill variant='primary'>{data.size}</Badge></sup></span>); 
                setcounty(<Badge badgeContent={data.size} color="secondary" overlap="circle">
                <YouTubeIcon style={{color:'white'}} fontSize="large"/>
              </Badge>)
            }      
                })
            fire.firestore().collection('magazines')
            .onSnapshot(function(data){
              setTasksMag(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
              if(data.size==0){
                // setcounty(<span style={{display:'flex'}}><span style={{color:'red',fontSize:20}}><IoLogoYoutube/> </span><span style={{paddingTop:8,paddingLeft:5}}> Videos</span></span>);
            }else{
                // setcounty(<span style={{display:'flex'}}><span style={{color:'red',fontSize:20}}> </span><span style={{paddingTop:8,paddingLeft:5}}> Videos</span> <sup><Badge style={{fontSize:12}} pill variant='primary'>{data.size}</Badge></sup></span>); 
                setcountz(<Badge badgeContent={data.size} color="secondary" overlap="circle">
                <PictureAsPdfIcon style={{color:'white'}} fontSize="large"/>
              </Badge>)
            }
            })
            // document.getElementById('like').addEventListener('click',()=>{
            //   document.getElementById('like').style.color='white';
            // })
            // document.getElementById('dislike').addEventListener('click',()=>{
            //   document.getElementById('dislike').style.color='white';
            // })
        
                // setcountz(<span style={{display:'flex'}}><span style={{color:'#FF8C00',fontSize:20}}><IoHome/> </span><span style={{paddingTop:8,paddingLeft:5}}>Home</span></span>);   

        };
        
        setTimeout(() => {
            setLoading(false)
            fetchData();
        }, 3000);
        
        

    //   handleShow()
    },[]);


    

    return (
        <div >
            {/* <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={handleClose}
        backdrop="static"
        centered
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>⚠️ 503</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>apcrp-eie.web.app is currently down for maintenance! Sorry for the inconvenience...</h5>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal> */}

            
{
    loading ?
    <div className={containerStyle.climbloader}> <HashLoader
    color='#36D7B7' size={70}/></div>
    
    :

            <div className={containerStyle.grad}>
            <FrontHeading/>
            <div id='front' style={{display:'block'}}>
            <div id='frontimage' style={{padding:20}} >
            
            <Paper elevation={9} className={containerStyle.grad}>
              <hr/>
            {/* <Container fluid='xl'> */}
            {/* <Container fluid='xl' > */}

            <Carousel fade>
              <Carousel.Item>
                <img
                className="d-block w-100"
                src={one}
                alt='first'
                style={{objectFit:'contain',maxHeight:700}}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                src={two}
                alt='second'
                style={{objectFit:'contain',maxHeight:700}}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-100"
                src={three}
                alt='third'
                style={{objectFit:'contain',maxHeight:700}}
                />
              </Carousel.Item>
                {tasksS.map(spell=>
                (
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={spell.url}
                    alt={spell.url}

                    style={{objectFit:'contain',maxHeight:700}}
                    
                    />
                    </Carousel.Item>
                ))}
                
            </Carousel>
            {/* </Container> */}
            {/* </Container> */}
            <hr/>
            </Paper>
            </div>

            {/* <FadeInSection> */}
            <div data-aos="zoom-in-up" >
            <div id='about-eie' className={sty.controlpanelfont} style={{padding:20}}>
            
                <br/><br/>
                <Paper elevation={9} className={containerStyle.grad}>
                
                {/* <Container fluid='xl'> */}
                <h1 style={{textAlign:'center',fontSize:40,display:'flex',textAlign:'center',justifyContent:'center'}} className={containerStyle.borderbottomstyle}>
              
              <div style={{paddingBottom:12,color:'#D1ECF1'}}><InfoIcon fontSize="large"/></div>
              <span className={containerStyle.ach} style={{paddingTop:10,paddingLeft:2}}><b>About Us</b></span>
            </h1>
                {/* <h1 style={{textAlign:'center',fontSize:45}} className={containerStyle.borderbottomstyle}>&gt;&gt;<span className={containerStyle.ach}><b>About Us</b></span></h1> */}
                {/* <Container fluid='xl' > */}
                
                    <Row >
                        <Col sm={8} style={{textAlign:'center'}} >
                        <p style={{textAlign:'justify'}}>
                        <Alert variant="info">
                        {/* <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading> */}
                        <p style={{textAlign:'justify',fontSize:18}} >
                        <a href='http://www.apcraypolytechnic.in/' target='_blank'>Acharya Prafulla Chandra Ray Polytechnic</a>, a diploma level Government Technical Institute named
                        after the famous Indian scientist <a href='https://en.wikipedia.org/wiki/Prafulla_Chandra_Ray' target='_blank'>Acharaya Prafulla Chandra Ray</a> (2 August 1861 – 16 June 1944). It was established long back at
                        1950 and formerly known as Jadavpur Polytechnic. It is located at 188, Raja Subodh Chandra Mallick
                        Road, Jadavpur, Kolkata,  West Bengal - 700032. It is affiliated to the <a href='https://webscte.co.in/' target='_blank'>West Bengal State Council for
                        Technical and Vocational Education</a> and approved by All India Council for Technical Education (<a href='https://www.aicte-india.org/' target='_blank'>AICTE</a>).
                        <br/><br/>
                        <hr/>
                        <b>Department of Electronics & Instrumentation Engineering</b> is one of the six departments of <a href='http://www.apcraypolytechnic.in/' target='_blank'> A.P.C.
                        Ray Polytechnic</a>. <b>This is a specialised branch of engineering which deals with the major industrial
                        sectors including automation and control.</b> It also deals with major Electronics manufacturing and IT industries,
                        including core economic industries such as power, steel plants etc.
                        The institute provides quality lab and outstanding faculty to its students.
                        Mainly emphasize on growth of practical knowledge along with theoretical understanding.
                        <br/><br/>
                        </p>
                        <hr />
                        
                        <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}}>
                        <p></p>
                        <p></p>
                          <div style={{display:'flex'}}><EditIcon fontSize="small"/><span className={an.articlefeedback} onClick={() =>{setPage(true);setModalShow(true)}}>Give feedback about this article</span></div>
                    
                        </div>
                        </Alert>
                        

                        </p></Col>
                        <Col sm={4} >
                        
                        <img
                        className="d-block w-100"
                        src={z}
                        />
 
                        </Col>

                    </Row>
                    
                {/* </Container> */}
                {/* </Container> */}
                
                </Paper>
                 
            </div>
            </div>
            {/* </FadeInSection>  */}
            <div data-aos="zoom-in-right">
            <div id='frontachivements' className={sty.controlpanelfont} style={{padding:20}}>
            
                <br/><br/>

                <Paper elevation={9} className={containerStyle.grad}>
                
                {/* <Container fluid='xl'> */}
                <h1 style={{textAlign:'center',fontSize:40,display:'flex',textAlign:'center',justifyContent:'center'}} className={containerStyle.borderbottomstyle}>
              
              <div style={{paddingBottom:12,color:'#D1ECF1'}}><EmojiEventsIcon fontSize="large"/></div>
              <span className={containerStyle.ach} style={{paddingTop:11,paddingLeft:2}}><b>Achievements</b></span>
            </h1>
                {/* <h1 style={{textAlign:'center',fontSize:45}} className={containerStyle.borderbottomstyle}>&gt;&gt;<span className={containerStyle.ach}><b>Achievements</b></span> </h1> */}
                {/* <Container fluid='xl' > */}
                    <IconContext.Provider value={{color:'red'}}>
                        
                        
                        <Alert variant="info">
                        <p style={{textAlign:'justify',fontSize:18}}>
                        {/* <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading> */}
                        <p style={{textAlign:'justify'}}>
                        The students of the department achieved many milestones from time to time in various field like 
                        <b > Academics <sup><SchoolIcon/></sup>, Robotics <sup><ComputerIcon/></sup>, Sports <sup><SportsCricketIcon/></sup></b> etc. Some of the achievements are :-
                        Champion in 2015,
                        stood 2nd position in 2017 & stood 4th position in 2018 at <a href='https://portal.e-yantra.org/' target='_blank'>E-yantra Robotics Competition(E-YRC)</a>, IIT Bombay.
                        Every year the magazine <b >''UTTORON''</b> is published by the department and every year farewell  ceremony is
                        held for our final year students naming <b >''ANTAHIN''</b>.  A Cultural programme is also arranged every year
                        on the Teachers' Day.
                        </p>
                        <hr /></p>
                        <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}}>
                        <p></p>
                        <p></p>
                          <div style={{display:'flex'}}><EditIcon fontSize="small"/><span className={an.articlefeedback} onClick={() => {setPage(true); setModalShow(true)}}>Give feedback about this article</span></div>
                    
                        </div>
                        </Alert>

                        
                        <hr/>
                    </IconContext.Provider>
                {/* </Container> */}
                {/* </Container> */}
                
                </Paper>
                
            </div>
            </div>
            {/* <div id='Navigation' className={sty.controlpanelfont} style={{padding:20}}>
              <br/>
              <Paper elevation={9} className={containerStyle.grad}>
                
                <div className={classes.im} >
                  {images.map((image) => (
                    <ButtonBase
                      focusRipple
                      key={image.title}
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                        width: image.width,
                        
                      }}
                      href={image.href}
                      
                    >
                      <span
                        className={classes.imageSrc}
                        style={{
                          backgroundImage: `url(${image.url})`,
                        }}
                      />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                          {image.title}
                          <span className={classes.imageMarked} />
                          
                        </Typography>
                      </span>
                    </ButtonBase>
                  ))}
                </div>
                <hr/>
              </Paper>
            </div> */}

<div data-aos="zoom-in-left">
            <div id='video-events' className={sty.controlpanelfont} style={{padding:20}}>
            
                <br/>
                <Paper elevation={9} className={containerStyle.grad}>
                {/* <div> */}
                <div id='about-events'>
                <div id='notice-events'>
                <h1 style={{textAlign:'center',fontSize:40,display:'flex',textAlign:'center',justifyContent:'center'}} className={containerStyle.borderbottomstyle}>
              
              <div style={{paddingBottom:12,color:'#D1ECF1'}}><ExploreIcon fontSize="large"/></div>
              <span className={containerStyle.ach} style={{paddingTop:10,paddingLeft:2}}><b>Explore Events</b></span>
            </h1>
                        {/* <h1 style={{textAlign:'center',fontSize:45}} className={containerStyle.borderbottomstyle}>&gt;&gt;<span className={containerStyle.ach}><b>Explore Events</b></span></h1> */}
                        {/* <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title={countz}>

                        <div style={{textAlign:'center',fontSize:16}}>
                        <Alert variant="success">
                        <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading>
                        <p style={{textAlign:'justify'}}>
                        Enjoy yourself with the most entertaining, passionate events with us. Every year our college
                        organises freshers (AOHVAAN), fest (METAMORPHOSIS), sports (POLYMPIC). Open Video tab to watch youtube 
                        videos and if there is any notice then it will be appear as notification.
                        </p>
                        <hr />

                        </Alert>
                        <hr />
                        </div>
                        </Tab>
                        
                        <Tab eventKey="videos" title={county} onClick={()=>{setcounty(<span><span style={{color:'red',fontSize:20}}><IoLogoYoutube/> </span>Videos</span>);}}>
                        
                        <CardColumns>
                            {tasksVid.map(spell =>(
                            
                            
                            <Card border='primary' bg={videocard[Math.floor(Math.random() * 7)]}
                                    className="text-center p-1"
                                    
                                >
                            <iframe width="auto" height="auto" src={spell.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card>
                            
                            
                            ))}
                        </CardColumns>
                            
                        </Tab>
                        
                        <Tab eventKey="notice" title={countx} onClick={()=>{setcountx(<span><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span>Notice</span>);}}>

                            <div id='nonotice' style={{display:'none'}}>
                            <Alert variant="danger">
                            <Alert.Heading>Sorry! there is no new Notice</Alert.Heading>
                            <p>
                                Please come back later. If you think this is a mistake please contact with Administrator(s).
                            </p>
                            </Alert>
                            </div>

                            <CardColumns>
                                {tasksNot.map(spell => (
                                    
                                <Card border='primary'
                                    className="text-center p-1"
                                    style={{backgroundColor: colors[Math.floor(Math.random() * 100)]}}
                                >
                                    <div className={containerStyle.fonts}>
                                    <Card.Img src={spell.url}
                                
                                     />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5><b>{spell.email}</b></h5>
                                        {spell.status1}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    </div>
                                  
                                    
                                </Card>

                                ))}
                            </CardColumns>

      
                        </Tab>
                        <Tab eventKey="magazine" title={countx} onClick={()=>{setcountx(<span><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span>Notice</span>);}}>

                            

                            <CardColumns>
                                {tasksNot.map(spell => (
                                    
                                <Card border='primary'
                                    className="text-center p-1"
                                    style={{backgroundColor: colors[Math.floor(Math.random() * 100)]}}
                                >
                                    <div className={containerStyle.fonts}>
                                    <Card.Img src={spell.url}
                                
                                     />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5><b>{spell.email}</b></h5>
                                        {spell.status1}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    </div>
                                  
                                    
                                </Card>

                                ))}
                            </CardColumns>

      
                        </Tab>
                        </Tabs> */}
                        
                        {/* <div style={{display:'flex',justifyContent:'space-around',textAlign:'center'}}>
                            <div className={containerStyle.events}></div>
                            <p>y</p>
                            <p>z</p>
                            <p>w</p>
                        </div> */}
    <div className={classes.root} id='mazagize-events' className={containerStyle.grad}>
      {/* <div> */}
      <AppBar position="static" color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
          className={sty.controlpanelfont}
          className={containerStyle.grad}
        >
         <Tooltip title='Home'><Tab  icon={<HomeIcon style={{color:'white'}} fontSize="large"/>} {...a11yProps(0)} /></Tooltip>
         <Tooltip title='Youtube Videos'><Tab  icon={county} {...a11yProps(1)} onClick={()=>setcounty(<YouTubeIcon style={{color:'white'}} fontSize="large"/>)}/></Tooltip>
         <Tooltip title='Notice'><Tab  icon={countx} {...a11yProps(2)} onClick={()=>setcountx(<EventNoteIcon style={{color:'white'}} fontSize="large"/>)}/></Tooltip>
         <Tooltip title='Magazine'><Tab  icon={countz} {...a11yProps(3)} onClick={()=>setcountz(<PictureAsPdfIcon style={{color:'white'}} fontSize="large"/>)}/></Tooltip>
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      {/* <div> */}
                        <Alert variant="info" className={sty.controlpanelfont}>
                        <div style={{textAlign:'center',fontSize:18}} >
                        <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading>
                        <p style={{textAlign:'justify'}}>
                        Enjoy yourself with the most entertaining, passionate events with us. Every year our college
                        organises freshers <b>(AOHVAAN)</b>, fest <b>(METAMORPHOSIS)</b>, sports <b>(POLYMPIC)</b>. Open Video tab to watch youtube 
                        videos and PDF tab to read magazines. If there is any Video, Notice and Magazine then they will be appear as notification.
                        </p>
                        <hr />
                        
                        </div>
                        <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}}>
                        <p></p>
                        <p></p>
                          <div style={{display:'flex'}}><EditIcon fontSize="small"/><span className={an.articlefeedback} onClick={() => {setPage(true); setModalShow(true)}}>Give feedback about this article</span></div>
                    
                        </div>
                        </Alert>
                        {/* </div> */}
                        <hr />
                        
                   <div  style={{padding:4}} className={sty.controlpanelfont}>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                      <p></p>
                      <div>
                        <h5 style={{fontSize:18,display:'flex'}}><span style={{paddingTop:14}}>Was this page helpful?</span>
                          <span style={{cursor:'pointer'}}>
                            <Tooltip title="Yes" placement="top">
                              <IconButton aria-label="like" onClick={() => {document.getElementById('like').style.color='white'; setPage(false);setTimeout(() => {setModalShow(true)}, 3000);}}>
                                <ThumbUpAltIcon id='like' style={{color:'#175451'}} />
                              </IconButton>
                            </Tooltip>
                          </span>
                          <span style={{cursor:'pointer'}}>
                            <Tooltip title="No" placement="top">
                              <IconButton aria-label="dislike" onClick={() =>{document.getElementById('dislike').style.color='white'; setPage(false); setTimeout(() => {setModalShow(true)}, 3000); }}>
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
      </TabPanel>
      <TabPanel value={value}  index={1} >
          <div className={sty.controlpanelfont}>
                        <CardColumns>
                            {tasksVid.map(spell =>(
                            
                            
                            <Card border='primary' bg={videocard[Math.floor(Math.random() * 7)]}
                                    className="text-center p-1"
                                    
                                >
                            <iframe width="auto" height="auto" src={spell.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Card>
                            
                            
                            ))}
                        </CardColumns></div>

      </TabPanel>
      <TabPanel value={value} index={2}>
          <div className={sty.controlpanelfont}>
      <div id='nonotice' style={{display:'none'}} className={sty.controlpanelfont}>
                            <Alert variant="danger">
                            <Alert.Heading>Sorry! there is no new Notice</Alert.Heading>
                            <p>
                                Please come back later. If you think this is a mistake please contact with Administrator(s).
                            </p>
                            </Alert>
                            </div>

                            <CardColumns>
                                {tasksNot.map(spell => (
                                    
                                <Card border='primary'
                                    className="text-center p-1"
                                    style={{backgroundColor: colors[Math.floor(Math.random() * 100)]}}
                                >
                                    <div className={containerStyle.fonts}>
                                    <Card.Img src={spell.url}
                                
                                     />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5><b>{spell.email}</b></h5>
                                        {spell.status1}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    </div>
                                  
                                    
                                </Card>

                                ))}
                            </CardColumns></div>

      </TabPanel>
      <TabPanel value={value} index={3}>

      {/* <Grid container spacing={2}> */}
        <Alert variant='info'>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title} >
           <div style={{display:'flex'}}> <NearMeIcon fontSize="large"/><h2 className={sty.controlpanelfont} style={{fontSize:29}}>Published Magazines</h2></div>
            <h7 className={sty.controlpanelfont} style={{fontSize:17}}>Click on the following PDF links to read it on Google Drive</h7>
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {tasksMag.map((spell=>(
                <ListItem >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  primary={<a href={spell.url} target='_blank'>{spell.email}</a>}
                  // secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" href={spell.url} target='_blank'>
                      {/* <DeleteIcon /> */}
                      <LaunchIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
                // <a href={spell.url} target='_blank'>{spell.url}</a>
              )))}

              {/* {generate(

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )} */}
            </List>
          </div>
        </Grid>
        </Alert>
      {/* </Grid> */}

      </TabPanel>
      {/* </div> */}
    </div>

                </div>
                </div>
                {/* </div> */}
                </Paper>
                
            </div>

            </div>
            </div>
            
            <Footer/>
            <Review
            show={modalShow}
            onHide={() => setModalShow(false)}
            page={page}
            />
            
                 </div>
}
        </div>
    )
}

export default FrontPage
