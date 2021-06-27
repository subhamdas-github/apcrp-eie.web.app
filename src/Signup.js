import firebase from 'firebase';
import fire from './config/fire';
import React,{useEffect, useState} from 'react'
import { Container,Navbar,NavDropdown,Nav,Modal, Form,Row, Col,Alert } from 'react-bootstrap'
import containerStyle from './AdminContainer.module.css'
import sty from './css/adminFormImg.module.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {FcAddImage} from 'react-icons/fc'
import './css/PhotoUpload.css'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function getSteps() {
  return ['Personal Details', 'Verification', 'Agreement License'];
}



function Signup() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [firstname, setfirstname] = useState('')
  const [firstnameerror, setfirstnameerror] = useState('')
  const [lastname, setlastname] = useState('')
  const [lastnameerror, setlastnameerror] = useState('')
  const [age, setage] = useState('')
  const [ageerror, setageerror] = useState('')
  const [sex, setsex] = useState('')
  const [sexerror, setsexerror] = useState('')
  const [year, setyear] = useState('')
  const [yearerror, setyearerror] = useState('')
  const [phone, setphone] = useState('')
  const [phoneerror, setphoneerror] = useState('')
  const [email, setemail] = useState('')
  const [emailerror, setemailerror] = useState('')
  const [password, setpassword] = useState('')
  const [passworderror, setpassworderror] = useState('')
  const [address1, setaddress1] = useState('')
  const [address1error, setaddress1error] = useState('')
  const [address2, setaddress2] = useState('')
  const [city, setcity] = useState('')
  const [cityerror, setcityerror] = useState('')
  const [state, setstate] = useState('')
  const [stateerror, setstateerror] = useState('')
  const [zip, setzip] = useState('')
  const [ziperror, setziperror] = useState('')

  const [checked, setChecked] = React.useState(false);
  const [checkedsignup, setcheckedsignup] = React.useState(true);
  const [loading, setLoading] = useState(false)
  const [isbtnloading, setbtnloading] = useState(false)
  const [newimUrlS, setnewImUrlS] = React.useState('')
  const [newimUrlSerror, setnewImUrlSerror] = React.useState('')
  const [newkhanki, setnewKhanki] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const [iconshow, seticonshow] = useState(true)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // document.getElementById('imgicon').style.display='none';
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // seticonshow(false)
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function gettime(){
  return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}
function getdate(){
  return new Date().getDate()+ " "+ months[new Date().getMonth()]+","+ new Date().getFullYear();
}
function checkemail(){
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    setemailerror('')
  }
  else if (email == ''){
    setemailerror('')
  }
  else {
    setemailerror('(Please enter an valid email address)')
  }
}
function checkfirstname(){
  if (firstname==''){setfirstnameerror('First name required')}
  else{setfirstnameerror('')}
}
function checkdetails(){
  if (firstname==''){if (!!document.getElementById('firstname') && document.getElementById('firstname').scrollIntoView) {
    document.getElementById('firstname').scrollIntoView();
}setfirstnameerror('First name required')}
  else if(lastname==''){if (!!document.getElementById('lastname') && document.getElementById('lastname').scrollIntoView) {
    document.getElementById('lastname').scrollIntoView();
}setlastnameerror('Last name required')}
  else if(age==''){if (!!document.getElementById('age') && document.getElementById('age').scrollIntoView) {
    document.getElementById('age').scrollIntoView();
}setageerror('Age required')}
  else if(sex==''){if (!!document.getElementById('sex') && document.getElementById('sex').scrollIntoView) {
    document.getElementById('sex').scrollIntoView();
}setsexerror('Sex required')}
  else if(sex=='Select'){if (!!document.getElementById('sex') && document.getElementById('sex').scrollIntoView) {
    document.getElementById('sex').scrollIntoView();
}setsexerror('Sex required')}
  else if(year==''){if (!!document.getElementById('year') && document.getElementById('year').scrollIntoView) {
    document.getElementById('year').scrollIntoView();
}setyearerror('Year required')}
  else if(year=='Select'){if (!!document.getElementById('year') && document.getElementById('year').scrollIntoView) {
    document.getElementById('year').scrollIntoView();
}setyearerror('Year required')}
  else if(phone==''){if (!!document.getElementById('phone') && document.getElementById('phone').scrollIntoView) {
    document.getElementById('phone').scrollIntoView();
}setphoneerror('Phone number required')}
  else if(email==''){if (!!document.getElementById('email') && document.getElementById('email').scrollIntoView) {
    document.getElementById('email').scrollIntoView();
}setemailerror('Email address required')}
  else if(password==''){if (!!document.getElementById('password') && document.getElementById('password').scrollIntoView) {
    document.getElementById('password').scrollIntoView();
}setpassworderror('Password required')}
  else if(address1==''){if (!!document.getElementById('address1') && document.getElementById('address1').scrollIntoView) {
    document.getElementById('address1').scrollIntoView();
}setaddress1error('Address1 required')}
  else if(city==''){if (!!document.getElementById('city') && document.getElementById('city').scrollIntoView) {
    document.getElementById('city').scrollIntoView();
}setcityerror('City required')}
  else if(state==''){if (!!document.getElementById('state') && document.getElementById('state').scrollIntoView) {
    document.getElementById('state').scrollIntoView();
}setstateerror('State required')}
  else if(state=='Select'){if (!!document.getElementById('state') && document.getElementById('state').scrollIntoView) {
    document.getElementById('state').scrollIntoView();
}setstateerror('State required')}
  else if(zip==''){if (!!document.getElementById('zip') && document.getElementById('zip').scrollIntoView) {
    document.getElementById('zip').scrollIntoView();
}setziperror('Zip required')}

  else{
    handleNext()
  }
}

function checkphoto(){
  if(newkhanki==null){alert('You must have to upload your photo !')}
  else{
    handleNext()
  }
}
const onAdd=()=>{
  if (newimUrlS==''){
    setnewImUrlSerror('Oops! you left image url field blank')
  }
  else if(!newimUrlS.startsWith('https://drive.google.com/file/')){
    setnewImUrlSerror('Oops! This is not a valid Google Drive link')
  }
  else
  {
  setLoading(true)
	setbtnloading(true)
  setTimeout(() => {
    setLoading(false)
    setbtnloading(false)
  }, 3000);
  setnewKhanki('https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65));
  document.getElementById('myimgS').src = 'https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65);
  setnewImUrlS('')
  seticonshow(false)
}

}
const upLoad = ()=>{
  fire.firestore().collection('user').doc(email)
  .set({firstname:firstname,lastname:lastname,age:age,phone:phone,email:email,password:password,address1:address1,
  address2:address2,city:city,state:state,zip:zip,url:newkhanki,date:getdate(),time:gettime()})
  
}
function getStepContent(step) {
  
  switch (step) {
    case 0:
      return  <div style={{justifyContent:'center',display:'flex',padding:20}} className={sty.controlpanelfont}>
<Alert variant='info'>
<div style={{display:'flex',justifyContent:'center'}}><AccountCircleIcon fontSize="large"/><h2 style={{textAlign:'center'}}> Sign Up Form</h2><br/></div>
        <hr/>
        <Form>
        <Form.Row>
            <Col sm>
            <Form.Group as={Col} id='firstname'>
            <Form.Label>First Name <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control  placeholder="Enter first name" value={firstname} onChange={(e)=>{setfirstnameerror(''); setfirstname(e.target.value)}}/>
            <p style={{color:'red',fontWeight:'lighter'}}>{firstnameerror}</p>
            </Form.Group>
            </Col>
            <Col sm>
            <Form.Group as={Col} id='lastname'>
            <Form.Label>Last Name <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control placeholder="Enter last name" value={lastname} onChange={(e)=>{setlastnameerror(''); setlastname(e.target.value)}}/>
            <p style={{color:'red',fontWeight:'lighter'}}>{lastnameerror}</p>
            </Form.Group>
            </Col>
        </Form.Row>

        <Form.Row>
            <Col sm>
            <Form.Group as={Col} id='age'>
            <Form.Label>Age <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control type='number' placeholder="Enter your age" value={age} onChange={(e)=>{setageerror(''); setage(e.target.value)}}/>
            <p style={{color:'red',fontWeight:'lighter'}}>{ageerror}</p>
            </Form.Group>
            </Col>
            <Col sm>
            <Form.Group as={Col} id='sex'>
            <Form.Label>Sex <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control as="select" defaultValue="Select" onChange={(e)=>{setsexerror('');setsex(e.target.value)}}>
            <option>Select</option><option>Male</option><option>Female</option><option>Other</option>
            </Form.Control>
            <p style={{color:'red',fontWeight:'lighter'}}>{sexerror}</p>
            </Form.Group>
            </Col>
        </Form.Row>

        <Form.Row>
            
            <Col sm>
            <Form.Group as={Col} id='year'>
            <Form.Label>Year <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control as="select" defaultValue="Select" onChange={(e)=>{setyearerror('');setyear(e.target.value)}}>
                <option>Select</option>
                <option>1st year</option><option>2nd year</option><option>3rd year</option>
            </Form.Control>
            <p style={{color:'red',fontWeight:'lighter'}}>{yearerror}</p>
            </Form.Group>
            </Col>

            <Col sm>
            <Form.Group as={Col} id='phone'>
            <Form.Label>Phone Number <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control type='number' placeholder="Enter your 10 dig mobile number" value={phone} onChange={(e)=>{setphoneerror(''); setphone(e.target.value)}}/>
            <p style={{color:'red',fontWeight:'lighter'}}>{phoneerror}</p>
            </Form.Group>
            </Col>
        </Form.Row>

        <Form.Row>
            <Col sm>
            <Form.Group as={Col} id='email'>
            <Form.Label>Email Address <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control required='true' type='email' placeholder="Enter your email address" value={email}
             onChange={(e)=>{checkemail(); setemail(e.target.value)}}/>
             <p style={{color:'red',fontWeight:'lighter'}}>{emailerror}</p>
            </Form.Group>
            </Col>
            <Col sm>
            <Form.Group as={Col} id='password'>
            <Form.Label>Password <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control type='password' placeholder="Enter password" value={password} onChange={(e)=>{setpassworderror(''); setpassword(e.target.value)}}/>
             <p style={{color:'red',fontWeight:'lighter'}}>{passworderror}</p>
            </Form.Group>
            </Col>
        </Form.Row>
        
        <Form.Row>
            <Col sm>
            <Form.Group as={Col} id='address1'>
                <Form.Label>Address 1 <span style={{color:'red'}}>*</span></Form.Label>
                <Form.Control placeholder="1234 Main Street" value={address1} onChange={(e)=>{setaddress1error(''); setaddress1(e.target.value)}}/>
                <p style={{color:'red',fontWeight:'lighter'}}>{address1error}</p>
            </Form.Group>
            
            <Form.Group as={Col} >
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" value={address2} onChange={(e)=>setaddress2(e.target.value)}/>
            </Form.Group>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col sm>
            <Form.Group as={Col} id='city'>
            <Form.Label>City <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control placeholder="City name" value={city} onChange={(e)=>{setcityerror(''); setcity(e.target.value)}}/>
            <p style={{color:'red',fontWeight:'lighter'}}>{cityerror}</p>
            </Form.Group>
            </Col>
            <Col sm>
            <Form.Group as={Col} id='state'>
            <Form.Label>State <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control as="select" defaultValue="Select" onChange={(e)=>{setstateerror(''); setstate(e.target.value)}}>
                <option>Select</option>
                <option>Andhra Pradesh</option><option>Arunachal Pradesh</option><option>Assam</option>
                <option>Bihar</option><option>Chhattisgarh</option><option>Goa</option><option>Gujarat</option>
                <option>Haryana</option><option>Himachal Pradesh</option><option>Jharkhand</option><option>Karnataka</option>
                <option>Kerala</option><option>Madhya Pradesh</option><option>Maharashtra</option><option>	Manipur</option>
                <option>Meghalaya</option><option>Mizoram</option><option>Nagaland</option><option>Odisha</option>
                <option>Punjab</option><option>Rajasthan</option><option>Sikkim</option><option>Tamil Nadu</option>
                <option>Telangana</option><option>Tripura</option><option>Uttar Pradesh</option><option>Uttarakhand</option>
                <option>West Bengal</option>
            </Form.Control>
            <p style={{color:'red',fontWeight:'lighter'}}>{stateerror}</p>
            </Form.Group>
            </Col>
            <Col sm>
            <Form.Group as={Col} id='zip'>
            <Form.Label>Zip <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control placeholder="Zip code" value={zip} onChange={(e)=>{setziperror(''); setzip(e.target.value)}}/>
            <p style={{color:'red',fontWeight:'lighter'}}>{ziperror}</p>
            </Form.Group>
            </Col>
        </Form.Row>
            <div style={{textAlign:'right'}}>
                <Button variant="contained"
                        color="secondary" onClick={()=>{checkdetails()}}>
                    Next
                </Button>
            </div>
        </Form>
    </Alert>
    </div>
      ;
    case 1:
      return <div style={{justifyContent:'center',display:'flex',padding:20}} className={sty.controlpanelfont}>
        <Alert variant='info'>
        <div style={{display:'flex',justifyContent:'center'}}><ImageIcon fontSize="large"/><h2 style={{textAlign:'center'}}> Upload Your Photo</h2><br/></div>
        <hr/>
        
                  <Form.Group as={Col} style={{padding:10}}>
                    
                    <Row>
                      <Col sm>
                        {iconshow?
                        (
                  <div className={sty.containerpicture}>
                    <img id="myimgS" src={newkhanki} className={sty.picturesignup}/>
                    <div id='imgicon' className={sty.centered} style={{display:'block'}}><PhotoCameraIcon fontSize="large"/></div>
                  </div>
                        ):(
                  <div className={sty.containerpicture}>
                    <img id="myimgS" src={newkhanki} className={sty.picturesignup}/>
                  </div>
                        )
                        }
                  </Col>
                  <Col sm>
                  <div>
                    <p>-&gt;<u>Steps to upload your google drive photo</u></p>
                  <p>1. Go to your Google Drive.</p>
                  <p>2. Right click on your photo and click get link.</p>
                  <p>3. Change 'restricted' to 'anyone with this link can view'.</p>
                  <p>4. copy that link and paste it in here. <span style={{color:"red"}}>(Note: you can only paste in here)</span>.</p>
                  </div>
                  </Col>
                  </Row>
                  <div style={{textAlign:'center'}}>
                  <input type='text' placeholder='Enter image url..' value={newimUrlS} onPaste={(e)=>{
                    setnewImUrlSerror('');
                    setnewImUrlS(e.clipboardData.getData('Text'))
                    }}/>
                    <p style={{color:'red',fontWeight:'lighter'}}>{newimUrlSerror}</p>
                    
                    <Button variant="contained"
                    color="secondary"
                    startIcon={<CloudUploadIcon />}
                    onClick={onAdd}
                    disabled={isbtnloading}
                    style={{height:38}}
                    >
                      {isbtnloading? 
                    <div style={{display:'flex',paddingTop:16}}>
                      <p>Uploading</p>
                      <ScaleLoader loading={loading} color='#3f51b5' height={20} radius={10} margin={1} width={4} />
                      
                    </div> : 'Upload'}
                      
                    </Button>
                  </div>
                  </Form.Group>
                
          <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
            <Button variant='outlined' color="secondary" onClick={handleBack}>back</Button>
            <p></p>
            <Button variant="contained" color="secondary" onClick={()=>{checkphoto()}}>next</Button>
          </div>
          </Alert>
      </div>
      ;
    case 2:
      return <div style={{justifyContent:'center',display:'flex',padding:20}} className={sty.controlpanelfont}>
<Alert variant='info'>
<div style={{display:'flex',justifyContent:'center'}}><AssignmentTurnedInIcon fontSize="large"/><h2 style={{textAlign:'center'}}> Agreement License</h2><br/></div>
        <hr/>
  <div style={{display:'flex'}}>
    <div>
  <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e)=>{setChecked(e.target.checked);
            }}
            name="checkbox"
            color="primary"
          />
        }
        // label="By checking this agreement you're consenting that you have read and agree to the terms
        // and privacy policy of this website"
      />
</div>
<div>
  <p style={{fontSize:18,paddingTop:8}}>By checking this agreement you are consenting that you have read and agree to the <a href='/about/privacy_policy'> terms </a>
      and <a href='/about/privacy_policy'>privacy policy</a> of this website</p>
</div>
  </div><br/><br/>
        <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
            
            <p></p>
            <Button variant="contained" color="secondary" onClick={()=>{setOpen(!open);upLoad(); setTimeout(() => {
              setOpen(open)
              setShow(true)
            }, 4000);}}
            disabled={!checked} >I Understood & Sign Up</Button>
            <p></p>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</Alert>

<Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Modal show={show} onHide={()=>setShow(false)}
      backdrop="static"
      keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Su</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div style={{color:'green',textAlign:'center',fontSize:30}}><CheckCircleIcon fontSize="large"/><p>Success!</p></div>
          <p>You have successfully Signed Up ! You'll become an Admin when the present administrator(s) will
          approve you.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="secondary" href='/' style={{color:'white'}}>
            Ok, Got it
          </Button>
        </Modal.Footer>
      </Modal>
      
      </div>;
    default:
      return 'Unknown step';
  }
}

  return (
    <>
    <div className={classes.root} className={containerStyle.grad} style={{maxHeight:2000}}>
      <div >
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={containerStyle.grad}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
      {/* <div >
          
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>

            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{textAlign:'center'}}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
            
          </div>
        )}
        
      </div> */}
    </div>
    </>
  )
}

export default Signup
