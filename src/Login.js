import {React ,useEffect, useState} from 'react';
import fire from './config/fire';
import { Container,Navbar,NavDropdown,Nav,Modal, Form,Row, Col } from 'react-bootstrap'
import {MdEmail} from 'react-icons/md'
import PropagateLoader from 'react-spinners/PropagateLoader'
import ScaleLoader from 'react-spinners/ScaleLoader'
import containerStyle from './AdminContainer.module.css'
import {FcAddressBook,FcKey} from 'react-icons/fc'
import FrontPage from './FrontPage';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import loginimg from './images/login.jpg';
// import { App } from 'react-bootstrap-icons';
import App from './App';
import { FileX } from 'react-bootstrap-icons';
import Admin from './Admin';
import loginsty from './css/Login.module.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {RiShieldKeyholeFill,RiLockPasswordFill} from 'react-icons/ri'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		margin: theme.spacing(2),
		
		// width: '40ch',
		// width:100,
		
	  },
	  
	},
	
  }));
  
const Login = ()=> {
	const classes = useStyles();
	// const [email, setEmail] = useState('');
	// const [password,setpassword] = useState('');
	
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [emailerror, setemailerror] = useState('');
	const [passworderror, setpassworderror] = useState('');
	const [loading, setLoading] = useState(false)
	const [isbtnloading, setbtnloading] = useState(false)
	// const {email,setEmail,password,setpassword,handlelogin,emailerror,passworderror,} = props;
	
	
	const clearInputs = ()=>{
		setemail('');
		setpassword('');
	}
	const clearerrors = ()=>{
		setemailerror('');
		setpassworderror('');
	}
	function goto(){
		<Router>
			<Switch>
				<Route exact path='/login'>
					
				<Redirect to='/admin'/>
				</Route>
			</Switch>
		</Router>
		console.log('redirecting....')
	}
	
	const login = (e)=>{
		setLoading(true)
		setbtnloading(true)
		clearerrors()
		// clearInputs()
		e.preventDefault();
		
		fire.auth().signInWithEmailAndPassword(email,
			password).then((u)=>{
				setLoading(false)
				setbtnloading(false)
				
				clearInputs()
			}).catch(err=>{
				switch(err.code){
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setemailerror(err.message);
						setLoading(false)
						setbtnloading(false)
						break;
					case "auth/wrong-password":
						setpassworderror(err.message);
						setLoading(false)
						setbtnloading(false)
						break;
				}
			});
	}


	
	
	return (
		<>
		
		
			<div style={{backgroundColor:'white',height:700}}>
			{/* <LinearProgress /> */}
		<Container fluid='xl'>
      <Row>
		  <Col></Col>
		  <Col md={6}>
		  
        
			{/* <img src='https://firebasestorage.googleapis.com/v0/b/collect-db.appspot.com/o/website-images%2F55788fea0c1e66112a0b497f312aa01e.jpg?alt=media&token=3898a3ef-3fc5-4721-bef7-ccf7f3f1a12c' width={100}/> */}
			{/* <img src={loginimg} width={100}/> */}

		  {/* <b style={{color:'#800000'}}>Administrator Login</b> */}
        
        
        <div className={loginsty.loginbox}>
		{isbtnloading &&<LinearProgress />}
	  		<div className={loginsty.loginkey}>
			  <RiShieldKeyholeFill/>
			  </div>
			  <div className={loginsty.logintitle} >
				  ADMIN LOGIN
			  </div>
			  <div className={loginsty.loginform}>
				  {/* <div className={loginsty.loginform}> */}

				  {/* <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form> */}
			<form  className={classes.root} noValidate autoComplete="off" >
			
		  
			<TextField className={loginsty.logintext} id="standard-basic" label="Username/Email Address" type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
			<p style={{color:'red'}}>{emailerror}</p>
			
			<TextField className={loginsty.logintext} id="standard-basic" label="Password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
			<p style={{color:'red'}}>{passworderror}</p>

			
				{/* <Form.Group controlId="formBasicEmail">
					<MdEmail/><Form.Label><small>Username/Email Address</small></Form.Label>
					<Form.Control  type="email" placeholder="Enter email address" value={email} onChange={(e)=>setemail(e.target.value)} />
					<p style={{color:'red'}}>{emailerror}</p>
				</Form.Group> */}

				{/* <Form.Group controlId="formBasicPassword">
					<RiLockPasswordFill/><Form.Label><small>Password</small></Form.Label>
					<Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)} />
					<p style={{color:'red'}}>{passworderror}</p>
				</Form.Group> */}

				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
				<div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
					{/* <Button size='lg' variant='info' href='/'>Home</Button> */}
					<p></p>
				<Button  variant="contained" color="primary" style={{height:49}}
				onClick={login} disabled={isbtnloading}
				>
				{isbtnloading? 
				<div style={{display:'flex',paddingTop:12}}>
					<ScaleLoader loading={loading} color='#3f51b5' height={24} radius={10} margin={1} width={4} />
					<p>Please Wait</p>
				</div> : 'Login'}
				</Button>
				<p></p>
				</div>
			</form>
			
			</div>
			  {/* </div> */}
			  {/* <LinearProgress /> */}
			</div>
			
			
			
			</Col>
			<Col></Col>
	  </Row>
		  
	  </Container>

			
			</div>
			
	</>
	);
	
}
export default Login;