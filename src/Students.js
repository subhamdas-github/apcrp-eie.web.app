import React,{useState,useEffect,useRef} from 'react'
import Footer from './Footer'
import FrontHeading from './FrontHeading'
import sty from './css/adminFormImg.module.css';
import { Container,ResponsiveEmbed,Image,Spinner, Navbar,NavDropdown, Overlay,OverlayTrigger,Popover, Nav,Button,Tabs,Tab,Modal,Card,ListGroup,Alert,Form, CardDeck,Row,Col, CardColumns,ButtonGroup,ToggleButton,ToggleButtonGroup,Badge, ProgressBar } from 'react-bootstrap'
import Login from './Login';
import App from './App';
import fire from './config/fire'
import { AlignCenter, Justify } from 'react-bootstrap-icons';
import containerStyle from './AdminContainer.module.css'
import LinearProgress from '@material-ui/core/LinearProgress';
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
// import navstyle from './css/FrontNavStyle.module.css';
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropagateLoader from 'react-spinners/PropagateLoader'
import PulseLoader from 'react-spinners/PulseLoader'
import { Placeholder } from 'rsuite';
// import Snackbar from '@material-ui/core/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import an from './Animated.module.css'
import Review from './Review';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ErrorIcon from '@material-ui/icons/Error';
import FadeInSection from './FadeInSection';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HelpIcon from '@material-ui/icons/Help';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import GroupIcon from '@material-ui/icons/Group';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// ..

function Students() {
    function AlertF(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
      const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = useState(false);
//   const handleClick = () => {
//     setOpen(true);
//   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const { Paragraph } = Placeholder;
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    const [newfireYear, setNewFireYear] = React.useState('Select');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);

    const [showtip, setShowTip] = useState(false);
    const [showtipphoto, setShowTipphoto] = useState(false);
    const target = useRef(null);


//   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

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
        fire.firestore().collection('students').where("year_arr","!=","").orderBy('year_arr','desc')
        .onSnapshot(function(data){
            setTasksyears(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
            })
    },[])
    const studentoptselect = ()=>{
      
        
        if (newfireYear=='Select'){alert('Please select a year to Go')}
        else{

        setLoading(true)
        setTasks([])
        fire.firestore()
        .collection('students').doc('year').collection(newfireYear)
        .onSnapshot(function(data){

        setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));setLoading(false)
        setSearchTerm('')
        setOpen(true)
        document.getElementById('search').style.display='block'
        document.getElementById('stu-review').style.display='block'
        
    });
        
        }
    }
    const [showt, setShowt] = useState(false);
  // const [target, setTarget] = useState(null);
  // const ref = useRef(null);
  const renderTooltip = () => {
    <Tooltip >
      Simple tooltip
    </Tooltip>
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

    return (
        <div>
            <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <AlertF severity="info">
          Loading images...
        </AlertF>
      </Snackbar>
      
    </div>
            {/* <LinearProgress/> */}
            <FrontHeading/>
            <div style={{padding:20}} className={containerStyle.grad}>
            <Paper elevation={9}  className={containerStyle.grad}>
            
            <div style={{display:'block',textAlign:'center'}} className={sty.controlpanelfont}>
            <h1 style={{textAlign:'center',fontSize:40,display:'flex',textAlign:'center',justifyContent:'center'}} className={containerStyle.borderbottomstyle}>
              
              <div style={{paddingBottom:12,color:'#D1ECF1'}}><GroupIcon fontSize="large"/></div>
              <span className={containerStyle.ach} style={{paddingTop:10,paddingLeft:2}}><b>Our Students</b></span>
            </h1>
            <br/>
            {/* <Container fluid='xl'> */}
            {/* <Container fluid='xl' className={containerStyle.container}> */}
                
                <Alert variant="info">
                <Alert.Heading style={{fontSize:25}}>Students of Electronics and Instrumentation Engineering</Alert.Heading>
                <p style={{fontSize:20}}>
                        Acharya Prafulla Chandra Roy Polytechnic introducing their Students of Department
                        of Electronics and Instrumentation Engineering (DEIE).
                </p>
                <p style={{fontSize:18}}>
                  <div style={{display:'flex',justifyContent:'center'}}>
                  <span style={{color:'#dc3545'}}><ErrorIcon/></span> <span style={{paddingTop:5}}>Information contained in this page are not verified. Information in this page are used in due permission from their respective owners.
                  See our <a href='/about/privacy_policy'>Privacy Policy</a></span>
                  </div></p>
                <hr />
                </Alert>

                <Row><Col>
                <Form style={{display:'flex',justifyContent:'center'}}>
                  <div>
                    <Badge variant='primary' ><h6 style={{paddingTop:6}}>Select Year</h6></Badge>
                  </div>
                  <div style={{width:400}}>
                    <Form.Control style={{paddingTop:6}} as="select" custom type="text" value={newfireYear} onChange={e=> setNewFireYear(e.target.value)} style={{textOverflow:'ellipsis',overflow:'hidden'}}>
                    <option>Select</option>
                    {tasksyears.map(spell=>(
                        <option  className={an.studentyearnav}>{spell.year_arr}</option>
                    ))}
                    </Form.Control>
                  </div>
                  <div>
                    <Button variant='danger' style={{width:80}} onClick={studentoptselect}>Go</Button>
                  </div>
                </Form>
                </Col></Row><br/>
                <Row><Col>
                <div style={{display:'flex',textAlign:'center',justifyContent:'space-between'}}>
                    <p></p>
                    {/* <div id='search' style={{display:'block'}}> */}
                <input id='search' style={{display:'none'}} type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
                {/* </div> */}
                <p></p>
                </div>
                </Col></Row>

                <br/>

            {/* </Container> */}
            {/* </Container> */}
            </div>
                  
            <div style={{display:'block'}} >
            
                {/* <Container fluid='xl'> */}
                {/* <Paragraph style={{ marginTop: 30,color:'red' }} rows={5} graph="circle" active /> */}
                <div style={{textAlign:'center',paddingTop:50}}><PulseLoader color='white' loading={loading}/></div>
                {/* <Spinner animation="border" />  */}
                    {/* {loading?( */}
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
                                <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}>
                                  <h5>{faceemoji[Math.floor(Math.random() * 10)]}<b>{spell.name}</b></h5>
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
                    {/* ):( */}
                    {/* <Spinner animation="border" /> 
                    )} */}
                    
                {/* </Container> */}
                
                {/* <hr/> */}
                <div id='stu-review' style={{display:'none',padding:40}} className={sty.controlpanelfont}>
                <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}} className={sty.controlpanelfont}>
                        <p></p>
                        <p></p>
                          <div  >
                            <sup><HelpIcon fontSize="small"/></sup><span className={an.articlefeedback} onClick={()=>setShowTip(true)}>
                              Having trouble finding your name?</span>
                              </div>
                </div>
                <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}} className={sty.controlpanelfont}>
                        <p></p>
                        <p></p>
                          <div  >
                            <sup><HelpIcon fontSize="small"/></sup><span className={an.articlefeedback} onClick={()=>setShowTipphoto(true)}>
                              Can't see your photo?</span>
                              </div>
                </div>
                <hr/>
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
            <Modal 
            show={showtip} 
            onHide={()=>setShowTip(false)}
            className={sty.controlpanelfont}
            
            >
              <Modal.Header closeButton style={{backgroundColor:'#D1ECF1'}}>
                <Modal.Title><sup><SentimentVeryDissatisfiedIcon fontSize="large"/></sup>If you're Having trouble to find your name...</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{backgroundColor:'#D1ECF1'}}>
              <strong><u>Tip 1</u>:</strong>&nbsp;&nbsp; Search your proper Name or Email above.<br/>
            <strong><u>Tip 2</u>:</strong>&nbsp;&nbsp; Make sure you've searched your passout year.<br/>
            <strong><u>Tip 3</u>:</strong>&nbsp;&nbsp; Refresh the web page & Check your internet connection.<br/>
            <strong><u>Tip 4</u>:</strong>&nbsp;&nbsp; Contact with present administrator.
              </Modal.Body>
              <Modal.Footer style={{backgroundColor:'#D1ECF1'}}>
                <Button variant="secondary" onClick={()=>setShowTip(false)}>
                  Ok
                </Button>
                
              </Modal.Footer>
            </Modal>
            <Modal 
            show={showtipphoto} 
            onHide={()=>setShowTipphoto(false)}
            className={sty.controlpanelfont}
            
            >
              <Modal.Header closeButton style={{backgroundColor:'#D1ECF1'}}>
                <Modal.Title><sup><SentimentVeryDissatisfiedIcon fontSize="large"/></sup>If you're Having trouble to see your photo...</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{backgroundColor:'#D1ECF1'}}>
              <strong ><u>Tip 1</u>:</strong>&nbsp;&nbsp; Make sure that you have proper internet connection.<br/>
            <strong ><u>Tip 2</u>:</strong>&nbsp;&nbsp; Make sure that you are using modern chromium based browsers.<br/>
            <strong ><u>Tip 3</u>:</strong>&nbsp;&nbsp; Refresh the web page .<br/>
            <strong ><u>Tip 4</u>:</strong>&nbsp;&nbsp; Close current tab and open this web app in a new tab.<br/>
            <strong ><u>Tip 5</u>:</strong>&nbsp;&nbsp; Make sure javascript is on in your browser's site settings.<br/>
            <strong ><u>Tip 6</u>:</strong>&nbsp;&nbsp; Check your firewall settings.<br/>
            <strong ><u>Tip 7</u>:</strong>&nbsp;&nbsp; Clear cache in your browser and try again.<br/>
            <strong ><u>Tip 8</u>:</strong>&nbsp;&nbsp; Make sure that you have given your photo to the present admin.<br/>
            <strong ><u>Tip 9</u>:</strong>&nbsp;&nbsp; Go to sleep and try again tomorrow.<br/>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor:'#D1ECF1'}}>
                <Button variant="secondary" onClick={()=>setShowTipphoto(false)}>
                  Ok
                </Button>
                
              </Modal.Footer>
            </Modal>
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

export default Students
