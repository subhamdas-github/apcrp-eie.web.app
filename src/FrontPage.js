import React,{useState} from 'react'
// import { MobilePDFReader,PDFReader } from 'reactjs-pdf-reader';
// import { Document, Page, Text, View, StyleSheet,PDFViewer,ReactPDF } from '@react-pdf/renderer';
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
import {MdEmail,MdPhoneInTalk,MdEventNote} from 'react-icons/md';
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

function FrontPage({placeName}) {
    const [tasks, setTasks] = useState([]);
    const [tasksS, setTasksS] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowGallery, setModalShowGallery] = React.useState(false);
    const [modalShowRecrt, setModalShowRecrt] = React.useState(false);
    const [tasksyears, setTasksyears] = React.useState([]);
    const [newfireYear, setNewFireYear] = React.useState('');

    const [tasksNot, setTasksNot] = React.useState([]);
    const [tasksVid, setTasksVid] = React.useState([]);

    const [count, setcount] = React.useState(0)
    const [countx, setcountx] = React.useState('')

    const [countVid, setcountVid] = React.useState(0)
    const [county, setcounty] = React.useState('')

    const [countz, setcountz] = React.useState('')

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
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

    var videocard = 
    ['primary','secondary','warning','danger','info','success','dark']

    React.useEffect(()=>{

        const fetchData = async ()=>{
            const db = fire.firestore();

            db.collection('slideshow').onSnapshot(function(data){
                setTasksS(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
            });

            fire.firestore().collection('notice')
            .onSnapshot(function(data){
            setTasksNot(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));setcount(data.size);
                if(data.size==0){setcountx(<span style={{display:'flex'}}><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span><span style={{paddingTop:8,paddingLeft:5}}>Notice</span></span>);document.getElementById('nonotice').style.display='block';}else{
                    document.getElementById('nonotice').style.display='none';
                setcountx(<span style={{display:'flex'}}><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span><span style={{paddingTop:8,paddingLeft:5}}>Notice</span> <sup><Badge style={{fontSize:12}} pill variant='primary'>{data.size}</Badge></sup></span>);
            }
            })

            fire.firestore().collection('video')
                .onSnapshot(function(data){ 
                setTasksVid(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
                setcountVid(data.size);
                if(data.size==0){setcounty(<span style={{display:'flex'}}><span style={{color:'red',fontSize:20}}><IoLogoYoutube/> </span><span style={{paddingTop:8,paddingLeft:5}}> Videos</span></span>);}else{
                setcounty(<span style={{display:'flex'}}><span style={{color:'red',fontSize:20}}><IoLogoYoutube/> </span><span style={{paddingTop:8,paddingLeft:5}}> Videos</span> <sup><Badge style={{fontSize:12}} pill variant='primary'>{data.size}</Badge></sup></span>); }      
                })
        
                setcountz(<span style={{display:'flex'}}><span style={{color:'#FF8C00',fontSize:20}}><IoHome/> </span><span style={{paddingTop:8,paddingLeft:5}}>Home</span></span>);   

        };
        fetchData();

    //   handleShow()
    },[]);

    function noticetxt (){
        if(count==0){setcountx(<span>Notice</span>);}else{
        setcountx(<span>Notice <sup><Badge style={{fontSize:12}} pill variant='primary'>{count}</Badge></sup></span>);
        }
    }
    function videotxt (){
        if(countVid==0){setcounty(<span>Videos</span>);}else{
        setcounty(<span>Videos <sup><Badge style={{fontSize:12}} pill variant='primary'>{countVid}</Badge></sup></span>);
        }
    }

    function academic(){
        return  <span className={navstyle.navi}><span style={{color:'white'}}>📚</span>Academic</span>
    }

    const studentoptselect = ()=>{
        if (newfireYear==''){alert('Please select a year to search')}
        else{
            // setLoading(false)
        setTasks([])
        fire.firestore()
        .collection('students').doc('year').collection(newfireYear)
        .onSnapshot(function(data){

        setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));});
        document.getElementById('studentsCard').style.display='block';
        setLoading(true)
        }
    }
    function getdate (){
        return new Date().getFullYear();
    }
    // const styles = StyleSheet.create({
    //     page: {
    //       flexDirection: 'row',
    //       backgroundColor: '#E4E4E4'
    //     },
    //     section: {
    //       margin: 10,
    //       padding: 10,
    //       flexGrow: 1
    //     }
    //   });
    // const MyDocument = () => (
    //     <Document>
    //       <Page size="A4" style={styles.page}>
    //         <View style={styles.section}>
    //           <Text>Section #1</Text>
    //         </View>
    //         <View style={styles.section}>
    //           <Text>Section #2</Text>
    //         </View>
    //       </Page>
    //     </Document>
    //   );

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

            <div id='frontheading' style={{display:'block'}} >
            <div className={sty.controlpanelfont}>
                <Container fluid='xl'>
                <Container fluid='xl' className={containerStyle.containerfront}>
                <Row xs={1} md={3} style={{textAlign:'center'}}>
                    <Col md={2}>
                    {/* <img src='https://firebasestorage.googleapis.com/v0/b/collect-db.appspot.com/o/website-images%2F1619426245557.png?alt=media&token=5583d30c-589d-4141-ac30-37ce01b1ead1' width={100}/> */}
                    <img src={eielogo} width={120}/>
                    </Col>
                    <Col md={6}><h4 style={{color:'#00008B',fontSize:27}}>⚡Electronics and Instrumentation Engineering</h4><h5 style={{color:'#800000',fontSize:23}}>🏫Acharya Prafulla Chandra Roy Polytechnic</h5>
                    <span style={{fontSize:18}}>🏠Address: P.0.-Jadavpur University, Kolkata-700032</span>
                    </Col>
                    <Col >
                    📮<a href="mailto:apcraypolytechnic@gmail.com" target='_blank'>apcraypolytechnic@gmail.com</a><br/>📮<a href='mailto:officeapcray@gmail.com' target='_blank'>officeapcray@gmail.com</a><br/>☎️<a href='tel:03324146241'>(033) 2414 6241</a>/Fax no. 24146164
                    <br/>
                    <span style={{fontSize:18}}>visit our <a href='https://www.facebook.com/groups/192098204773124' target='_blank'><span style={{fontSize:20,paddingBottom:10}}><sup><SiFacebook/></sup></span> facebook</a> group</span>
                    </Col>
                </Row>
                </Container>
                </Container>
            </div>
                <Container fluid='xl' className={sty.controlpanelfont}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                {/* <Navbar.Brand href="#home" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('frontimage').style.display='block';}}> Electronics</Navbar.Brand> */}
                
                
                    <Nav className="mr-auto">
                    <Nav.Link href="#home" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='block';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='none';document.getElementById('frontimage').onload=(fire.firestore().collection('slideshow').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));}}><span className={navstyle.navi}><span style={{color:'white'}}>🏠</span>Home </span></Nav.Link>
                    <Nav.Link href="#preface" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='block';}}><span className={navstyle.navi}><span style={{color:'white'}}>💖</span>Preface</span></Nav.Link>
                    <Nav.Link href="#about-eie" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='block';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='none';document.getElementById('frontimage').onload=(fire.firestore().collection('slideshow').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));}}><span className={navstyle.navi}><span style={{color:'white'}}>📜</span>About</span></Nav.Link>
                    
                    <NavDropdown title={academic()} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#academics/students" onClick={()=>{setTasks([]);document.getElementById('googlemap').style.display='none';document.getElementById('btngroup').style.display = 'block';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('preface').style.display='none';fire.firestore().collection('students').onSnapshot(function(data){
        setTasksyears(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
        });}}>🎓Our Students</NavDropdown.Item>
                        <NavDropdown.Item href="#academics/teachers" onClick={()=>{setTasks([]);fire.firestore().collection('teachers').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}); document.getElementById('btngroup').style.display = 'none';document.getElementById('preface').style.display='none';document.getElementById('teachersdescrp').style.display='block';document.getElementById('googlemap').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='block';}}>👩‍🏫Our Teachers</NavDropdown.Item>

                    </NavDropdown>
                    
                    <Nav.Link href="#gallery" onClick={()=>{setModalShowGallery(true)}}><span className={navstyle.navi}><span style={{color:'white'}}>🌄</span>Gallery</span></Nav.Link>
                    <Nav.Link href="#events-eie" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='block';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='none';document.getElementById('frontimage').onload=(fire.firestore().collection('slideshow').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));}}><span className={navstyle.navi}><span style={{color:'white'}}>📢</span>Events</span></Nav.Link>
                    <Nav.Link href="mailto:alokmondal70@gmail.com" target='_blank'><span className={navstyle.navi}><span style={{color:'white'}}>📧</span>Feedback</span></Nav.Link>
                    <Nav.Link href="#recruiters" onClick={() => {setModalShowRecrt(true);}}><span className={navstyle.navi}><span style={{color:'white'}}>💼</span>Our Recruiters</span></Nav.Link>
                    <Nav.Link href="#adminlogin" onClick={() => {setTasks([]);setModalShow(true);}}><span className={navstyle.navi}><span style={{color:'whitesmoke'}}>🔑</span>Admin Login</span></Nav.Link>
                    {/* <Nav.Link href="#collegecontact" onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='block';document.getElementById('preface').style.display='none';}}><FcVoicePresentation/>Contact</Nav.Link> */}
                    {/* <Nav.Link href="#developercontact" onClick={()=>{<PDFReader url="127.31.32.1:3000/test.pdf"/>}}><AiFillGithub/>Developer Contact</Nav.Link>                 */}
                    </Nav>
                    {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav> */}
                

                </Navbar.Collapse>
                </Navbar>
                </Container>

            </div>

            

            <div id='front' style={{display:'block'}} 
            // onload={(fire.firestore().collection('video')
            // .onSnapshot(function(data){ 
            // setTasksVid(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));setcountVid(data.size);
            
            //     videotxt();}))}
            
                >
            
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
                        <a href='http://www.apcraypolytechnic.in/' target='_blank'>Acharya Prafulla Chandra Roy Polytechnic</a>, a diploma level Government Technical Institute named
                        after the famous Indian scientist <a href='https://en.wikipedia.org/wiki/Prafulla_Chandra_Ray' target='_blank'>Acharaya Prafulla Chandra Roy</a> (2 August 1861 – 16 June 1944). It was established long back at
                        1950 and formerly known as Jadavpur Polytechnic. It is located at 188, Raja Subodh Chandra Mallick
                        Road, Jadavpur, Kolkata,  West Bengal - 700032. It is affiliated to the <a href='https://webscte.co.in/' target='_blank'>West Bengal State Council for
                        Technical and Vocational Education</a> and approved by All India Council for Technical Education (<a href='https://www.aicte-india.org/' target='_blank'>AICTE</a>).
                        <br/><br/>

                        <b>Department of Electronics & Instrumentation Engineering</b> is one of the six departments of <a href='http://www.apcraypolytechnic.in/' target='_blank'> A.P.C.
                        Roy Polytechnic</a>. <b>This is a specialised branch of engineering which deals with the major  industrial
                        sectors including automation and control.</b> It also deals with major Electronics manufacturing and IT industries,
                        including core economic industries such as power, steel plants etc.
                        The institute provides quality lab and outstanding faculty to its students.
                        Mainly emphasize on growth of practical knowledge along with theoretical understanding.
                        {/* <br/><br/> */}
                        </p>
                        <hr />

                        </Alert>
                        {/* <a href='http://www.apcraypolytechnic.in/' target='_blank'>Acharya Prafulla Chandra Roy Polytechnic</a>, a diploma level Government Technical Institute named
                        after the famous Indian scientist <a href='https://en.wikipedia.org/wiki/Prafulla_Chandra_Ray' target='_blank'>Acharaya Prafulla Chandra Roy</a> (2 August 1861 – 16 June 1944). It was established long back at
                        1950 and formerly known as Jadavpur Polytechnic. It is located at 188, Raja Subodh Chandra Mallick
                        Road, Jadavpur, Kolkata,  West Bengal - 700032. It is affiliated to the <a href='https://webscte.co.in/' target='_blank'>West Bengal State Council for
                        Technical and Vocational Education</a> and approved by All India Council for Technical Education (<a href='https://www.aicte-india.org/' target='_blank'>AICTE</a>).
                        <br/><br/>

                        <b>Department of Electronics & Instrumentation Engineering</b> is one of the six departments of <a href='http://www.apcraypolytechnic.in/' target='_blank'> A.P.C.
                        Roy Polytechnic</a>. <b>This is a specialised branch of engineering which deals with the major  industrial
                        sectors including automation and control.</b> It also deals with major Electronics manufacturing and IT industries,
                        including core economic industries such as power, steel plants etc.
                        The institute provides quality lab and outstanding faculty to its students.
                        Mainly emphasize on growth of practical knowledge along with theoretical understanding.
                        <br/><br/> */}

                        </p></Col>
                        <Col sm={4}>
                        
                        <img
                        className="d-block w-100"
                        // src='https://firebasestorage.googleapis.com/v0/b/collect-db.appspot.com/o/website-images%2F1619426245557.png?alt=media&token=5583d30c-589d-4141-ac30-37ce01b1ead1' 
                        src={eielogo}
                        />
                        
                        </Col>
                        
                        
                    </Row>
                </Container>
                </Container>
            </div>
            {/* <div>
            <PDFViewer>
    <MyDocument />
  </PDFViewer>
            </div> */}
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
                        <b style={{color:'#00008B'}}> academics🎓, robotics🦾, sports⚽️</b> etc. Some of the achievements are :-
                        Champion in 2015 &
                        Stood 2nd position in 2017 at <a href='https://portal.e-yantra.org/' target='_blank'>E-yantra Robotics Competition(E-YRC)</a>, IIT Bombay.
                        Every year the magazine <b style={{color:'#00008B'}}>''UTTORON''</b> is published by the department and every year farewell  ceremony is
                        held for our final year students naming <b style={{color:'#00008B'}}>''ANTAHIN''</b>.  A Cultural programme is also arranged every year
                        on the Teachers' Day.
                        </p>
                        <hr />

                        </Alert>
                        
                        {/* The students of the department achieved many milestones from time to time in various field like 
                        <b style={{color:'blue'}}> academics <FcGraduationCap/>, robotics <FaRobot/>, sports <FcSportsMode/></b> etc. Some of the achievements are :-
                        Champion in 2015 &
                        Stood 2nd position in 2017 at <a href='https://portal.e-yantra.org/' target='_blank'>E-yantra Robotics Competition(E-YRC)</a>, IIT Bombay.
                        Every year the magazine <b style={{color:'blue'}}>''UTTORON''</b> is published by the department and every year farewell  ceremony is
                        held for our final year students naming <b style={{color:'blue'}}>''ANTAHIN''</b>.  A Cultural programme is also arranged every year
                        on the Teachers' Day. */}
                        </p>
                        <hr/>
                    </IconContext.Provider>
                </Container>
                </Container>
            </div>

            
            <div id='events-eie' className={sty.controlpanelfont}
            // onload={(fire.firestore().collection('video')
            // .onSnapshot(function(data){ 
            // setTasksVid(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));setcountVid(data.size);
            
            //     videotxt();}))}
            >
                <br/>
                <Container fluid='xl'>
                <Container fluid='xl' className={containerStyle.containerfront}>
                        
                        <h1 style={{textAlign:'center'}} className={containerStyle.borderbottomstyle}>📢Explore Events</h1>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title={countz}>
                        {/* <h1>Welcome to DEIE Events</h1> */}
                        <div style={{textAlign:'center',fontSize:16}}>
                        <Alert variant="success">
                        <Alert.Heading>Hey, welcome to DEIE Events</Alert.Heading>
                        <p style={{textAlign:'justify'}}>
                        Enjoy yourself with the most entertaining, passionate events with us. Every year our college
                        organises freshers (AOHVAAN), fest (METAMORPHOSIS), sports (POLYMPIC). Open Video tab to watch youtube 
                        videos and if there is any notice then it will be seen as notification.
                        </p>
                        <hr />

                        </Alert>
                        <hr />
                        </div>
                        </Tab>
                        {/* <div onClick={()=>{setcounty(<span><span style={{color:'red',fontSize:20}}><IoLogoYoutube/> </span>Videos</span>);}}> */}
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
                        {/* </div> */}
                        <Tab eventKey="notice" title={countx} onClick={()=>{setcountx(<span><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span>Notice</span>);}}>
                            {/* <Notice/> */}
                            <div id='nonotice' style={{display:'none'}}>
                            <Alert variant="danger">
                            <Alert.Heading>Sorry! there is no new Notice</Alert.Heading>
                            <p>
                                Please come back later. If you think this is a mistake please contact with Administrator(s).
                            </p>
                            </Alert></div>
                            <CardColumns>
                                {tasksNot.map(spell => (
                                    
                                <Card border='primary'
                                    className="text-center p-1"
                                    style={{backgroundColor: colors[Math.floor(Math.random() * 100)]}}
                                >
                                    <div className={containerStyle.fonts}>    
                                    <Card.Img src={spell.url} />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5><b>{spell.email}</b></h5>
                                        {spell.status1}
                                        </ListGroup.Item>
                                        {/* <ListGroup.Item><Card.Link><FcAddressBook/> {spell.email}</Card.Link></ListGroup.Item> */}
                                        {/* <ListGroup.Item><FcPhone/> {spell.phone}</ListGroup.Item> */}
                                    </ListGroup>
                                    </div>
                                    
                                </Card>
                                ))}
                            </CardColumns>
                        </Tab>
                        
                        </Tabs>

                    {/* <iframe className="d-block w-100" width="auto" height="300" src="https://www.youtube.com/embed/mvqpA_SsFrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    <iframe className="d-block w-100" width="auto" height="480" src="https://www.youtube.com/embed/TMMC9gMXwE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </Container>
                </Container>
            </div>


            </div>
            
            
            <div id='btngroup' style={{display:'none',textAlign:'center'}}>
            
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
                <Button variant='danger' style={{width:80}} onClick={studentoptselect}>Search</Button>
                </Form>
                </Col></Row>

            {/* <Row>
                <Col xs={6} md={3}>
                
                <Button id='students2021' size='lg'><Badge variant="light">2021</Badge> Passout</Button>
                </Col>
                <Col xs={6} md={3}>
                
                <Button id='students2020' variant='danger' size='lg'><Badge variant="light">2020</Badge> Passout</Button>
                </Col>
            <br/><br/><br/>
                <Col xs={6} md={3}>
                
                <Button id='students2019' variant='warning' size='lg'><Badge variant="light">2019</Badge> Passout</Button>
                </Col>
                <Col xs={6} md={3}>
                
                <Button id='students2018' variant='info' size='lg'><Badge variant="light">2018</Badge> Passout</Button>
                </Col>
            </Row> */}
                <br/>

            </Container>
            </Container>
            </div>
            <div id='teachersdescrp' style={{display:'none',textAlign:'center'}} className={sty.controlpanelfont}>
                <Container fluid='xl'>
                    <br/>
                    <Alert variant="success">
                    <Alert.Heading>Faculty Members of Electronics and Instrumentation Engineering</Alert.Heading>
                    <p>
                        Acharya Prafulla Chandra Roy Polytechnic introducing their respected Teachers of Department
                        of Electronics and Instrumentation Engineering (DEIE)
                    </p>
                    <hr />    
                    </Alert>
                </Container>
            </div>
            <div id='studentsCard' style={{display:'none'}}>
                <Container fluid='xl'>
                {/* <Spinner animation="border" />  */}
                    {/* {loading?( */}
                        <CardColumns>
                        {tasks.map(spell => (
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
            <div id='preface' style={{display:'none'}}>
                    <Preface/>
            </div>
            <div id="googlemap" style={{display:'none'}}>
                <Googlemaps/>
            </div>
            <div id='frontfooter' style={{display:'block'}} className={sty.controlpanelfont}>
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
                        <h7><Nav.Link className={navstyle.navifooter} href='/' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='block';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='none';document.getElementById('frontimage').onload=(fire.firestore().collection('slideshow').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));}}> <span >&gt; Home</span> </Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='#about-eie' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='block';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='none';document.getElementById('frontimage').onload=(fire.firestore().collection('slideshow').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));}}> <span >&gt; About Us</span> </Nav.Link></h7>
                        {/* <h7><Nav.Link className={navstyle.navifooter} href='#preface' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='block';}}>&gt; Preface</Nav.Link></h7> */}
                        <h7><Nav.Link className={navstyle.navifooter} href='#academics/students' onClick={()=>{setTasks([]);document.getElementById('googlemap').style.display='none';document.getElementById('btngroup').style.display = 'block';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('preface').style.display='none';fire.firestore().collection('students').onSnapshot(function(data){
        setTasksyears(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
        });}}>&gt; Students</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='#academics/teachers' onClick={()=>{setTasks([]);fire.firestore().collection('teachers').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}); document.getElementById('btngroup').style.display = 'none';document.getElementById('preface').style.display='none';document.getElementById('teachersdescrp').style.display='block';document.getElementById('googlemap').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='block';}}>&gt; Teachers</Nav.Link></h7>
                        
                        </div>
                        <div>
                        
                        <h7><Nav.Link className={navstyle.navifooter} href='#gallery' onClick={()=>{setModalShowGallery(true)}}>&gt; Gallery</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='#events-eie' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='block';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='none';document.getElementById('frontimage').onload=(fire.firestore().collection('slideshow').onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));}}>&gt; Events</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='#recruiters' onClick={() => {setModalShowRecrt(true);}}>&gt; Recruiters</Nav.Link></h7>
                        <h7><Nav.Link className={navstyle.navifooter} href='#preface' onClick={()=>{setTasks([]);document.getElementById('btngroup').style.display = 'none';document.getElementById('teachersdescrp').style.display='none';document.getElementById('front').style.display='none';document.getElementById('studentsCard').style.display='none';document.getElementById('googlemap').style.display='none';document.getElementById('preface').style.display='block';}}>&gt; Why this website?</Nav.Link></h7>
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
                    
                    <h2 style={{color:'#4169E1'}} >✒️Conceptualist</h2>
                    <div className={containerStyle.footerconcept}>
                    <p> <h4 style={{display:'flex'}}>Alok Mondal 
                    <img src={alok} width={28} style={{borderRadius:20}}/>
                     </h4>
                    <a href='https://www.facebook.com/alok.mondal.56481379' target='_blank' style={{color:'white'}}><FaFacebook /></a>&nbsp;<FaLinkedinIn/>&nbsp;<FaWhatsapp/>&nbsp;<MdEmail/>&nbsp;<br/> Electronics & Instrumentation Engineering<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032<br/></p>
                    </div>
                    </Col>


                
                    <Col sm ><br/>
                    {/* <hr style={{borderWidth:5,borderColor:'#FF4500'}}></hr> */}
                    
                    <h2 style={{color:'#4169E1'}} >👨‍💻Developed by</h2>
                    <div className={containerStyle.footerconcept}>
                        <p>
                     <h4>Subham Das  &lt;/&gt;</h4><a href='https://www.facebook.com/subham.das.908347' target='_blank' style={{color:'white'}}><FaFacebook /></a>&nbsp;<FaLinkedinIn/>&nbsp;<FaWhatsapp/>&nbsp;<MdEmail/>&nbsp;<FaGithub/>&nbsp;<FaHackerrank/><br/> Computer Science & Technology<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032</p>
                    </div>
                    </Col>
                </Row>
                
                <p></p><br/>
                <p style={{fontSize:13}}>©️ This Web Application doesn't collect any personal data from anyone. All the information given in this website are collected from legal source. No data is used without it's owner's permission. Only the selected Admin(s) will be given access to Admin Panel every year.</p>
                <p style={{textAlign:'center'}}><a href=''>Copyright © {getdate()}</a>. All rights reserved.</p>
            </Container>
            </Container>
            </div>
            </div>
            
            

            <ScrollUpButton />
            <Progressbar />
            

            <Login
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
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

export default FrontPage
