import React,{useEffect,useState} from 'react'
import fire from './config/fire';
import storage from './config/fire';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader'
import FadeLoader from 'react-spinners/FadeLoader'
import sty from './css/adminFormImg.module.css';
import containerStyle from './AdminContainer.module.css'
import {Modal, Button, Form, Col, Row, ProgressBar, Spinner,Toast,Tab,Tabs,Nav,Card,Alert, Container,Badge} from 'react-bootstrap';
import { FcPhone, FcAddressBook, FcContacts, FcPlus, FcAddDatabase,FcGallery, FcGraduationCap,FcCellPhone, FcAddImage, FcApproval, FcSynchronize, FcPhotoReel, FcStackOfPhotos, FcConferenceCall} from 'react-icons/fc';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {TiWarning} from 'react-icons/ti';
import PulseLoader from 'react-spinners/PulseLoader'
import avt from './avatar.png';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import ImageIcon from '@material-ui/icons/Image';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EventNoteIcon from '@material-ui/icons/EventNote';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

// import AdminCreateSuccessToast from './AdminCreateSuccessToast';

function AdminForm(props) {
  const [furl, setfurl] = React.useState('');
  const [taskst, setTaskst] = React.useState([]);
  const [tasksyears, setTasksyears] = React.useState([]);
    const [newTask, setnewTask] = React.useState('');
	  const [newEmail, setnewEmail] = React.useState('');
    const [newPhone, setnewPhone] = React.useState('');
    const [newStatus1, setnewStatus1] = React.useState('');
    const [newStatus2, setnewStatus2] = React.useState('💼');
    const [newStatus3, setnewStatus3] = React.useState('🎓');
    const [newimUrlS, setnewImUrlS] = React.useState('');


    const [newkhanki, setnewKhanki] = React.useState(null);


    const [newTaskforT, setnewTaskforT] = React.useState('');
	  const [newEmailforT, setnewEmailforT] = React.useState('');
    const [newPhoneforT, setnewPhoneforT] = React.useState('');
    const [newStatus1forT, setnewStatus1forT] = React.useState('');
    const [newimUrlT, setnewImUrlT] = React.useState('');

    const [newEmailforSS, setnewEmailforSS] = React.useState('');
    const [newimUrlSS, setnewImUrlSS] = React.useState('');

    const [newEmailforG, setnewEmailforG] = React.useState('');
    const [newimUrlG, setnewImUrlG] = React.useState('');

    const [newEmailforR, setnewEmailforR] = React.useState('');
    const [newimUrlR, setnewImUrlR] = React.useState('');

    const [newEmailforN, setnewEmailforN] = React.useState('');
    const [newStatus1forN, setnewStatus1forN] = React.useState('');
    const [newimUrlN, setnewImUrlN] = React.useState('');

    const [newEmailforV, setnewEmailforV] = React.useState('');
    const [newimUrlV, setnewImUrlV] = React.useState(null);
    
    const [newEmailforM, setnewEmailforM] = React.useState('');
    const [newimUrlM, setnewImUrlM] = React.useState(null);

    const [newYear, setnewYear] = React.useState('');
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = React.useState(null)
    const [imageAsUrl, setImageAsUrl] = React.useState(allInputs)
    const [progress, setProgress] = React.useState(0)
    const [show, setShow] = React.useState(false);
    const [newfireYear, setNewFireYear] = React.useState('');
    const [newStudentYear, setNewStudentYear] = React.useState('');
    const [tab, setTab] = React.useState('');
    const [emailerror, setemailerror] = useState('');
    const [loading, setLoading] = useState(false)
    const [yearDeleteModal, setYearDeleteModal] = useState(false)
    var flag=false
    var curr_y = ''
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    function gettime(){
      return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
      }
    function getdate(){
      return new Date().getDate()+ " "+ months[new Date().getMonth()]+","+ new Date().getFullYear();
      }
    const onCreat = (e)=>{
      e.preventDefault()
      if (newStudentYear==''){
        alert('require a year')
      }
      else{
      const db = fire.firestore();

      db.collection('students').doc('year').collection(newStudentYear).doc(newStudentYear).set({
        name:'John Doe',
        email:'example@example.com',
        phone:'XXXXXXXXXX',
        status1:'about 1',
        status2:'about 2',
        status3:'about 3',
        url:'https://drive.google.com/uc?export=download&id=1lVtW298rVjnNJxH-a-TDdi4GMIQW142d'
      });
      db.collection('students').doc(newStudentYear).set({
        year_arr:newStudentYear
      })
      fire.firestore().collection('activities').doc()
      .set({task:fire.auth().currentUser.email+' created a new year '+newStudentYear+' in Students database in Micro Control Panel.',
      color:'info',
      date:getdate(),
		  time:gettime(),
      timestamp:new Date().valueOf()})
      setNewStudentYear('')
    }
    }
    const onDelete = () =>{
      // e.preventDefault()
      fire.firestore().collection('activities').doc()
      .set({task:fire.auth().currentUser.email+' deleted an existing year '+newfireYear+' in Students database in Micro Control Panel.',
      color:'danger',
      date:getdate(),
		time:gettime(),
      timestamp:new Date().valueOf()})
      const db = fire.firestore();
      db.collection('students').doc(newfireYear).delete()
      
    }

    const onAdd=()=>{
      console.log('https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65))
      // setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65))
      console.log(newkhanki)
        if(tab=="student"){setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65));document.getElementById('myimgS').src = 'https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65);;}
        else if(tab=="teacher"){setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlT.slice(32, 65));document.getElementById('myimgT').src = 'https://drive.google.com/uc?export=download&id='+newimUrlT.slice(32, 65);}
        else if(tab=="slideshow"){setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlSS.slice(32, 65));document.getElementById('myimgSS').src = 'https://drive.google.com/uc?export=download&id='+newimUrlSS.slice(32, 65);}
        else if(tab=="gallery"){setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlG.slice(32, 65));document.getElementById('myimgG').src = 'https://drive.google.com/uc?export=download&id='+newimUrlG.slice(32, 65);}
        else if(tab=="recruiter"){setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlR.slice(32, 65));document.getElementById('myimgR').src = 'https://drive.google.com/uc?export=download&id='+newimUrlR.slice(32, 65);}
        else if(tab=="notice"){setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlN.slice(32, 65));document.getElementById('myimgN').src = 'https://drive.google.com/uc?export=download&id='+newimUrlN.slice(32, 65);}
    }

    const onCreate = (e) =>{
      e.preventDefault()
      if(tab=="student"){if(newEmail==''){document.getElementById('emailerr').style.display='block';document.getElementById('emailf').style.borderColor='red';

    }else{
      // if(newimUrlS.startsWith('https://drive.google.com/file/')){
              
              Create()
            // }
            // else{alert('something wrong in this link!')}
      }}
      else if(tab=="teacher"){if(newEmailforT==''){document.getElementById('emailerrt').style.display='block';document.getElementById('emailft').style.borderColor='red';}else{Create()}}
      else if(tab=="slideshow"){if(newEmailforSS==''){document.getElementById('emailerrs').style.display='block';document.getElementById('emailS').style.borderColor='red';}else{Create()}}
      else if(tab=="gallery"){if(newEmailforG==''){document.getElementById('emailerrg').style.display='block';document.getElementById('emailG').style.borderColor='red';}else{Create()}}
      else if(tab=="recruiter"){if(newEmailforR==''){document.getElementById('emailerrr').style.display='block';document.getElementById('emailR').style.borderColor='red';}else{Create()}}
      else if(tab=="notice"){if(newEmailforN==''){document.getElementById('emailerrn').style.display='block';document.getElementById('emailN').style.borderColor='red';}else{Create()}}
      else if(tab=="video"){if(newEmailforV==''){document.getElementById('emailerrv').style.display='block';document.getElementById('emailV').style.borderColor='red';}else{Create()}}
      else if(tab=="magazine"){if(newEmailforM==''){document.getElementById('emailerrm').style.display='block';document.getElementById('emailM').style.borderColor='red';}else{Create()}}
    }

    function Create(){

      
      // e.preventDefault()
      // console.log('image: ', imageAsFile)
      
      // if(imageAsFile === '') {
      //   console.error('not an image, the image file is a ')
      // }
      // const uploadTask = fire.storage().ref('/Images/'+newEmail+'.png').put(imageAsFile);
      
      // uploadTask.on('state_changed', 
      // (snapShot) => {
        
      //   const progress = Math.round(
      //     (snapShot.bytesTransferred/snapShot.totalBytes)*100
      //   );
      //   console.log(snapShot)
      //   if(progress==100){document.getElementById('spinner').style.display='none';}else{document.getElementById('spinner').style.display='block';}
      //   setProgress(progress);
      // }, (err) => {
        
      //   console.log(err)
      // }, () => {
        // document.getElementById('spinner').style.display='none';
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        // fire.storage().ref('Images').child(newEmail+'.png').getDownloadURL()
        //  .then(fireBaseUrl => {
        //  setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))

          const db = fire.firestore();
          if(tab=='student'){
            
          fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' added a new student '+newTask+' in the year '+newfireYear+' in Students database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
          db.collection('students').doc('year').collection(newfireYear).doc(newEmail).set({name:newTask,email:newEmail,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:newkhanki})
          document.getElementById('myimgS').src=document.getElementById('myimg')
          setnewTask('')
          setnewEmail('')
          setnewPhone('')
          setnewStatus1('')
          setnewStatus2('💼')
          setnewStatus3('🎓')
          setnewImUrlS('')
          setnewKhanki('')
          }
          else if(tab=='teacher'){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' added a new teacher '+newTaskforT+' in Teachers database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('teachers').doc(newEmailforT).set({name:newTaskforT,email:newEmailforT,phone:newPhoneforT,status1:newStatus1forT,year:1,url:newkhanki})
            document.getElementById('myimgT').src=document.getElementById('myimg')
            setnewTaskforT('')
            setnewEmailforT('')
            setnewPhoneforT('')
            setnewStatus1forT('')
            setnewImUrlT('')
            setnewKhanki('')
          }
          else if(tab=="slideshow"){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' added a new slideshow picture '+newEmailforSS+' in Slideshow database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('slideshow').doc(newEmailforSS).set({email:newEmailforSS,year:2,url:newkhanki})
            document.getElementById('myimgSS').src=document.getElementById('myimg')
            setnewEmailforSS('')
            setnewImUrlSS('')
            setnewKhanki('')
          }
          else if(tab=="gallery"){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' added a new gallery image '+newEmailforG+' in Gallery database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('gallery').doc(newEmailforG).set({email:newEmailforG,year:3,url:newkhanki})
            document.getElementById('myimgG').src=document.getElementById('myimg')
            setnewEmailforG('')
            setnewImUrlG('')
            setnewKhanki('')
          }
          else if(tab=="recruiter"){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' added a new recruiter '+newEmailforR+' in Recruiter database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('recruiters').doc(newEmailforR).set({email:newEmailforR,year:4,url:newkhanki})
            document.getElementById('myimgR').src=document.getElementById('myimg')
            setnewEmailforR('')
            setnewImUrlR('')
            setnewKhanki('')
          }
          else if(tab=="notice"){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' published a new notice '+newEmailforN+' in Notice database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('notice').doc(newEmailforN).set({email:newEmailforN,status1:newStatus1forN,year:5,url:newkhanki})
            document.getElementById('myimgN').src=document.getElementById('myimg')
            setnewEmailforN('')
            setnewStatus1forN('')
            setnewImUrlN('')
            setnewKhanki('')
          }
          else if(tab=="video"){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' added a new youtube video '+newEmailforV+' in Video database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('video').doc(newEmailforV).set({email:newEmailforV,year:6,url:newimUrlV})
            // document.getElementById('myimgN').src=document.getElementById('myimg')
            setnewEmailforV('')
            setnewImUrlV('')
          }
          else if(tab=="magazine"){
            fire.firestore().collection('activities').doc()
          .set({task:fire.auth().currentUser.email+' published a new magazine '+newEmailforM+' in Magazine database in Micro Control Panel.',
          color:'info',
          date:getdate(),
		time:gettime(),
          timestamp:new Date().valueOf()})
            db.collection('magazines').doc(newEmailforM).set({email:newEmailforM,year:8,url:newimUrlM})
            // document.getElementById('myimgN').src=document.getElementById('myimg')
            setnewEmailforM('')
            setnewImUrlM('')
          }


          
          // setnewYear('')
          // document.getElementById('myimg').src=document.getElementById('myimg')
          document.getElementById('fcaddimage').style.display='block'
          setfurl('')
          // fire.storage().ref('Images').child(newEmail+'.png').delete().then(()=>{
          //   console.log('file delte suucess')
          // }).catch((error)=>{})
        //  })
    
  // })
      

	  };
    

    const handleImageAsFile = (e) => {
      
      if( e.target.files && e.target.files[0] ){
        const image = e.target.files[0];
        setfurl(URL.createObjectURL(e.target.files[0]))
        console.log(furl)
        if(tab=="student"){document.getElementById('myimgS').src = URL.createObjectURL(e.target.files[0])}
        else if(tab=="teacher"){document.getElementById('myimgT').src = URL.createObjectURL(e.target.files[0])}
        else if(tab=="slideshow"){document.getElementById('myimgSS').src = URL.createObjectURL(e.target.files[0])}
        else if(tab=="gallery"){document.getElementById('myimgG').src = URL.createObjectURL(e.target.files[0])}
        else if(tab=="recruiter"){document.getElementById('myimgR').src = URL.createObjectURL(e.target.files[0])}
        else if(tab=="notice"){document.getElementById('myimgN').src = URL.createObjectURL(e.target.files[0])}

        setImageAsFile(imageFile => (image))
      }
      // document.getElementById('myimg').src = geturl;
    }

    useEffect(()=>{
      // fire.firestore().collection('students').doc('year').collection('2023').onSnapshot(function(data){
			// 	console.log(data)
			// 	setTaskst(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			// });

      fire.firestore().collection('students').orderBy("year_arr","desc"). onSnapshot(function(data){
        setTasksyears(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
      });
    //   setTimeout(() => {
    //     setLoading(false)
    // }, 3000);
    
      
    },[])

    // const handleFireBaseUpload = e => {
    //   e.preventDefault()
    // console.log('start of upload')

    // if(imageAsFile === '') {
    //   console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    // }
    // const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

    // uploadTask.on('state_changed', 
    // (snapShot) => {

    //   console.log(snapShot)
    // }, (err) => {

    //   console.log(err)
    // }, () => {
      
    //   storage.ref('images').child(imageAsFile.name).getDownloadURL()
    //    .then(fireBaseUrl => {
    //      setImageAsUrl(prevObject => ({...prevObject, url: fireBaseUrl}))
    //    })
    // })
    // }
    function toTitleCase(str) {
      return str.replace(/\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }
    
    return (
        <div>
            
            
    <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={sty.controlpanelfont}
      >
        
<Container fluid='xl' >
        <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
       <div style={{display:'flex'}}><FcApproval/><span style={{color:'#2F4F4F',fontSize:30}}><b>Micro Control Panel</b></span> <Badge pill variant='warning' style={{height:25}}>Beta</Badge></div>
        </Modal.Title>
      </Modal.Header>
        
      <Tabs defaultActiveKey="home" transition={false} >
          <Tab eventKey="home" title={<Tooltip title='Home'><HomeIcon fontSize="large"/></Tooltip>}>
            <div style={{textAlign:'center'}}>
          <Alert variant="warning">
            <Alert.Heading>Welcome to Micro Control Panel 😎</Alert.Heading>
            <p>
                Explore the most powerful, advanced and integrated Micro Control Panel of Administration Panel. please
                go through <a href='#' >Documentation</a> before using this Super Cool tool. 
            </p>
            <hr />
            <p className="mb-0">
            <u>Features:</u> Modified Control Panel have,
                <br/>📌 Control Whatever you want<br/>
                📌 Easy to handle and Enjoy cool experience<br/>
                
            </p>
            </Alert>
            </div>
          </Tab>
          <Tab eventKey="students" title={<Tooltip title='Students'><LocalLibraryIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('student')}>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="202" >
              
            <Row style={{paddingTop:10}}>
              {/* <div > */}
              <Col sm={3} md={2} >
                <div className={sty.regformborder} style={{overflowY:'scroll',height:200}}>
              {tasksyears.map(spell=>(
                <Nav variant="pills" className="flex-column">
                      <Nav.Item  onClick={()=>{setLoading(true);setTimeout(() => {
            setLoading(false);
            document.getElementById('tab').style.display='block';
        }, 1000); document.getElementById('tab').style.display='none';document.getElementById('tabmsg').style.display='none'; setNewFireYear(spell.year_arr);}}>
                        <Nav.Link eventKey={spell.year_arr}>{spell.year_arr}</Nav.Link>
                      </Nav.Item>
                </Nav>
              ))}
             
              </div>
              <form>
                <input type='number' placeholder="New Year..." value={newStudentYear} onChange={e=> {setNewStudentYear(e.target.value)}} style={{width:102}}></input>
              </form>
              <div ><Button style={{width:102}} variant="primary" onClick={onCreat} >Create </Button></div>
              </Col>
              {/* </div> */}
              <Col sm={9}>
<div id="tabmsg" style={{display:'block',textAlign:'center'}}>
            <Alert variant="primary">
            <Alert.Heading>Hey Admin, have a great day 👋</Alert.Heading>
            <p>
                Welcome to Students section of Micro Control Panel of Administrator Panel. Tap on the year of the left side
                or Create New year to get started. Enjoy... 😉
            </p>
            <span style={{fontSize:30,color:'red'}}><TiWarning/></span>
            <p className="mb-0">
                 Please maintain the follwing...
                <br/>1. Dont use other characters in the Create Year as it only accepts number.<br/>
                2. Delete Year only if mistype as it remove all student data.
            </p>
            </Alert>
</div>
<div id='load' >
{loading&&
      <div style={{textAlign:'center', position:'absolute',
      paddingTop:100, justifyContent:'center',width:600,display:'flex',alignItems:'center'}}> <FadeLoader /></div>
      }
        {/* //   overlay: (base) => ({ */}
        {/* //     ...base,
        //     background: 'rgba(128, 128, 128, 0.5)',
        //     width:'530px',
            
        //   }),
        //   spinner: (base) => ({ */}
        {/* //     ...base,
        //     width: '100px',
        //     '& svg circle': { */}
        {/* //       stroke: 'rgba(255, 0, 0, 0.5)'
        //     }
        //   })
         
        // }} */}
        
    
</div>
<div id="tab" style={{display:'none'}}>

      
    
{/* <PulseLoader color='#36D7B7' loading={loading}/> */}
<div >
  <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
    <Row className="justify-content-md-center" style={{marginBottom:10}} className={sty.boxshadow}>
      <Col xs md={6} style={{backgroundColor:'#008080',width:330}} className={containerStyle.grad}>
    <Form.Group>
      <br />
      <div style={{display:'flex'}}><h2><FcContacts/></h2><span style={{paddingTop:7}}><Form.Control id="name" placeholder="Full Name" type="text" value={newTask} onChange={e=> setnewTask(toTitleCase(e.target.value))} /></span></div>
      <div style={{display:'flex'}}><h2><FcAddressBook/></h2><span style={{paddingTop:7}}><Form.Control id="emailf" placeholder="Email Address" type="text" value={newEmail} onChange={e=> {setnewEmail(e.target.value);document.getElementById('emailerr').style.display='none';document.getElementById('emailf').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
      <p id="emailerr" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Email Address Required!</p>
      <div style={{display:'flex'}}><h2><FcCellPhone/></h2><span style={{paddingTop:7}}><Form.Control id="phone" placeholder="Phone Number" type="text" value={newPhone} onChange={e=> setnewPhone(e.target.value)}/></span></div>
      <div style={{display:'flex'}}><h2><FcAddDatabase/></h2><span style={{paddingTop:7}}><Form.Control id="status1" placeholder="About 1" type="text" value={newStatus1} onChange={e=> setnewStatus1(e.target.value)}/></span></div>
      <div style={{display:'flex'}}><h2><FcAddDatabase/></h2><span style={{paddingTop:7}}><Form.Control id="status2" placeholder="Job" type="text" value={newStatus2} onChange={e=> setnewStatus2(e.target.value)}/></span></div>
      <div style={{display:'flex'}}><h2><FcAddDatabase/></h2><span style={{paddingTop:7}}><Form.Control id="status3" placeholder="University/College" type="text" value={newStatus3} onChange={e=> setnewStatus3(e.target.value)}/></span></div>
      <br/>
      <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="info" />
      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      {/* <Button variant='danger' onClick={props.onHide}>Close</Button> */}
      <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Create New</Button>
      <Button variant="danger" onClick={()=>setYearDeleteModal(true)} style={{borderColor:'red'}}>Delete Year</Button>
      </div>
    </Form.Group>
    </Col>

    <Col xs md={6} className={sty.picturealign}>

    <Form.Group >
    <div >
    <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
      <img id="myimgS" className={sty.picture}/>
    </div>
    {/* <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br /> */}
    {/* <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/><br /> */}
    <input type='text' placeholder='enter image url..' value={newimUrlS} onPaste={(e)=>{
     setnewImUrlS(e.clipboardData.getData('Text'))
     }}/><br/>
     <Button onClick={onAdd}>Add</Button>

    </Form.Group>
    
    <p></p>
    </Col>
    </Row>
  </Form>
  </div>
 

                </div>
                
              </Col>
            </Row>
          </Tab.Container>
          </Tab>

          <Tab eventKey="teachers" title={<Tooltip title='Teachers'><SupervisedUserCircleIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('teacher')}>
              <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{backgroundColor:'#008080',width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <br/>
                  <div style={{display:'flex'}}><h2><FcContacts/></h2><span style={{paddingTop:7}}><Form.Control id="namet" placeholder="Full Name" type="text" value={newTaskforT} onChange={e=> setnewTaskforT(toTitleCase(e.target.value))} /></span></div>
                  <br />
                  <div style={{display:'flex'}}><h2><FcAddressBook/></h2><span style={{paddingTop:7}}><Form.Control id="emailft" placeholder="Email Address" type="text" value={newEmailforT} onChange={e=> {setnewEmailforT(e.target.value);document.getElementById('emailerrt').style.display='none';document.getElementById('emailft').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrt" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Email Address Required!</p>
                  <br />
                  <div style={{display:'flex'}}><h2><FcCellPhone/></h2><span style={{paddingTop:7}}><Form.Control id="phonet" placeholder="Phone Number" type="text" value={newPhoneforT} onChange={e=> setnewPhoneforT(e.target.value)}/></span></div>
                  <br />
                  <div style={{display:'flex'}}><h2><FcAddDatabase/></h2><span style={{paddingTop:7}}><Form.Control id="status1t" placeholder="Status" type="text" value={newStatus1forT} onChange={e=> setnewStatus1forT(e.target.value)}/></span></div>
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  {/* <Button variant='danger' onClick={props.onHide}>Close</Button> */}
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Create New</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group >
                <div >
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimgT" className={sty.picture}/>
                </div>
                {/* <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br /> */}
                {/* <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/> */}
                <input type='text' placeholder='enter image url..' value={newimUrlT} onPaste={(e)=>{
                  setnewImUrlT(e.clipboardData.getData('Text'))
                  }}/><br/><Button onClick={onAdd}>Add</Button>
                <br />
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>

          <Tab eventKey="slideshow" title={<Tooltip title='Slideshow'><SlideshowIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('slideshow')}>
 
            <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{paddingTop:130,backgroundColor:'#008080',width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <div style={{display:'flex'}}><h2><FcPhotoReel/></h2><span style={{paddingTop:7}}><Form.Control id="emailS" placeholder="Slideshow Image Name" type="text" value={newEmailforSS} onChange={e=> {setnewEmailforSS(e.target.value);document.getElementById('emailerrs').style.display='none';document.getElementById('emailS').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrs" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Slideshow image name required!</p>
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  {/* <Button variant='danger' onClick={props.onHide}>Close</Button> */}
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Add Slideshow</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group>
                <div >
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimgSS" className={sty.picture}/>
                </div>
                {/* <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br /> */}
                {/* <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/> */}
                <input type='text' placeholder='enter image url..' value={newimUrlSS} onPaste={(e)=>{
                  setnewImUrlSS(e.clipboardData.getData('Text'))
                  }}/><br/><Button onClick={onAdd}>Add</Button>
                <br />
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>
          <Tab eventKey="gallery" title={<Tooltip title='Gallery'><ImageIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('gallery')}>
          <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{paddingTop:130,backgroundColor:'#008080',width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <div style={{display:'flex'}}><h2><FcStackOfPhotos/></h2><span style={{paddingTop:7}}><Form.Control id="emailG" placeholder="Gallery Image Name" type="text" value={newEmailforG} onChange={e=> {setnewEmailforG(e.target.value);document.getElementById('emailerrg').style.display='none';document.getElementById('emailG').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrg" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Gallery image name required!</p>
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  {/* <Button variant='danger' onClick={props.onHide}>Close</Button> */}
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Add Gallery</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group >
                <div >
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimgG" className={sty.picture}/>
                </div>
                {/* <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br /> */}
                {/* <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/> */}
                <input type='text' placeholder='enter image url..' value={newimUrlG} onPaste={(e)=>{
                  setnewImUrlG(e.clipboardData.getData('Text'))
                  }}/><br/><Button onClick={onAdd}>Add</Button>
                <br />
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>
          <Tab eventKey="recruiters" title={<Tooltip title='Recruiters'><BusinessCenterIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('recruiter')}>
              <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{paddingTop:130,backgroundColor:'#008080',width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <div style={{display:'flex'}}><h2><FcConferenceCall/></h2><span style={{paddingTop:7}}><Form.Control id="emailR" placeholder="Recruiters Image Name" type="text" value={newEmailforR} onChange={e=> {setnewEmailforR(e.target.value);document.getElementById('emailerrr').style.display='none';document.getElementById('emailR').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrr" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Recruiter image name required!</p>
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  {/* <Button variant='danger' onClick={props.onHide}>Close</Button> */}
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Add Recruiters</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group >
                <div >
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimgR" className={sty.picture}/>
                </div>
                {/* <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br /> */}
                {/* <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/> */}
                <input type='text' placeholder='enter image url..' value={newimUrlR} onPaste={(e)=>{
                  setnewImUrlR(e.clipboardData.getData('Text'))
                  }}/><br/><Button onClick={onAdd}>Add</Button>
                <br />
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>
          <Tab eventKey="notices" title={<Tooltip title='Notices'><EventNoteIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('notice')}>
              <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{paddingTop:130,backgroundColor:'#008080',width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <div style={{display:'flex'}}><h4 style={{paddingTop:12}}>📝</h4><span style={{paddingTop:7}}><Form.Control id="emailN" placeholder="Notice Image Name" type="text" value={newEmailforN} onChange={e=> {setnewEmailforN(e.target.value);document.getElementById('emailerrn').style.display='none';document.getElementById('emailN').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrn" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Notice image name required!</p>
                  <div style={{display:'flex'}}><h4 style={{paddingTop:8}}>📌</h4><span style={{paddingTop:7}}><Form.Control as="textarea" placeholder="write about the notice..." rows={4} value={newStatus1forN} onChange={e=> {setnewStatus1forN(e.target.value)}}/></span></div>
                  
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  {/* <Button variant='danger' onClick={props.onHide}>Close</Button> */}
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Add Notice</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group >
                <div >
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimgN" className={sty.picture}/>
                </div>
                {/* <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br /> */}
                {/* <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/> */}
                <input type='text' placeholder='enter image url..' value={newimUrlN} onPaste={(e)=>{
                  setnewImUrlN(e.clipboardData.getData('Text'))
                  }}/><br/><Button onClick={onAdd}>Add</Button>
                <br />
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>
          <Tab eventKey="videos" title={<Tooltip title='Youtube Videos'><YouTubeIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('video')}>
              <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{paddingTop:130,width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <div style={{display:'flex'}}><h2><FcConferenceCall/></h2><span style={{paddingTop:7}}><Form.Control id="emailV" placeholder="Video Name" type="text" value={newEmailforV} onChange={e=> {setnewEmailforV(e.target.value);document.getElementById('emailerrv').style.display='none';document.getElementById('emailV').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrv" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Video name required!</p>
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Add Video</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group >
                <div>
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimg" className={sty.picture}/>
                </div>
                <input type='text' placeholder='youtube embed url..' value={newimUrlV} onChange={(e)=>{setnewImUrlV(e.target.value)}}/>
                {/* <br/><Button onClick={onAdd}>Add</Button> */}
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>

          <Tab eventKey="magazines" title={<Tooltip title='Magazines'><PictureAsPdfIcon fontSize="large"/></Tooltip>} onClick={()=>setTab('magazine')}>
              <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                <Row className="justify-content-md-center" style={{marginLeft:120,marginTop:10,marginBottom:10}} className={sty.boxshadow}>
                  <Col style={{paddingTop:130,backgroundColor:'#008080',width:310}} className={containerStyle.grad}>
                <Form.Group>
                  <div style={{display:'flex'}}><h2><FcConferenceCall/></h2><span style={{paddingTop:7}}><Form.Control id="emailM" placeholder="Magazine Name" type="text" value={newEmailforM} onChange={e=> {setnewEmailforM(e.target.value);document.getElementById('emailerrm').style.display='none';document.getElementById('emailM').style.borderColor='#ced4da';}} style={{borderColor:'#ced4da'}}/></span></div>
                  <p id="emailerrm" style={{display:'none', color:'red',backgroundColor:'white',borderRadius:5}}>Magazine name required!</p>
                  <br />
                  <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="dark" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="info" />
                  </div>
                  <div style={{textAlign:'center'}}>
                  
                  <Button variant="warning" onClick={onCreate} style={{borderColor:'yellow'}}>Add Magazine</Button>
                  </div>
                </Form.Group>
                </Col>
                <Col md={6} className={sty.picturealign}>
                <Form.Group >
                <div>
                <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
                  <img id="myimg" className={sty.picture}/>
                </div>
                <input type='text' placeholder='pdf url..' value={newimUrlM} onChange={(e)=>{setnewImUrlM(e.target.value)}}/>
                {/* <br/><Button onClick={onAdd}>Add</Button> */}
                </Form.Group>
                <p></p>
                </Col>
                </Row>
              </Form>
          </Tab>
    </Tabs>


  {/* <Form style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
    <Form.Group className={sty.inputcontainer}>
      <div style={{display:'flex'}}><h2><FcContacts/></h2><Form.Control id="name" placeholder="Full Name" type="text" value={newTask} onChange={e=> setnewTask(e.target.value)} /></div>
      <br />
      <div style={{display:'flex'}}><h2><FcAddressBook/></h2><Form.Control id="email" placeholder="Email Address" type="email" value={newEmail} onChange={e=> setnewEmail(e.target.value)}/></div>
      <br />
      <div style={{display:'flex'}}><h2><FcPhone/></h2><Form.Control id="phone" placeholder="Phone Number" type="text" value={newPhone} onChange={e=> setnewPhone(e.target.value)}/></div>
      <br />
      <div style={{display:'flex'}}><h2><FcAddDatabase/></h2><Form.Control id="status" placeholder="Status" type="text" value={newStatus} onChange={e=> setnewStatus(e.target.value)}/></div>
      <br />
      <div style={{display:'flex'}}><h2><FcGraduationCap/></h2><Form.Control as="select" defaultValue="Choose" id="pass" type="text" value={newYear} onChange={e=> setnewYear(e.target.value)}>
        <option>Choose...</option>
        <option>Teacher</option>
        <option>2021 Passout</option>
        <option>2020 Passout</option>
        <option>2019 Passout</option>
        <option>2018 Passout</option>
        <option>Slideshow</option>
        <option>Gallery</option>
        <option>New Recruiters</option>
        </Form.Control></div>
      <br />
      <div id='spinner' style={{display:'none'}}><Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="info" />
      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Button variant='danger' onClick={props.onHide}>Close</Button>
      <Button variant="primary" onClick={onCreate}>Create New</Button>
      <Button variant="primary" onClick={onCreat}>Create New year</Button>
      <h2 style={{cursor:'pointer'}}><FcSynchronize/></h2>
      </div>
    </Form.Group>
   
    <Form.Group className={sty.picturealign}>
      
    <div >
    <h1 id="fcaddimage" style={{position:'relative',top:138,cursor:'pointer'}} ><FcAddImage/></h1>
      <img id="myimg" className={sty.picture}/>
    </div>
    <ProgressBar variant='success' animated now={progress} label={`${progress}%`}  /><br />
    <input type="file" onChange={handleImageAsFile} style={{color:'white'}}/><br />
    </Form.Group>
    <p></p>
  </Form> */}


  {/* <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col>
            </Row> */}
    </Container>
    
    </Modal>

              <Modal 
            
                show={yearDeleteModal}
                onHide={()=>setYearDeleteModal(false)}
                // size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                // centered
                >
                <Modal.Header closeButton>
                <Modal.Title>⛔️Delete Year <b>{newfireYear}</b>?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete year <b>{newfireYear}</b> ?
                All the data inside <b>{newfireYear}</b> will be lost. Recovery of data is not possible after Delete!
                </Modal.Body>
                <Modal.Footer>
                
                <Button variant="secondary" onClick={()=>setYearDeleteModal(false)}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={()=>{setYearDeleteModal(false);onDelete()}}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AdminForm
