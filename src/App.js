import React, {useEffect,useState} from 'react';
import firebase from 'firebase'
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
// import App from './App.css';

import MiniDrawer from './Drawar';
import FrontPage from './FrontPage';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Googlemaps from './Googlemaps';
import Error404 from './Error404';
import Preface from './Preface';
import Students from './Students';
import Teachers from './Teachers';
import PulseLoader from 'react-spinners/PulseLoader'
import ProtectedRoute from './ProtectedRoute';
import { PropagateLoader } from 'react-spinners';
import PrivacyPolicy from './PrivacyPolicy';
import Feedback from './Feedback';
// document.getElementById('btngroup').style.display='none';
				// document.getElementById('teachersdescrp').style.display='none';
				// document.getElementById('front').style.display='none';
				// document.getElementById('frontheading').style.display='none';
				// document.getElementById('frontfooter').style.display='none';
				// document.getElementById('googlemap').style.display='none';
				// document.getElementById('loginmodal').style.display='none';
				// document.getElementById('studentsCard').style.display='none';
				// document.getElementById('preface').style.display='none';
				// const [loading, setLoading] = useState(true)
class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			user: null,
			isloading:true
		}
	}
	componentDidMount()
	{
		// this.setState({isloading:true})
		// setTimeout(() => {
		// 	this.setState({isloading:false})
		// }, 5000);

		this.authListener();
	}
	authListener(){
		fire.auth().onAuthStateChanged((user) =>{
			// if(!firebase.auth.GoogleAuthProvider()){
			if(user ){
				this.setState({user})
				this.setState({isloading:false})

			}else{
				this.setState({user:null})
				this.setState({isloading:false})
			}
		// }
		})
	}
	render(){
		return (
			<>
			{/* {this.state.isloading?
			<PropagateLoader/>	
				: */}
		{!this.state.isloading &&
			<Router>
				<Switch>
					<Route exact path='/'>
						{this.state.user ? 
							<Redirect to='/admin'/> :
							
								<FrontPage/>
						}
					</Route>
				
					<Route exact path='/preface'>
						{this.state.user? 
							<Redirect to='/admin'/> : <Preface/>
						}
					</Route>

					<Route exact path='/students'>
						{this.state.user? 
							<Redirect to='/admin'/> : <Students/>
						}
					</Route>

					<Route exact path='/teachers'>
						{this.state.user?
							<Redirect to='/admin'/> : <Teachers/>
						}
					</Route>

					<Route exact path='/about/privacy_policy'>
						{this.state.user?
							<Redirect to='/admin'/> : <PrivacyPolicy/>
						}
					</Route>

					<Route exact path='/feedback'>
						{this.state.user?
							<Redirect to='/admin'/> : <Feedback/>
						}
					</Route>

					<Route exact path='/login'>
						{this.state.user?
							<Redirect to='/admin'/> : <Login/>
						}
					</Route>

					<Route exact path='/admin'>
						{this.state.user ?
							<Admin/> : <Redirect to='/'/>
						}
					</Route>
				</Switch>
			</Router>
	 } 
			{/* <div className="App">

				{this.state.user && 
				(
					<Admin/>
				)
				}
			</div> */}
			
			</>
		);
	}
}
// import ProtectedRoute from './ProtectedRoute'

// function App() {
// 	return (
// 		<div>
// 			<Router>
// 				<Switch>
// 				<Route exact path="/login">
         
// 					<Login/>
				
// 				</Route>
// 				<ProtectedRoute redirectTo="/" path="/admin">
				
// 					<Admin/>
				
// 				</ProtectedRoute>
				
// 				<Route exact path="/">
				
// 					<FrontPage/>
				
// 				</Route>
				
// 				</Switch>
// 			</Router>
// 		</div>
// 	)
// }




export default App;
