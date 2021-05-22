import {React ,useEffect, useState} from 'react';
import fire from './config/fire';
import { Container,Navbar,NavDropdown,Nav,Button,Modal, Form } from 'react-bootstrap'
import containerStyle from './AdminContainer.module.css'
import {FcAddressBook,FcKey} from 'react-icons/fc'
import FrontPage from './FrontPage';

import loginimg from './images/login.jpg';
// import { App } from 'react-bootstrap-icons';
import App from './App';
import { FileX } from 'react-bootstrap-icons';
const Login = (props)=> {
	// const [email, setEmail] = useState('');
	// const [password,setpassword] = useState('');
	
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [emailerror, setemailerror] = useState('');
	const [passworderror, setpassworderror] = useState('');

	// const {email,setEmail,password,setpassword,handlelogin,emailerror,passworderror,} = props;
	
	
	const clearInputs = ()=>{
		setemail('');
		setpassword('');
	}
	const clearerrors = ()=>{
		setemailerror('');
		setpassworderror('');
	}
	
	const login = (e)=>{
		clearerrors()
		// clearInputs()
		e.preventDefault();
		
		fire.auth().signInWithEmailAndPassword(email,
			password).then((u)=>{
				console.log(u)
				clearInputs()
			}).catch(err=>{
				switch(err.code){
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setemailerror(err.message);
						break;
					case "auth/wrong-password":
						setpassworderror(err.message);
						break;
				}
			});
	}
	// const signup=(e)=>{
	// 	e.preventDefault();
	// 	fire.auth().createUserWithEmailAndPassword(this.state.email,
	// 		this.state.password).then((u)=>{
	// 			console.log(u)
	// 		}).catch((err)=>{
	// 			console.log(err)
	// 		})
	// }
	// const [user, setuser] = useState('');
	// const [email, setemail] = useState('');
	// const [password,setpassword] = useState('');
	// const [emailerror, setemailerror] = useState('');
	// const [passworderror, setpassworderror] = useState('');

	
	// const handlelogin =()=>{
	// 	clearerrors();
	// 	fire
	// 	.auth()
	// 	.signInWithEmailAndPassword(email, password)
		// .catch(err=>{
		// 	switch(err.code){
		// 		case "auth/invalid-email":
		// 		case "auth/user-disabled":
		// 		case "auth/user-not-found":
		// 			setemailerror(err.message);
		// 			break;
		// 		case "auth/wrong-password":
		// 			setpassworderror(err.message);
		// 			break;
		// 	}
		// });
	// };
	// const handlelogout = ()=>{
	// 	fire.auth().signOut();
	// };

	// const authListener = ()=>{
	// 	fire.auth().onAuthStateChanged((user)=>{
	// 		if(user){
	// 			clearInputs();
	// 			setuser(user);
	// 			<App user={user}/>
	// 		}else{
	// 			setuser("");
	// 		}
	// 	})
	// };
	// useEffect(()=>{
	// 	authListener();
	// },[]);

	
	
	return (
		<>
		{/* <FrontPage/> */}
		{/* <form >
			<input name="email" type="email" id="email" placeholder="enter email" value={email}
			onChange={(e)=>setEmail(e.target.value)}
			
			/><p>{emailerror}</p>
			<input name="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)}  id="password" placeholder="enter password"
			
			/>
			<button onClick={handlelogin}>Login</button>
			</form> */}
		
			<div id='loginmodal' style={{display:'block'}}>
				<Modal
      {...props}

      aria-labelledby="contained-modal-title-vcenter"
      centered
	  className={containerStyle.newtestfont}
    >
		<Container fluid='xl'>
      <Modal.Header closeButton>
		  
        <Modal.Title id="contained-modal-title-vcenter" >
			{/* <img src='https://firebasestorage.googleapis.com/v0/b/collect-db.appspot.com/o/website-images%2F55788fea0c1e66112a0b497f312aa01e.jpg?alt=media&token=3898a3ef-3fc5-4721-bef7-ccf7f3f1a12c' width={100}/> */}
			<img src={loginimg} width={100}/>
		  <b style={{color:'#800000'}}>Administrator Login</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        
	  		{/* <form >
			<input name="email" type="email" id="email" placeholder="enter email" value={props.email}
			onChange={(e)=>setEmail(e.target.value)}
			
			/><p>{props.emailerror}</p>
			<input name="password" type="password" value={props.password} onChange={(e)=>setpassword(e.target.value)}  id="password" placeholder="enter password"
			
			/>
			<button onClick={props.handlelogin}>Login</button>
			</form> */}
			<Form>
				<Form.Group controlId="formBasicEmail">
					<FcAddressBook/><Form.Label><b>Email address</b></Form.Label>
					<Form.Control type="email" placeholder="Enter email address" value={email} onChange={(e)=>setemail(e.target.value)} />
					<p style={{color:'red'}}>{emailerror}</p>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<FcKey/><Form.Label><b>Password</b></Form.Label>
					<Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)} />
					<p style={{color:'red'}}>{passworderror}</p>
				</Form.Group>

				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
				<div style={{display:'flex',justifyContent:'space-between'}}>
				<Button size='lg' variant="success" onClick={login}>
					Login
				</Button>
				<Button size='lg' variant="danger" onClick={props.onHide}>
					Close
				</Button></div>
			</Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
	  </Container>
    </Modal>
			
			</div>
			
	</>
	);
	
}
export default Login;