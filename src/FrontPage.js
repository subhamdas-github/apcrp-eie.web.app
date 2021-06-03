import React,{useState} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { MobilePDFReader,PDFReader } from 'reactjs-pdf-reader';
// import { Document, Page, Text, View, StyleSheet,PDFViewer,ReactPDF } from '@react-pdf/renderer';
import sty from './css/adminFormImg.module.css';
import { Container,ResponsiveEmbed,Image,Spinner, Navbar,NavDropdown,Nav,Button,Modal,Card,ListGroup,Alert,Form, CardDeck,Row,Col, CardColumns,ButtonGroup,ToggleButton,ToggleButtonGroup, ProgressBar } from 'react-bootstrap'
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
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
function FrontPage({placeName}) {
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
                <EventNoteIcon style={{color:'#3f51b5'}} fontSize="large"/>
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
                setcounty(<Badge badgeContent={data.size} color="primary" overlap="circle">
                <YouTubeIcon style={{color:'red'}} fontSize="large"/>
              </Badge>)
            }      
                })
            fire.firestore().collection('magazines')
            .onSnapshot(function(data){
              setTasksMag(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
            })
        
                // setcountz(<span style={{display:'flex'}}><span style={{color:'#FF8C00',fontSize:20}}><IoHome/> </span><span style={{paddingTop:8,paddingLeft:5}}>Home</span></span>);   

        };
        
        setTimeout(() => {
            setLoading(false)
            fetchData();
        }, 3000);
        // setLoading(false)
    //     if (!loading){
    //     fetchData();
    // }

        

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

            <div >
            <FrontHeading/>
            <div id='front' style={{display:'block'}}>
            <div id='frontimage' >
            <br/>
            <Container fluid='xl'>
            <Container fluid='xl' className={containerStyle.containerfront}>
            <Carousel fade>
                {tasksS.map(spell=>
                (
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={spell.url}
                    alt="slide"
                    style={{maxHeight:500,objectFit:'contain'}}
                    />
                    </Carousel.Item>
                ))}
                
            </Carousel>
            </Container>
            </Container>
            </div>

            <div id='about-eie' className={sty.controlpanelfont}>
                <br/><br/>
                <Container fluid='xl'>
                <Container fluid='xl' className={containerStyle.containerfront}>
                <h1 style={{textAlign:'center'}} className={containerStyle.borderbottomstyle}>📝About Us</h1>
                    <Row>
                        <Col sm={8} style={{textAlign:'center'}}>
                        <p style={{textAlign:'justify'}}>
                        <Alert variant="success">
                        {/* <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading> */}
                        <p style={{textAlign:'justify',fontSize:16}}>
                        <a href='http://www.apcraypolytechnic.in/' target='_blank'>Acharya Prafulla Chandra Ray Polytechnic</a>, a diploma level Government Technical Institute named
                        after the famous Indian scientist <a href='https://en.wikipedia.org/wiki/Prafulla_Chandra_Ray' target='_blank'>Acharaya Prafulla Chandra Ray</a> (2 August 1861 – 16 June 1944). It was established long back at
                        1950 and formerly known as Jadavpur Polytechnic. It is located at 188, Raja Subodh Chandra Mallick
                        Road, Jadavpur, Kolkata,  West Bengal - 700032. It is affiliated to the <a href='https://webscte.co.in/' target='_blank'>West Bengal State Council for
                        Technical and Vocational Education</a> and approved by All India Council for Technical Education (<a href='https://www.aicte-india.org/' target='_blank'>AICTE</a>).
                        <br/><br/>

                        <b>Department of Electronics & Instrumentation Engineering</b> is one of the six departments of <a href='http://www.apcraypolytechnic.in/' target='_blank'> A.P.C.
                        Ray Polytechnic</a>. <b>This is a specialised branch of engineering which deals with the major industrial
                        sectors including automation and control.</b> It also deals with major Electronics manufacturing and IT industries,
                        including core economic industries such as power, steel plants etc.
                        The institute provides quality lab and outstanding faculty to its students.
                        Mainly emphasize on growth of practical knowledge along with theoretical understanding.
                        {/* <br/><br/> */}
                        </p>
                        <hr />

                        </Alert>
                        

                        </p></Col>
                        <Col sm={4} >
                        {/* <Alert variant="success" style={{height:370}}> */}
                        <img
                        className="d-block w-100"
                        // src='https://firebasestorage.googleapis.com/v0/b/collect-db.appspot.com/o/website-images%2F1619426245557.png?alt=media&token=5583d30c-589d-4141-ac30-37ce01b1ead1' 
                        src={eielogo}
                        />
                        
                        {/* </Alert> */}
                        </Col>
                        
                        
                    </Row>
                </Container>
                </Container>
            </div>
            
            <div id='frontachivements' className={sty.controlpanelfont}>
                <br/><br/>
                <Container fluid='xl'>
                <Container fluid='xl' className={containerStyle.containerfront}>
                    <IconContext.Provider value={{color:'red'}}>
                        <h1 style={{textAlign:'center'}} className={containerStyle.borderbottomstyle}>🏆Achievements</h1>
                        <p style={{textAlign:'justify',fontSize:16}}>
                        <Alert variant="success">
                        {/* <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading> */}
                        <p style={{textAlign:'justify'}}>
                        The students of the department achieved many milestones from time to time in various field like 
                        <b > academics🎓, robotics🦾, sports⚽️</b> etc. Some of the achievements are :-
                        Champion in 2015,
                        stood 2nd position in 2017 & stood 4th position in 2018 at <a href='https://portal.e-yantra.org/' target='_blank'>E-yantra Robotics Competition(E-YRC)</a>, IIT Bombay.
                        Every year the magazine <b >''UTTORON''</b> is published by the department and every year farewell  ceremony is
                        held for our final year students naming <b >''ANTAHIN''</b>.  A Cultural programme is also arranged every year
                        on the Teachers' Day.
                        </p>
                        <hr />

                        </Alert>
                        
                        
                        </p>
                        <hr/>
                    </IconContext.Provider>
                </Container>
                </Container>
            </div>

            
            <div id='video-events' className={sty.controlpanelfont}>
                <br/>
                <Container fluid='xl' id='about-events'>
                <Container fluid='xl' className={containerStyle.containerfront} id='notice-events'>
                        
                        <h1 style={{textAlign:'center'}} className={containerStyle.borderbottomstyle}>📢Explore Events</h1>
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
    <div className={classes.root} id='mazagize-events'>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
          className={sty.controlpanelfont}
        >
         <Tooltip title='Home' ><Tab  icon={<HomeIcon style={{color:'#3f51b5'}} fontSize="large"/>} {...a11yProps(0)} /></Tooltip>
         <Tooltip title='Youtube Videos'><Tab  icon={county} {...a11yProps(1)} onClick={()=>setcounty(<YouTubeIcon style={{color:'red'}} fontSize="large"/>)}/></Tooltip>
         <Tooltip title='Notice'><Tab  icon={countx} {...a11yProps(2)} onClick={()=>setcountx(<EventNoteIcon style={{color:'#3f51b5'}} fontSize="large"/>)}/></Tooltip>
         <Tooltip title='Magazine'><Tab  icon={<PictureAsPdfIcon style={{color:'red'}} fontSize="large"/>} {...a11yProps(3)} /></Tooltip>
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div style={{textAlign:'center',fontSize:16}} className={sty.controlpanelfont}>
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
        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title} >
            Our Magazines
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
      {/* </Grid> */}

      </TabPanel>
      
    </div>

                </Container>
                </Container>
            </div>


            </div>
            <Footer/>
                 </div>
}
        </div>
    )
}

export default FrontPage
