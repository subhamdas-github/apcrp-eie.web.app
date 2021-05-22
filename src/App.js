import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/fire';
import {FcAbout, FcHighPriority, FcPlus,FcCollapse,FcExpand,FcSearch} from 'react-icons/fc';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {ToolkitProvider,Search,products,columns,BootstrapTable} from 'react-bootstrap-table2-toolkit';
// import {Button,Row, Container, Col, Form, Navbar,Nav,FormControl, Table, Modal,Alert, OverlayTrigger,Tooltip} from 'react-bootstrap';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
import Image from 'react-bootstrap/Image'
import AdminForm from './AdminForm';
import {ToggleButtonGroup, ToggleButton, Badge} from 'react-bootstrap';
import Batch from './batch';
import CreateNew from './CreateNew';
import Footer from './Footer';
import style from './css/footer.module.css'
import AdminNavigation from './AdminNavigation';
import { red } from '@material-ui/core/colors';
import AdminHome from './AdminHome';
import containerStyle from './AdminContainer.module.css'
import { Block } from '@material-ui/icons';
import { Container,Navbar,NavDropdown,Nav,Button,Modal, Form } from 'react-bootstrap'
import {FcAddressBook,FcKey} from 'react-icons/fc'
import ReactDOM from 'react-dom';
import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import app from './app.css';

import MiniDrawer from './Drawar';
import FrontPage from './FrontPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Googlemaps from './Googlemaps';
import Error404 from './Error404';


// const App=()=>{

	
	// const [user, setuser] = useState('');
	// const [email, setEmail] = useState('');
	// const [password,setpassword] = useState('');
	// const [emailerror, setemailerror] = useState('');
	// const [passworderror, setpassworderror] = useState('');

	// const clearInputs = ()=>{
	// 	setEmail('');
	// 	setpassword('');
	// }
	// const clearerrors = ()=>{
	// 	setemailerror('');
	// 	setpassworderror('');
	// }
	// const handlelogin =()=>{
	// 	clearerrors();
	// 	fire
	// 	.auth()
	// 	.signInWithEmailAndPassword(email, password)
	// 	.catch(err=>{
	// 		switch(err.code){
	// 			case "auth/invalid-email":
	// 			case "auth/user-disabled":
	// 			case "auth/user-not-found":
	// 				setemailerror(err.message);
	// 				break;
	// 			case "auth/wrong-password":
	// 				setpassworderror(err.message);
	// 				break;
	// 		}
	// 	});
	// };
	// const handlelogout = ()=>{
	// 	fire.auth().signOut();
	// };

	// const authListener = ()=>{
	// 	fire.auth().onAuthStateChanged((user)=>{
	// 		if(user){
	// 			clearInputs();
	// 			console.log('hello')
	// 			setuser(user);
	// 			console.log(user);
	// 			<Admin/>
	// 		}else{
	// 			setuser("");
	// 			<FrontPage/>
	// 		}
	// 	})
	// };
	// useEffect(()=>{
	// 	authListener();
	// },[]);

	// return(
	// 	<div>
	// 		<AuthProvider>
	// 		<Router>
	// 			<div>
	// 				<Route exact path="/" component={Admin}/>
	// 				<Route exact path="/login" component={FrontPage}/>
	// 				{/* <Route exact path="/" component={FrontPage}/> */}
	// 			</div>
	// 		</Router>
	// 		</AuthProvider>
			{/* <FrontPage/> */}

			{/* {user ?(
				<Admin />
			):(
			<Login
			email={email}
			setEmail={setEmail}
			password={password}
			setpassword={setpassword}
			handlelogin={handlelogin}
			emailerror={emailerror}
			passworderror={passworderror}
			/>
			)} */}

			


{/* 			
		</div>
	);
}; */}


class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			user: null
			
		}
	}
	componentDidMount()
	{
		this.authListener();
	}
	authListener(){
		fire.auth().onAuthStateChanged((user) =>{
			if(user){
				this.setState({user})
				document.getElementById('btngroup').style.display='none';
				document.getElementById('teachersdescrp').style.display='none';
				document.getElementById('front').style.display='none';
				document.getElementById('frontheading').style.display='none';
				document.getElementById('frontfooter').style.display='none';
				document.getElementById('googlemap').style.display='none';
				document.getElementById('loginmodal').style.display='none';
				document.getElementById('studentsCard').style.display='none';
				document.getElementById('preface').style.display='none';
				// document.getElementById('loginmodal').style.display='none';
			}else{
				this.setState({user:null})
			}
		})
	}
	render(){
		return (
			<>
			
			{/* <FrontPage/> */}
			
			<Router>
				<Switch>
					{/* <Route path='/admin'>
						<Admin/>
					</Route> */}
					{/* <PrivateRoute exact path='/admin'>
						<Admin/>
					</PrivateRoute> */}
					<Route path='/'>
						<FrontPage/>
					</Route>
					<Route path='/contact'>
						<Googlemaps/>
					</Route>
					
				</Switch>
			</Router>
			
			<div className="App">
				{this.state.user && 
				
				( <Admin/>)
				
				}
			</div>

			</>
		);
	}
}

export default App;
