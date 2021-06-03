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
    const [newfireYear, setNewFireYear] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);

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
        fire.firestore().collection('students').onSnapshot(function(data){
            setTasksyears(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
            })
    },[])
    const studentoptselect = ()=>{
        
        if (newfireYear==''){alert('Please select a year to Go')}
        else{

        setLoading(true)
        setTasks([])
        fire.firestore()
        .collection('students').doc('year').collection(newfireYear)
        .onSnapshot(function(data){

        setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));setLoading(false)
        setOpen(true);
        document.getElementById('search').style.display='block';
        setSearchTerm('')
    });
        
        }
    }
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
            <div style={{display:'block',textAlign:'center'}}>
            <br/>
            <Container fluid='xl'>
            <Container fluid='xl' className={containerStyle.container}>
                <br/><br/>
                <Alert variant="success">
                <Alert.Heading>Students of Electronics and Instrumentation Engineering</Alert.Heading>
                <p>
                        Acharya Prafulla Chandra Roy Polytechnic introducing their Students of Department
                        of Electronics and Instrumentation Engineering (DEIE).
                </p>
                <hr />
                </Alert>

                <Row><Col>
                <Form style={{display:'flex'}}>
                <Badge variant='primary' ><h6 style={{paddingTop:6}}>Choose Year</h6></Badge>
                <Form.Control style={{paddingTop:6}} as="select" custom type="text" value={newfireYear} onChange={e=> setNewFireYear(e.target.value)} style={{textOverflow:'ellipsis',overflow:'hidden'}}>
                {tasksyears.map(spell=>(
                    <option >{spell.year_arr}</option>
                ))}
                </Form.Control>
                <Button variant='danger' style={{width:80}} onClick={studentoptselect}>Go</Button>
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

            </Container>
            </Container>
            </div>

            <div style={{display:'block'}}>
            
                <Container fluid='xl'>
                {/* <Paragraph style={{ marginTop: 30,color:'red' }} rows={5} graph="circle" active /> */}
                <div style={{textAlign:'center',paddingTop:50}}><PulseLoader color='#36D7B7' loading={loading}/></div>
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
                                <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5>{faceemoji[Math.floor(Math.random() * 10)]}<b>{spell.name}</b></h5>
                                {spell.status1}<br/>{spell.status2}<br/>{spell.status3}
                                </ListGroup.Item>
                                <ListGroup.Item><Card.Link>
                                    
                                    &#128140;
                                    {spell.email}</Card.Link></ListGroup.Item>
                                <ListGroup.Item>&#128222;{spell.phone}</ListGroup.Item>
                            </ListGroup>
                            </div>
                            
                        </Card>
                        ))}
                        </CardColumns>
                    {/* ):( */}
                    {/* <Spinner animation="border" /> 
                    )} */}
                    
                </Container>
            </div>
    
            <Footer/>
        </div>
    )
}

export default Students
