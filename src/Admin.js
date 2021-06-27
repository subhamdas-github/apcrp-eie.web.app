import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {FcHome,FcFeedback,FcQuestions,FcReading,FcBusinesswoman,FcPhotoReel,FcStackOfPhotos,FcConferenceCall} from 'react-icons/fc';
import fire from './config/fire';
import sty from './css/adminFormImg.module.css';
import {FcAbout, FcHighPriority, FcPlus,FcCollapse,FcExpand,FcSearch} from 'react-icons/fc';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {ToolkitProvider,Search,products,columns,BootstrapTable} from 'react-bootstrap-table2-toolkit';
import {Button,Row, Container, Col, Form,InputGroup, Navbar,Nav,FormControl, Table, Modal,Alert, OverlayTrigger, NavDropdown} from 'react-bootstrap';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Image from 'react-bootstrap/Image'
import AdminForm from './AdminForm';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import Batch from './batch';
import Chip from '@material-ui/core/Chip';
import CreateNew from './CreateNew';
import HistoryIcon from '@material-ui/icons/History';
import Footer from './Footer';
import style from './css/footer.module.css'
import AdminNavigation from './AdminNavigation';
import { red } from '@material-ui/core/colors';
import AdminHome from './AdminHome';
import containerStyle from './AdminContainer.module.css'
import { Block } from '@material-ui/icons';
import Login from './Login';
import animate from './Animated.module.css';
import './css/adminanimated.css'
import Chart from "react-google-charts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { storage } from './config/fire';
import HashLoader from 'react-spinners/HashLoader'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SecurityIcon from '@material-ui/icons/Security';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MouseIcon from '@material-ui/icons/Mouse';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import navstyle from './css/FrontNavStyle.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import AdminDelete from './AdminDelete';
import AdminUpdate from './AdminUpdate';
import AdminFooter from './AdminFooter';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import HelpIcon from '@material-ui/icons/Help';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';

import MenuList from '@material-ui/core/MenuList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScheduleIcon from '@material-ui/icons/Schedule';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ReportIcon from '@material-ui/icons/Report';

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
  
//   const useStyles = makeStyles((theme) => ({
// 	root: {
// 	  backgroundColor: theme.palette.background.paper,
// 	  width: 500,
// 	},
//   }));

function Admin() {
	// const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
	// const useStyles = makeStyles((theme) => ({
	// 	root: {
	// 	  flexGrow: 1,
	// 	  maxWidth: 752,
	// 	},
	// 	demo: {
	// 	  backgroundColor: theme.palette.background.paper,
	// 	},
	// 	title: {
	// 	  margin: theme.spacing(4, 0, 2),
	// 	},
	//   }));
	const [openusertooltip, setOpenusertooltip] = useState(false)
	const [graphloading, setgraphloading] = useState(false)
	const [Arr, setArr] = useState([])
	var studentarray = [['year','count']]
	var studentarra = [['year','count'],['ded',21],['rfre',2]]
    const { SearchBar } = Search;
	// const [arr, setArr] = React.useState([]);
	const [modalShow, setModalShow] = React.useState(false);
	const [tasks, setTasks] = React.useState([]);
	const [tasksA, setTasksA] = React.useState([]);
	const [newTask, setnewTask] = React.useState('');
	const [newEmail, setnewEmail] = React.useState('');
	const [newPhone, setnewPhone] = React.useState('');
    const [newStatus1, setnewStatus1] = React.useState('');
	const [newStatus2, setnewStatus2] = React.useState('');
	const [newStatus3, setnewStatus3] = React.useState('');
    const [newYear, setnewYear] = React.useState('');
	const [updateTask, setupdateTask] = React.useState('');
	const [newfireYearA, setNewFireYearA] = React.useState('Select');
	const [usr, setusr] = React.useState('');
	const [newuser, setNewUser] = React.useState([]);
	const [tasksyearsA, setTasksyearsA] = React.useState([]);
	const [tasksadmin, setTasksadmin] = React.useState([]);
	const [tasksadmins, setTasksadmins] = React.useState([]);
	const [tasksactivities, setTasksactivities] = React.useState([]);
	const [searchTerm, setSearchTerm] = React.useState('');
	const [searchTermforT, setSearchTermforT] = React.useState('');
	const [searchTermforSS, setSearchTermforSS] = React.useState('');
	const [searchTermforG, setSearchTermforG] = React.useState('');
	const [searchTermforR, setSearchTermforR] = React.useState('');
	const [searchTermforN, setSearchTermforN] = React.useState('');
	const [searchTermforV, setSearchTermforV] = React.useState('');
	const [searchTermforM, setSearchTermforM] = React.useState('');
	const [searchTermforF, setSearchTermforF] = React.useState('');
	
	const [showDelete, setShowDelete] = React.useState(false);
	const [showUpdate, setShowUpdate] = React.useState(false);

	const [count, setCount] = React.useState(0);
	const [loading, setLoading] = useState(true);
	const [apiloading, setApiLoading] = useState(false);
	const [imgloading, setimgloading] = useState('')
  	const [color, setcolor] = useState('')
	const [tableid, settableid] = useState('')
	const [newimUrlS, setnewImUrlS] = React.useState('');


    const [newkh, setnewKh] = React.useState('');
  	const handleCloseDelete = () => setShowDelete(false);
  	const handleShowDelete = () => setShowDelete(true);
	const handleCloseUpdate = () => setShowUpdate(false);
	const handleShowUpdate = () => setShowUpdate(true);
	const [showresolution, setShowresolution] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [showadmin, setShowadmin] = useState(false);
	const [showlogout, setShowlogout] = useState(false);
	const [showuserinfo, setShowuserinfo] = useState(false);
	const [showadminReport, setShowadminReport] = useState(false);
	const [showapproveconfirm, setShowapproveconfirm] = useState(false);





	const [showfname, setshowfname] = useState('')
	const [showlname, setshowlname] = useState('')
	const [showemail, setshowemail] = useState('')
	const [showlocation, setshowlocation] = useState('')
	const [showtime, setshowtime] = useState('')
	const [showdate, setshowdate] = useState('')
	const [showimg, setshowimg] = useState('')

	var i = 0
	var m=''
	var colormap = ['#aa00ff','#e91e63','#4caf50','#ff5722','#673ab7','#2c3e50','#C71585','#008080','#0077b5','#0063B1']
	function onAdd(id){
		console.log('https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65))
		
		setnewKh('https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65));
		document.getElementById(id).src = 'https://drive.google.com/uc?export=download&id='+newimUrlS.slice(32, 65);
	}
	const [countx, setcountx] = useState('')
	const [textwhennouser, settextwhennouser] = useState('')
	
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const prevOpen = React.useRef(open);
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	function gettime(){
		return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
	  }
	  function getdate(){
		return new Date().getDate()+ " "+ months[new Date().getMonth()]+","+ new Date().getFullYear();
	  }
	  const themenew = createMuiTheme({
		palette: {
		  secondary: {
			main: '#E33E7F'
		  }
		}
	  });
	const [iscurrentAdminAlok, setIsCurrentAdminAlok] = useState(false)
	useEffect(()=>{
		window.addEventListener("beforeunload", function (e) {

			if (fire.auth().currentUser.email=='alokmondal70@gmail.com'){
				fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
			.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:0,owner:'Owner'})
			}
			else{
				fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
			.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:0,owner:'Admin'})
			}
			              
		
		  });
		  window.addEventListener("unload", function (e) {
			if (fire.auth().currentUser.email=='alokmondal70@gmail.com'){
				fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
			.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:0,owner:'Owner'})
			}
			else{
				fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
			.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:0,owner:'Admin'})
			}
			                    
		  });


		  
		fire.firestore().collection('user').onSnapshot(function(data){
			setTasksadmin(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			if(data.size==0){
                // setcountx(<span style={{display:'flex'}}><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span><span style={{paddingTop:8,paddingLeft:5}}>Notice</span></span>);document.getElementById('nonotice').style.display='block';
				setcountx(<NotificationsIcon style={{color:'white'}}/>)
				settextwhennouser(<Alert variant='info'><p>No one has signed up for Administrator. User record empty! 
				You can see the notification if there is any admin request at Notification bar. </p></Alert>)
			}
                else{
                    // document.getElementById('nonotice').style.display='none';
                // setcountx(<span style={{display:'flex'}}><span style={{color:'#483D8B',fontSize:20}}><MdEventNote/> </span><span style={{paddingTop:8,paddingLeft:5}}>Notice</span> <sup><Badge style={{fontSize:12}} pill variant='primary'>{data.size}</Badge></sup></span>);
                setcountx(<Badge badgeContent={data.size} color="secondary" overlap="circle">
                <NotificationsIcon style={{color:'white'}}/>
              </Badge>)
			  settextwhennouser(<Alert variant='info'><p>The following User(s) want to access Admin Panel...</p></Alert>)
            }
		})
		fire.firestore().collection('admins')
		.orderBy('status','desc')
		.onSnapshot(function(data){
			setTasksadmins(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
		})
		if (fire.auth().currentUser.email=='alokmondal70@gmail.com')
		{
			setIsCurrentAdminAlok(true)
		fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
		.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:1,owner:'Owner'})
		}
		else{
		fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
		.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:1,owner:'Admin'})
		}

		const fetchData = () =>{
			const db = fire.firestore();
			document.getElementById('home').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('all').style.display = 'none';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'block';
			});
			
			document.getElementById('students').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'block';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'block';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				
			})
			document.getElementById('teachers').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'block';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'block';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('teachers').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('slideshows').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'block';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'block';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('slideshow').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('gallerycontrol').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'block';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'block';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('gallery').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('recruiterscontrol').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'block';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'block';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('recruiters').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('noticecontrol').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'block';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'block';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('notice').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('videocontrol').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'block';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'block';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('video').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('magazinecontrol').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'block';
				document.getElementById('magazineheading').style.display = 'block';
				document.getElementById('feedbackheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('magazines').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			document.getElementById('feedbackcontrol').addEventListener('click',()=>{setApiLoading(true)
				setTasksA([])
				document.getElementById('all').style.display = 'block';
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('feedbackbody').style.display = 'block';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('magazinebody').style.display = 'none';
				document.getElementById('magazineheading').style.display = 'none';
				document.getElementById('feedbackheading').style.display = 'block';
				document.getElementById('homecard').style.display = 'none';
				db.collection('feedbacks').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
				setTimeout(() => {
					setApiLoading(false)
				}, 2000);
			})
			
			
			
			
			fire.firestore().collection('students').where("year_arr","!=","").
			orderBy("year_arr","desc").onSnapshot(function(data){
				setTasksyearsA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				
				})
				fire.firestore().collection('activities')
				.orderBy('timestamp','desc')
				.onSnapshot(function(data){
					setTasksactivities(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
					
					})
			// fire.firestore().collection(fire.auth().currentUser.email).onSnapshot(function(data){
			// 		setNewUser(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));	
			// 	})
			
			
		};
		
		
		
		setTimeout(() => {
            setLoading(false)
			fetchData();
        }, 3000);

		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		  }
	  
		  prevOpen.current = open;
	}, [open]);
	

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCloseP = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
	
	function onDelete(id, year){
		const db = fire.firestore()
	    if(year== 1){db.collection('teachers').doc(id).delete(); activities(id,'flagteachersDelete');}
		else if(year== 2){db.collection('slideshow').doc(id).delete();activities(id,'flagslideDelete');}
		else if(year== 3){db.collection('gallery').doc(id).delete();activities(id,'flaggalleryDelete');}
		else if(year== 4){db.collection('recruiters').doc(id).delete();activities(id,'flagrecruitersDelete');}
		else if(year== 5){db.collection('notice').doc(id).delete();activities(id,'flagnoticeDelete');}
		else if(year== 6){db.collection('video').doc(id).delete();activities(id,'flagvideoDelete');}
		else if(year== 7){db.collection('feedbacks').doc(id).delete();activities(id,'flagfeedbacksDelete');}
		else if(year== 8){db.collection('magazines').doc(id).delete();activities(id,'flagmagazinesDelete');}
		else{db.collection('students').doc('year').collection(newfireYearA).doc(id).delete()}
	}

	function activities(useremail, flag){
		if (flag=='flaguserDecline'){
		fire.firestore().collection('activities').doc()
		.set({task:fire.auth().currentUser.email+' Decline user '+useremail+' from admin request.',
		color:'danger',
		date:getdate(),
		time:gettime(),
	  timestamp:new Date().valueOf()})
		}
		else if (flag=='flaguserApprove'){
		  fire.firestore().collection('activities').doc()
		  .set({task:fire.auth().currentUser.email+' approve '+useremail+' as an admin. '+useremail+' is an Admin now.',
		color:'success',
		date:getdate(),
		time:gettime(),
		  timestamp:new Date().valueOf()})
		  }
		  else if (flag=='flagteachersDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Teachers Section.',
		  color:'danger',
		  date:getdate(),
		time:gettime(),
			timestamp:new Date().valueOf()})
			}
			else if (flag=='flagslideDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Slideshow Section.',
		  color:'danger',
		  date:getdate(),
		time:gettime(),
			timestamp:new Date().valueOf()})
			}
		else if (flag=='flaggalleryDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Gallery Section.',
			color:'danger',
			date:getdate(),
		time:gettime(),
			timestamp:new Date().valueOf()})
			}
			else if (flag=='flagrecruitersDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Recruiters Section.',
			 color:'danger',
			 date:getdate(),
		time:gettime(),
			timestamp:new Date().valueOf()})
			}
			else if (flag=='flagnoticeDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Notice Section.',
			  color:'danger',
			  date:getdate(),
		time:gettime(),
			timestamp:new Date().valueOf()})
			}
		else if (flag=='flagvideoDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Video Section.',
		  color:'danger',
		  date:getdate(),
		time:gettime(),
			timestamp:new Date().valueOf()})
			}
			else if (flag=='flagfeedbacksDelete'){
			fire.firestore().collection('activities').doc()
		.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Feedback Section.',
			  color:'danger',
			  date:getdate(),
		time:gettime(),
				timestamp:new Date().valueOf()})
			}
		else if (flag=='flagmagazinesDelete'){
			fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' Delete '+useremail+' from Magazine Section.',
			color:'danger',
			date:getdate(),
		time:gettime(),
				timestamp:new Date().valueOf()})
			}
	}

	const adminstudentopt = ()=>{
		if(newfireYearA=='Select'){alert('Please select a year to Go')}
		else{
		setApiLoading(true)
		fire.firestore().collection('students').doc('year').collection(newfireYearA).orderBy("name","asc")
		.onSnapshot(function(data){setCount(data.size);setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
		document.getElementById('count').style.display='block'
		// document.getElementById('upname').value=data.data().name
	}
		);
		
		setTimeout(() => {
			setApiLoading(false)
		}, 2000);
		
	}
	}
	var array=[]
	const [isSignout, setIsSignout] = useState(false)

	const logout = ()=>{
		if (fire.auth().currentUser.email=='alokmondal70@gmail.com'){
			fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
		.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:0,owner:'Owner'})
		}
		else{
			fire.firestore().collection('admins').doc(fire.auth().currentUser.email)
		.set({email:fire.auth().currentUser.email,timestamp:new Date().valueOf(),status:0,owner:'Admin'})
		}
		
		
		fire.auth().signOut()
		.then(function(){
			setIsSignout(true)
		}).catch((e)=>{
	
		})
	  }
	
	  const StyledBadge = withStyles((theme) => ({
		badge: {
		  backgroundColor: '#44b700',
		  color: '#44b700',
		  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		  '&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		  },
		},
		'@keyframes ripple': {
		  '0%': {
			transform: 'scale(.8)',
			opacity: 1,
		  },
		  '100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		  },
		},
	  }))(Badge);
	//   const useStyles = makeStyles((theme) => ({
	// 	paper: {
	// 	  padding: '6px 16px',
	// 	},
	// 	secondaryTail: {
	// 	  backgroundColor: theme.palette.secondary.main,
	// 	},
	// 	root: {
	// 		flexGrow: 1,
	// 		maxWidth: 1000,
	// 	  },
	// 	  demo: {
	// 		backgroundColor: theme.palette.background.paper,
	// 		flexGrow: 1,
	// 		maxWidth: 1000,
	// 	  },
	// 	  title: {
	// 		margin: theme.spacing(4, 0, 2),
	// 	  },
	//   }));
	//   const classes = useStyles();
	  const [dense, setDense] = React.useState(false);
	  const [secondary, setSecondary] = React.useState(false);
	  const [deleteduser, setdeleteduser] = useState('')
	  function generate(element) {
		return [0, 1, 2].map((value) =>
		  React.cloneElement(element, {
			key: value,
		  }),
		);
	  }
	const handleAdminDelete = ()=>{
		deleteduser.delete().then(()=>{

		}).catch((error)=>{

		})
	}
	const handleresolution = ()=>{
		if (window.innerWidth<800 && window.innerHeight <800){
			// alert('Your Resolution is->'+'width: '+window.innerWidth+'height: '+window.innerHeight+' Try Laptop/Desktop')
			setShowresolution(true)
		}
		else{
			// alert('width:'+window.innerWidth+'height:'+window.innerHeight)
			setModalShow(true)
		}
	}
	function signupprocess(emailaddress, userpassword){
		fire.auth().createUserWithEmailAndPassword(emailaddress, userpassword)
		.then((userCredential) => {
		  
		  console.log(userCredential.user)
		  
		})
		.catch((error) => {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  
		});
	}
	const [deleteid, setdeleteid]=useState('')
	const [deleteyear, setdeleteyear]=useState('')
	const [upid, setupid] = useState('')
	const [upname, setupname] = useState('')
	const [upemail, setupemail] = useState('')
	const [upphone, setupphone] = useState('')
	const [upstatus1, setupstatus1] = useState('')
	const [upstatus2, setupstatus2] = useState('')
	const [upstatus3, setupstatus3] = useState('')
	const [upurl, setupurl] = useState('')
	const [confirmmsg, setconfirmmsg] = useState('')
	const [reportmsg, setreportmsg] = useState('')
	const [curr_id, setcurr_id] = useState('')
	const [curr_email, setcurr_email] = useState('')
	const [curr_password, setcurr_password] = useState('')

	const [openback, setOpenback] = React.useState(false);

function handleapprove(){
if (confirmmsg!='CONFIRM'){
	alert('Write "CONFIRM" to approve')
	setOpenback(false)
}
else{
	activities(curr_email,'flaguserApprove');
	fire.auth().createUserWithEmailAndPassword(curr_email, curr_password)
	.then((userCredential) => {
	  
	//   console.log(userCredential.user)
	  fire.firestore().collection('admins').doc(curr_id).set({email:curr_email,password:curr_password,timestamp:new Date().valueOf()})
	  fire.firestore().collection('user').doc(curr_id).delete()
	  
	  setShowapproveconfirm(false)
	  setOpenback(false)
	  setShowlogout(true)
	})
	.catch((error) => {
	  var errorCode = error.code;
	  var errorMessage = error.message;

	});
}
}

function handledecline(curr_id){
	fire.firestore().collection('user').doc(curr_id).delete()
}
	// const [anchorEl, setAnchorEl] = useState(null);
  	// const open = Boolean(anchorEl);
	  var userColor = ['#4cae50','#ff5722','#e91e63','#6539b3']
// const CurrentUser = fire.auth().currentUser.email
const useStyles = makeStyles((theme) => ({
	backdrop: {
	  zIndex: theme.zIndex.drawer + 1,
	  color: '#fff',
	},
	root: {
		backgroundColor: theme.palette.background.paper,
		// width: 500,
	  },
  }));
  const classes = useStyles();
  
return (
	<div>
	{
    loading ?
    	<div className={containerStyle.climbloader}> 
			<HashLoader color='#36D7B7' size={70}/>
		</div>
	:
		<div>
		

				<div>
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
					
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					
						<Navbar.Collapse id="responsive-navbar-nav">
						<Navbar.Brand href="#home"><BubbleChartIcon />Admin Panel</Navbar.Brand>
						<Nav className="mr-auto">
						{/* <span className={navstyle.navi}><FcQuestions/>Help </span> */}
						<Nav.Link id="home" href="#home"><span className={navstyle.navi}>Home </span></Nav.Link>
						{/* <Nav.Link id="about" href="#About"><FcAbout/> About</Nav.Link> */}
						<Nav.Link id='students' href="#student"><span className={navstyle.navi}>Students </span></Nav.Link>
						<Nav.Link id='teachers' href="#teacher"><span className={navstyle.navi}>Teachers </span></Nav.Link>
						<Nav.Link id="slideshows" href="#slideshow"><span className={navstyle.navi}>Slideshow </span></Nav.Link>
						<Nav.Link id='gallerycontrol' href="#gallery"><span className={navstyle.navi}>Gallery </span></Nav.Link>
						<Nav.Link id='recruiterscontrol' href="#recruiters"><span className={navstyle.navi}>Recruiters </span></Nav.Link>
						<Nav.Link id='noticecontrol' href="#notice"><span className={navstyle.navi}>Notice </span></Nav.Link>
						<Nav.Link id='videocontrol' href="#video"><span className={navstyle.navi}>Video </span></Nav.Link>
						<Nav.Link id='magazinecontrol' href="#magazine"><span className={navstyle.navi}>Magazine </span></Nav.Link>
						<Nav.Link id='feedbackcontrol' href="#feedback"><span className={navstyle.navi}>Feedback </span></Nav.Link>
						{/* <Nav.Link id='adminusercontrol' href="#" onClick={()=>setShowadmin(true)}><span className={navstyle.navi}>User </span></Nav.Link> */}
						{/* <Nav.Link id='helplink' href="mailto:dsubham776050@gmail.com?subject=Help regarding...&body=Hi, my name is..." target='_blank'><span className={navstyle.navi}><FcQuestions/>Help </span></Nav.Link> */}
						
						
						</Nav>
						{/* <Form inline>
						<div style={{display:'flex'}}>
						<Tooltip title='Notification'>
						<IconButton aria-label="notification" onClick={()=>{setcountx(<NotificationsIcon style={{color:'white'}}/>);setShowadmin(true)}}>
							{countx}
						</IconButton>
						</Tooltip>
						<Tooltip title='Help'>
						<IconButton aria-label="help" >
							<HelpIcon style={{color:'white'}}/>
						</IconButton>
						</Tooltip>
						<Tooltip title='Log Out'>
						<IconButton aria-label="logout" onClick={logout}>
							<ExitToAppIcon style={{color:'white'}}/>
						</IconButton>
						</Tooltip>
						<Tooltip title='Your Profile'>
						
							<IconButton aria-label="user"
							ref={anchorRef}
							aria-controls={open ? 'menu-list-grow' : undefined}
							aria-haspopup="true"
							onClick={handleToggle}>
								<Avatar style={{width:24,height:24,backgroundColor:'#e91e63'}}></Avatar>
							</IconButton>	
						</Tooltip>
							<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
								{...TransitionProps}
								style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
								>
								<Paper style={{backgroundColor:'#343a40',color:'white'}}>
									<ClickAwayListener onClickAway={handleCloseP}>
									<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
									
										<MenuItem onClick={handleCloseP}><p>Signed in as<br/> <span style={{fontSize:14}}><b>{fire.auth().currentUser.email}</b></span></p></MenuItem>
										
										<MenuItem onClick={handleCloseP}>Documentation</MenuItem>
										<MenuItem ><a href="mailto:dsubham776050@gmail.com" style={{color:'white',textDecoration:'none'}}>Report a problem</a></MenuItem>
										<MenuItem onClick={logout}>Logout</MenuItem>
									</MenuList>
									</ClickAwayListener>
								</Paper>
								</Grow>
							)}
							</Popper>
						</div>
						</Form> */}
						</Navbar.Collapse>
						<Form inline>
						<div style={{display:'flex'}}>
						<Tooltip title='Notification'>
						<IconButton aria-label="notification" onClick={()=>{setcountx(<NotificationsIcon style={{color:'white'}}/>);setShowadmin(true)}}>
							{countx}
						</IconButton>
						</Tooltip>
						<Tooltip title='Help'>
						<IconButton aria-label="help" >
							<HelpIcon style={{color:'white'}}/>
						</IconButton>
						</Tooltip>
						<Tooltip title='Log Out'>
						<IconButton aria-label="logout" onClick={logout}>
							<ExitToAppIcon style={{color:'white'}}/>
						</IconButton>
						</Tooltip>
						<Tooltip title='Your Profile'>
						
							<IconButton aria-label="user"
							ref={anchorRef}
							aria-controls={open ? 'menu-list-grow' : undefined}
							aria-haspopup="true"
							onClick={handleToggle}>
								<Avatar style={{width:24,height:24,backgroundColor:'#e91e63'}}></Avatar>
							</IconButton>
						</Tooltip>
							<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
								{...TransitionProps}
								style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
								>
								<Paper style={{backgroundColor:'black',color:'white'}}>
									<ClickAwayListener onClickAway={handleCloseP}>
									<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
										<MenuItem onClick={handleCloseP}><p>Signed in as<br/> <span style={{fontSize:14}}><b>{fire.auth().currentUser.email}</b></span></p></MenuItem>
										<MenuItem onClick={handleCloseP}>Documentation</MenuItem>
										<MenuItem ><a href="mailto:dsubham776050@gmail.com" style={{color:'white',textDecoration:'none'}}>Report a problem</a></MenuItem>
										<MenuItem >Contribute</MenuItem>
									</MenuList>
									</ClickAwayListener>
								</Paper>
								</Grow>
							)}
							</Popper>
						</div>
						</Form>
					</Navbar>
					{apiloading&& <LinearProgress />}
				</div>
				<br/>
	

	{/* <Container fluid='xl' className={containerStyle.container} ><br/><br/> */}
	{/* <div id='home' style={{display:'block'}}><p>hello</p></div> */}
	

	<div id='homecard' style={{display:'block',backgroundColor:'#D1ECF1'}}>
<br/><br/>
	<Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
            <TouchAppIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding:15}}>
            <Typography variant="h6" component="h1">
              Ease of use
            </Typography>
            <Typography>Experience with this very simple and async magic touch application. Very easy to handle multiple data.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SecurityIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding:15}}>
            <Typography variant="h6" component="h1">
              Fast & Secure
            </Typography>
            <Typography>Fast as it&apos;s made with future level framework! and Secure as the data will be stored to google api</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success">
            <SportsEsportsIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding:15}}>
            <Typography variant="h6" component="h1">
              Micro Control Panel
            </Typography>
            <Typography>Explore the most powerful, advanced and integrated Micro Control Panel of Administration Panel.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AccountCircleIcon />
          </TimelineDot>
		  <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding:15}}>
            <Typography variant="h6" component="h1">
              Be an Admin
            </Typography>
            <Typography>Because you have all the power! You can modify, delete, add any data you want. So, be careful.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info">
            <MouseIcon />
          </TimelineDot>
		  <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding:15}}>
            <Typography variant="h6" component="h1">
              Cool Experience
            </Typography>
            <Typography>Enjoy every touches and get cool experiences with this Admin Panel. Never forget to give a feedback!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
	  <TimelineItem>
        <TimelineSeparator>
          <TimelineDot >
            <GroupIcon />
          </TimelineDot>
		  
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{padding:15}}>
            <Typography variant="h6" component="h1">
              Be Respectful
            </Typography>
            <Typography>Be Respectful with your juniors, seniors and your classmates! Be neutral when you are admin of this web app.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
	
		<hr/>
		
	</div>
	<div id='all' style={{display:'none'}}>
	<Container fluid='xl' className={containerStyle.container} ><br/><br/><br/>
	<div id='batch' style={{display:'none',textAlign:'center'}} >
	{/* <LinearProgress /> */}
		<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>👩‍🎓Welcome to Students' Database Table</h2>
		<Row><Col></Col><Col>
		<Form style={{display:'flex'}}>
		<Form.Control as="select" type="text" value={newfireYearA} onChange={e=> setNewFireYearA(e.target.value)}>
		<option>Select</option>
		{tasksyearsA.map(spell=>(
			<option>{spell.year_arr}</option>
			
		))}
		</Form.Control>
		<Button onClick={adminstudentopt}>Go</Button>
		</Form>
		</Col>
		<Col>
		<h4 id='count' style={{display:'none'}}>
			 <Badge color="secondary" badgeContent={count} overlap="circle"><FindInPageIcon fontSize="large" style={{color:'white'}}/></Badge>
		</h4>
		</Col>
		</Row>
	</div>

	<div id='teacherheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>👩‍🏫Welcome to Teachers' Database Table</h2>
	
	</div>
	<div id='slideshowheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>📽Welcome to Slideshow Table</h2>
	<div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
		<p></p>
		<Alert variant='danger'>
		<p style={{fontSize:18}}>⚠️The first three images of Slideshow are locally stored. You can't view or replace them. Make sure you will
			not upload those three images further or Slides will messed up. Be careful. Enjoy !
		</p>
		</Alert>
		<p></p>
	</div>
	</div>
	<div id='galleryheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>🖼️Welcome to Gallery Table</h2>
	
	</div>
	<div id='recruiterheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>🧑‍💼Welcome to Recruiter Table</h2>
	
	</div>
	<div id='noticeheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>📋Welcome to Notice Table</h2>
	
	</div>
	<div id='videoheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>🎦Welcome to Video Table</h2>
	
	</div>
	<div id='magazineheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>✍️Welcome to Magazine Table</h2>
	
	</div>
	<div id='feedbackheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>📩Welcome to Feedback Table</h2>
	
	</div>

	
	<div id=''></div>
	<br></br>

	<div id='studentbody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	{/* {imgloading&&setApiLoading(false)} */}
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
	<div >
	<Table responsive striped bordered hover variant="dark" >
	<thead>
	<tr>
		<th>😀Name</th>
		<th>📮Email (Username)</th>
		<th>📞Mobile</th>
		<th>📜About1</th>
		<th>📜About2</th>
		<th>📜About3</th>
		<th>📷Photo</th>
		<th>⛔️Delete</th>	
		<th>⚠️Update</th>
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTerm==""){
				return val
			}else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
				return val
			}else if(val.email.toLowerCase().includes(searchTerm.toLowerCase())){
				return val
			}
		}).map(spell=>(
			
			<tr key={spell.id}>
			<td style={{maxWidth:110,wordWrap:'break-word'}}>{spell.name}<br/>
			<div ><input id='upname' type='text' style={{width:90,height:30}} defaultValue={spell.name}  onChange={(e)=>{settableid(spell.id);setnewTask(e.target.value)}}/></div>
			</td>
			<td style={{maxWidth:110,wordWrap:'break-word'}}>{spell.email}<br/></td>
			<td style={{maxWidth:110,wordWrap:'break-word'}}>{spell.phone}<br/>
			<div ><input id='upphone' type='text' style={{width:90,height:30}} defaultValue={spell.phone}  onChange={(e)=>{settableid(spell.id);setnewPhone(e.target.value)}}/></div>
			</td>
			<td style={{maxWidth:110,wordWrap:'break-word'}}>{spell.status1}<br/>
			<div ><input id='upstatus1' type='text' style={{width:90,height:30}} defaultValue={spell.status1}  onChange={(e)=>{settableid(spell.id);setnewStatus1(e.target.value)}}/></div>
			</td>
			<td style={{maxWidth:110,wordWrap:'break-word'}}>{spell.status2}<br/>
			<div ><input id='upstatus2' type='text' style={{width:90,height:30}} defaultValue={spell.status2} onChange={(e)=>{settableid(spell.id);setnewStatus2(e.target.value)}}/></div>
			</td>
			<td style={{maxWidth:110,wordWrap:'break-word'}}>{spell.status3}<br/>
			<div ><input id='upstatus3' type='text' style={{width:90,height:30}} defaultValue={spell.status3} onChange={(e)=>{settableid(spell.id);setnewStatus3(e.target.value)}}/></div>
			</td>
			<td><img id={spell.id} src={spell.url}  width={100} /><br/>
			<div style={{display:'flex'}}><input id='photo' type='text' placeholder='new url' style={{width:90,height:30}}  onPaste={(e)=>{settableid(spell.id);
      setnewImUrlS(e.clipboardData.getData('Text'))
     }}/><Button size="sm" onClick={()=>onAdd(spell.id)} style={{height:30}}>Add</Button></div>
			</td>
			{/* <td><Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td> */}
			<td><Button variant="danger" onClick={()=>{setdeleteid(spell.id);setdeleteyear(spell.year);setShowDeleteModal(true)}}
			>Delete</Button></td>
			{/* <td><Button variant="warning" onClick={()=>onUpdate(spell.id, spell.year, spell.name,spell.email,spell.phone,spell.status1,spell.status2,spell.status3,spell.url)}
			>Update</Button></td> */}
			<td><Button variant="warning" onClick={()=>{
				setupid(spell.id);
				setupname(spell.name);
				setupemail(spell.email);
				setupphone(spell.phone);
				setupstatus1(spell.status1);
				setupstatus2(spell.status2);
				setupstatus3(spell.status3);
				setupurl(spell.url);
				setShowUpdateModal(true);}}
			>Update</Button></td>
			</tr>
		))}
		
		{/* onLoad={()=>{console.log('done loading');setimgloading(true)}} */}
	</tbody>
	</Table>
	</div><br/>
	</Col>
	</Row>
	</div>

	<div id='teachersbody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforT(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>
		<th>😀Name</th>
		<th>📮Email (Uname)</th>
		<th>📞Mobile</th>
		<th>📜About</th>
		<th>📷Photo</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforT==""){
				return val
			}else if(val.name.toLowerCase().includes(searchTermforT.toLowerCase())){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforT.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>
			<td>{spell.name}<br/>
			</td>
			<td>{spell.email}<br/></td>
			<td>{spell.phone}<br/>
			</td>
			<td>{spell.status1}<br/>
			</td>
			<img src={spell.url} width={120}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>

	<div id='slideshowbody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforSS(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>

		<th>Slide Name</th>

		<th>📷Photo</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforSS==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforSS.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.email}<br/></td>

			<img src={spell.url} width={250}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table>
	</div><br/>
	</Col>
	</Row>
	</div>

	<div id='gallerybody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforG(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>

		<th>Image Id</th>

		<th>📷Photo</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforG==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforG.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.email}<br/></td>

			<img src={spell.url} width={250}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>

	<div id='recruiterbody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforR(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>
		<th>Company Name</th>
		<th>📷Photo</th>
		<th>⛔️Delete</th>
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforR==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforR.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.email}<br/></td>

			<img src={spell.url} width={200}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>

	<div id='noticebody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>

	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforN(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>
		<th>Title</th>
		<th>📜Description</th>
		<th>📷Photo</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforN==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforN.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.email}<br/></td>
			<td>{spell.status1}<br/>
			</td>
			<img src={spell.url} width={200}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>

	<div id='videobody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforV(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>

		<th>Title</th>
		<th>Link</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforV==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforV.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.email}<br/></td>

			<td><a href={spell.url} target='_blank'>{spell.url}</a></td>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>

	<div id='magazinebody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforM(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>

		<th>Name</th>
		<th>Link</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforM==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforM.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.email}<br/></td>

			<td><a href={spell.url} target='_blank'>{spell.url}</a></td>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>

	<div id='feedbackbody' style={{display:'none',textAlign:'center'}} >
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforF(e.target.value)}/>
	<div style={{overflowY:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>

		<th>Name</th>
		<th>Email</th>
		<th>Comments</th>
		<th>⛔️Delete</th>	
	</tr>
	</thead>
	<tbody>
		{tasksA.filter((val)=>{
			if(searchTermforF==""){
				return val
			}else if(val.email.toLowerCase().includes(searchTermforF.toLowerCase())){
				return val
			}else if(val.name.toLowerCase().includes(searchTermforF.toLowerCase())){
				return val
			}
		}).map(spell=>(
			<tr key={spell.id}>

			<td>{spell.name}<br/></td>
			<td>{spell.email}<br/></td>
			<td>{spell.comment}</td>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table></div><br/>
	</Col>
	</Row>
	</div>
			<div className={containerStyle.createbutton}>
			<Tooltip title='Add' >
			<Fab color="primary" aria-label="add" onClick={handleresolution}>
				<AddIcon />
			</Fab>
			</Tooltip>
			</div>
	</Container>
	
	</div>

	<AdminFooter/>

	{/* <Modal
        show={showDelete}
        onHide={handleCloseDelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Attention Before Delete !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          By pressing the Delete button you will lost all data of the inline Id. Recovery of data is not possible. Please make sure before make changes or Delete !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseDelete}>Understood</Button>
        </Modal.Footer>
      </Modal>
	  <Modal
        show={showUpdate}
        onHide={handleCloseUpdate}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Attention Before Update !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			Caution !<br/>
          1. Do not press the Update button before you make changes of your data.<br/>
		  2. In case of updating only one field do not press the Update button before re-entering all the fields. (e.g. suppose a person worked at Tata Power Pvt. Ltd. 1 year ago, but now he is an employer of Google. So for updating his status you need to re-enter or update the rest fields[name,phone,...etc] before pressing the Update button, Otherwise rest data will lost ! ).
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseUpdate}>Understood</Button>
        </Modal.Footer>
      </Modal> */}

	
			
	
			<AdminForm
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
	  
    
	
	  <Modal 
	  	show={showresolution}
        onHide={()=>setShowresolution(false)}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>📵 Unsupported!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please open Micro Admin Panel from your Desktop or Laptop for best experiences!
		</Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={()=>setShowresolution(false)}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
	  <Modal 
	  size="sm"
	  	show={showapproveconfirm}
        onHide={()=>setShowapproveconfirm(false)}
        // backdrop="static"
        // keyboard={false}
		aria-labelledby="contained-modal-title-vcenter"
      	centered
		>
        <Modal.Header closeButton>
          <Modal.Title>Approve?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			<p>Do you want to approve user <b>{curr_email}</b>? white CONFIRM to approve.</p>
			
		<InputGroup className="mb-3">
			<FormControl
			// type="text"
			placeholder="CONFIRM"
			aria-label="Recipient's username"
			aria-describedby="basic-addon2"
			onChange={(e)=>setconfirmmsg(e.target.value)}
			/>
			<InputGroup.Append>
			<Button variant="success" onClick={()=>{setOpenback(!open); handleapprove()}}>Approve</Button>
			</InputGroup.Append>
		</InputGroup>

		<Backdrop className={classes.backdrop} open={openback} >
        <CircularProgress color="inherit" />
      </Backdrop>
		</Modal.Body>
        
      </Modal>

	  <Modal 
	  
	  	show={showuserinfo}
        onHide={()=>setShowuserinfo(false)}
        // backdrop="static"
        // keyboard={false}
		aria-labelledby="contained-modal-title-vcenter"
      	centered
		  
		>
        <Modal.Header closeButton>
          <Modal.Title>ℹ️ About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		{/* {tasksadmin.map((spell=>( */}
			<div>
				<div style={{textAlign:'center',backgroundColor:'#20b2aa'}}>
					<img src={showimg} className={containerStyle.imgstylenew}/>
				</div>
				<div style={{padding:15,color:'#0c5460',textAlign:'center'}}>
			<p>Name: {showfname}&nbsp;{showlname}</p>
			<p>Email: {showemail}</p>
			<p>Location: {showlocation}</p>
			<p>Signup Time: {showtime}</p>
			<p>Date: {showdate}</p>
				</div>
			</div>
		{/* )))} */}
		
		</Modal.Body>
        
      </Modal>

	  <Modal 
	  
	  	show={showadminReport}
        onHide={()=>setShowadminReport(false)}
        // backdrop="static"
        // keyboard={false}
		aria-labelledby="contained-modal-title-vcenter"
      	centered
		  
		>
        <Modal.Header closeButton>
          <Modal.Title>Report {deleteduser}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		<Form.Group controlId="exampleForm.ControlTextarea1">
			<Form.Label>Description Box</Form.Label>
			<Form.Control as="textarea" placeholder="Write a report statement" rows={5} onChange={(e)=>setreportmsg(e.target.value)}/>
		</Form.Group>
			
		<div style={{textAlign:'center'}}>
			<Button variant='warning' onClick={()=>{fire.firestore().collection('activities').doc()
			.set({task:fire.auth().currentUser.email+' reported '+deleteduser+' saying that: '+reportmsg,
			color:'warning',
			date:getdate(),
			time:gettime(),
		timestamp:new Date().valueOf()});setreportmsg('');setShowadminReport(false)}}>Report</Button>
		</div>
		</Modal.Body>
        
      </Modal>

	  <Modal 
	
	  	show={showlogout}
        onHide={()=>setShowlogout(false)}
        backdrop="static"
        keyboard={false}
		aria-labelledby="contained-modal-title-vcenter"
      	centered
		>
        {/* <Modal.Header closeButton>
          <Modal.Title>Approve?</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>Please Logout and Login again to continue...
		<br/>
		<Button variant="danger" onClick={()=>{logout()}}>Logout</Button>
			
		<Backdrop className={classes.backdrop} open={openback} >
        <CircularProgress color="inherit" />
      </Backdrop>
		</Modal.Body>
        
      </Modal>

	  <Modal 
	  size='lg'
	  	show={showadmin}
        onHide={()=>setShowadmin(false)}
        
		aria-labelledby="contained-modal-title-vcenter"
      	centered
		>
        {/* <Modal.Header closeButton>
          <Modal.Title>New Users</Modal.Title>
        </Modal.Header> */}
        <Modal.Body >
			
						
						
						{/* <Row>
							<Col>
							<span>{spell.email}</span>
							</Col>
							<Col xs lg="1">
									
							</Col>
							<Col xs lg="1" style={{display:'flex'}}>
								
							<Tooltip title='Log Out'>
									<IconButton aria-label="logout" onClick={()=>{signupprocess(spell.email, spell.password)}}>
										<div style={{color:'green'}}><DoneIcon/></div>
									</IconButton>
									</Tooltip>
									
									<Tooltip title='Log Out'>
									<IconButton aria-label="logout" >
										<div style={{color:'red'}}><CloseIcon/></div>
									</IconButton>
									</Tooltip>
							</Col>
						</Row> */}
		<div className={classes.root}>				
	<AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
		  scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="scrollable force tabs example"
        >
          <Tab label={<div style={{display:'flex'}}><PersonIcon/><span>Admin Requests</span></div>} {...a11yProps(0)} />
          <Tab label={<div style={{display:'flex'}}><SupervisorAccountIcon/><span>Admins</span></div>} {...a11yProps(1)} />
		  <Tab label={<div style={{display:'flex'}}><HistoryIcon/><span>Activity Log</span></div>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
	  </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
						<Grid item xs={12} md={12} style={{height:200}}>
						<Typography variant="h6"  >
							<h7  style={{fontSize:17}}>{textwhennouser}</h7>
						</Typography>
						<div >
							<List >
							{tasksadmin.map((spell=>(
								<div>
								<ListItem >
									<ListItemIcon>
									<AccountCircleIcon />
									</ListItemIcon>
									<ListItemText
									primary={
									<Tooltip 
										title='Click to more info'>
										<a onClick={()=>
										{setshowfname(spell.firstname);
										 setshowlname(spell.lastname);
										 setshowemail(spell.email);
										 setshowlocation(spell.city);
										 setshowtime(spell.time);
										 setshowdate(spell.date);
										 setshowimg(spell.url);
										 setShowuserinfo(true)}}
										 style={{cursor:'pointer'}}>{spell.email}</a>
									</Tooltip>
									
									}
									
									/>
									<ListItemSecondaryAction>
										<Tooltip title="Accept">
										<IconButton edge="end" aria-label="ok" onClick={()=>{setcurr_id(spell.id);
											setcurr_email(spell.email);
											setcurr_password(spell.password);
											setShowapproveconfirm(true)}}>
										
										<div style={{color:'green'}}><DoneIcon/></div>
										</IconButton>
										</Tooltip>
										<Tooltip title="Decline">
										<IconButton edge="end" aria-label="close" onClick={()=>{handledecline(spell.id);activities(spell.email,'flaguserDecline');}}>
										
										<div style={{color:'red'}}><CloseIcon/></div>
										</IconButton>
										</Tooltip>
									</ListItemSecondaryAction>
									
									
								</ListItem>
								
								</div>
							)))}
							</List>
						</div>
						</Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
		<Grid item xs={12} md={12} style={{height:200}}>
{/* <p style={{textAlign:'right'}}><FiberManualRecordIcon fontSize="small" style={{color:'#4caf50'}}/>Online&nbsp;&nbsp;<FiberManualRecordIcon fontSize="small" style={{color:'red'}}/>Offline</p> */}
<div style={{textAlign:'center',justifyContent:'space-between',display:'flex'}}>
	{/* <p></p> */}
	<p style={{fontSize:16,color:'green'}}><SupervisorAccountIcon fontSize="small"/><b>Present Administrators</b></p>
	<p>
	<FiberManualRecordIcon fontSize="small" style={{color:'#4caf50'}}/>Online
	&nbsp;<FiberManualRecordIcon fontSize="small" style={{color:'red'}}/>Offline
	</p>
</div>


						{tasksadmins.map((spell=>(

						<Accordion>
							<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							>




<div>
	{iscurrentAdminAlok?
	<div>
		{spell.email=='alokmondal70@gmail.com'?
		<div>
			<Typography style={{display:'flex'}}>
					<div ><Avatar style={{width:35,height:35}}>{spell.email[0].toUpperCase()}</Avatar></div>
					<div className={containerStyle.badge} style={{backgroundColor:'#4caf50'}}></div>
					<span style={{paddingLeft:8,paddingTop:4,fontSize:18}}>{spell.email}
					&nbsp;&nbsp;
					<Chip
							variant="outlined"
							size="small"
							label={spell.owner}
						/>
					</span>
								</Typography>
		</div>
		:
		<div>
			{spell.status==1?
				<div>
					<Typography style={{display:'flex'}}>
						<div ><Avatar style={{width:35,height:35}}>{spell.email[0].toUpperCase()}</Avatar></div>
						<div className={containerStyle.badge} style={{backgroundColor:'#4caf50'}}></div>
						<span style={{paddingLeft:8,paddingTop:4,fontSize:18}}>{spell.email}
						&nbsp;&nbsp;
						
						<Chip
							variant="outlined"
							color="secondary"
							size="small"
							label="Report admin"
							onClick={()=>{setShowadminReport(true);setdeleteduser(spell.email)}}
						/>
						</span>
									</Typography>
				</div>
				:
				<div>
					<Typography style={{display:'flex'}}>
						<div ><Avatar style={{width:35,height:35}}>{spell.email[0].toUpperCase()}</Avatar></div>
						<div className={containerStyle.badge} style={{backgroundColor:'red'}}></div>
						<span style={{paddingLeft:8,paddingTop:4,fontSize:18}}>{spell.email}
						&nbsp;&nbsp;
						
						<Chip
							variant="outlined"
							color="secondary"
							size="small"
							label="Report admin"
							onClick={()=>{setShowadminReport(true);setdeleteduser(spell.email)}}
						/>
						</span>
									</Typography>
				</div>
			}
		</div>
		}
	</div>
	:
	<div>
		{spell.status==1?
		<div>
			<Typography style={{display:'flex'}}>
				<div ><Avatar style={{width:35,height:35}}>{spell.email[0].toUpperCase()}</Avatar></div>
				<div className={containerStyle.badge} style={{backgroundColor:'#4caf50'}}></div>
				 <span style={{paddingLeft:8,paddingTop:4,fontSize:18}}>{spell.email}
				 &nbsp;&nbsp;
					<Chip
							variant="outlined"
							size="small"
							label={spell.owner}
						/>
				 </span>
							</Typography>
		</div>
		:
		<div>
			<Typography style={{display:'flex'}}>
				<div ><Avatar style={{width:35,height:35}}>{spell.email[0].toUpperCase()}</Avatar></div>
				<div className={containerStyle.badge} style={{backgroundColor:'red'}}></div>
				 <span style={{paddingLeft:8,paddingTop:4,fontSize:18}}>{spell.email}
				 &nbsp;&nbsp;
					<Chip
							variant="outlined"
							size="small"
							label={spell.owner}
						/>
				 </span>
							</Typography>
		</div>
		}

	</div>
	}

</div>





							</AccordionSummary>
							<AccordionDetails>
							<Typography>
								<p>Personal Details:</p>
								<p>Comming Soon...</p>
							</Typography>
							</AccordionDetails>
						</Accordion>

      					)))}
						
						</Grid>
        </TabPanel>

		<TabPanel value={value} index={2} dir={theme.direction}>
		<Grid item xs={12} md={12} style={{height:200}}>

						{/* <h2 style={{textAlign:'center'}}>Comming Soon...</h2> */}
						{tasksactivities.map((spell=>(
							<div>
							<Paper elevation={3} >
								<Alert variant={spell.color}>
							<p >
							<span ><b>{spell.task.substr(0,spell.task.indexOf(' '))}</b> -- </span>
							{spell.task.substr(spell.task.indexOf(' ')+1)}
							</p>
							<p style={{textAlign:'right'}}>
								--{spell.time}&nbsp;[{spell.date}]
							</p>
							</Alert>
							</Paper>
							</div>
						)))}
						</Grid>
        </TabPanel>
        
      </SwipeableViews>
	 
		</Modal.Body>
        <Modal.Footer>
		  {/* <Button variant="success" onClick={()=>{signupprocess()}}>
            Approve
          </Button>
          <Button variant="danger" onClick={()=>setShowadmin(false)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
	  {/* <Modal 
	  	show={showDeleteModal}
        onHide={()=>setShowDeleteModal(false)}
        size="sm"
     	aria-labelledby="contained-modal-title-vcenter"
      	centered
        >
        <Modal.Header closeButton>
          <Modal.Title>📵 Unsupported!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please open Micro Admin Panel from your Desktop or Laptop for best experiences!
		</Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={()=>setShowresolution(false)}>
            Cancel
          </Button>
		  <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}

		<AdminDelete
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
		fireyear={newfireYearA}
		year={deleteyear}
		id={deleteid}
      />
	  <AdminUpdate
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}

		fireyear={newfireYearA}

		upid={upid}
		upname={upname}
		upemail={upemail}
		upphone={upphone}
		upstatus1={upstatus1}
		upstatus2={upstatus2}
		upstatus3={upstatus3}
		upurl={upurl}

		newTask={newTask}
		newEmail={newEmail}
		newPhone={newPhone}
		newStatus1={newStatus1}
		newStatus2={newStatus2}
		newStatus3={newStatus3}
		newkh={newkh}
		
		tableid={tableid}
      />
	</div>
}
	</div>
	)
}

export default Admin
