import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {FcHome,FcFeedback,FcQuestions,FcReading,FcBusinesswoman,FcPhotoReel,FcStackOfPhotos,FcConferenceCall} from 'react-icons/fc';
import fire from './config/fire';
import {FcAbout, FcHighPriority, FcPlus,FcCollapse,FcExpand,FcSearch} from 'react-icons/fc';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {ToolkitProvider,Search,products,columns,BootstrapTable} from 'react-bootstrap-table2-toolkit';
import {Button,Row, Container, Col, Form, Navbar,Nav,FormControl, Table, Modal,Alert, OverlayTrigger} from 'react-bootstrap';
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
import Login from './Login';
import animate from './Animated.module.css';
import Chart from "react-google-charts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { storage } from './config/fire';
import HashLoader from 'react-spinners/HashLoader'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
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
function Admin() {
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
	const [newfireYearA, setNewFireYearA] = React.useState('');
	const [tasksyearsA, setTasksyearsA] = React.useState([]);
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

  	const handleCloseDelete = () => setShowDelete(false);
  	const handleShowDelete = () => setShowDelete(true);
	const handleCloseUpdate = () => setShowUpdate(false);
	const handleShowUpdate = () => setShowUpdate(true);
	var i = 0
	var m=''
	useEffect(()=>{
		const fetchData = async () =>{
			const db = fire.firestore();
			// document.getElementById('btngroup').style.display='none';
			// document.getElementById('teachersdescrp').style.display='none';
			// document.getElementById('front').style.display='none';
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
			// document.getElementById('about').addEventListener('click',()=>{
			// 	setTasksA([])
			// 	document.getElementById('all').style.display = 'none';
			// 	document.getElementById('studentbody').style.display = 'none';
			// 	document.getElementById('teachersbody').style.display = 'none';
			// 	document.getElementById('slideshowbody').style.display = 'none';
			// 	document.getElementById('gallerybody').style.display = 'none';
			// 	document.getElementById('recruiterbody').style.display = 'none';
			// 	document.getElementById('noticebody').style.display = 'none';
			// 	document.getElementById('videobody').style.display = 'none';
			// 	document.getElementById('feedbackbody').style.display = 'none';
			// 	document.getElementById('batch').style.display = 'none';
			// 	document.getElementById('teacherheading').style.display = 'none';
			// 	document.getElementById('slideshowheading').style.display = 'none';
			// 	document.getElementById('galleryheading').style.display = 'none';
			// 	document.getElementById('recruiterheading').style.display = 'none';
			// 	document.getElementById('noticeheading').style.display = 'none';
			// 	document.getElementById('videoheading').style.display = 'none';
			// 	document.getElementById('magazinebody').style.display = 'none';
			// 	document.getElementById('magazineheading').style.display = 'none';
			// 	document.getElementById('feedbackheading').style.display = 'none';
			// 	document.getElementById('homecard').style.display = 'block';
			// });
			
			// fire.firestore().collection('students').onSnapshot(function(data){
			// 	setTasksyearsA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				
				

			// 	})
			// tasksyearsA.map(spell=>(
			// 		setArr.push(spell.year_arr)
					
			// 	))
				// setgraphloading(true)
			console.log(studentarray)
			
		};
		fire.firestore().collection('students').onSnapshot(function(data){
			setTasksyearsA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			
			})
		
		
		setTimeout(() => {
            setLoading(false)
			fetchData();
        }, 3000);
		// if(!loading){
		// fetchData();
	// }
	// if (imgloading=='loaded'){
	// 	alert('done')
	// 	setApiLoading(false)
	// }
	// else{
	// 	console.log('false')
	// }
	}, []);

	
	
	function onDelete(id, year){
		const db = fire.firestore()
	    if(year== 1){db.collection('teachers').doc(id).delete()}
		else if(year== 2){db.collection('slideshow').doc(id).delete()}
		else if(year== 3){db.collection('gallery').doc(id).delete()}
		else if(year== 4){db.collection('recruiters').doc(id).delete()}
		else if(year== 5){db.collection('notice').doc(id).delete()}
		else if(year== 6){db.collection('video').doc(id).delete()}
		else if(year== 7){db.collection('feedbacks').doc(id).delete()}
		else if(year== 8){db.collection('magazines').doc(id).delete()}
		else{db.collection('students').doc('year').collection(newfireYearA).doc(id).delete()}
	}
	// function onUpdate(id,name, email,phone,status1,status2,status3,year,url){
	// 	setnewTask(name)
	// 	setnewPhone(phone)
	// 	setnewStatus1(status1)
	// 	setnewStatus2(status2)
	// 	setnewStatus3(status3)
		
	// 	const db = fire.firestore()
	//     if(year== 1){db.collection('teachers').doc(id).update({name:newTask,phone:newPhone,status1:newStatus1,url:url})}
		
	// 	else{db.collection('students').doc('year').collection(newfireYear).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:url})}
	// }
	// const onUpdate = (id,name,email,phone,status,year,url) =>{
	// 	const db = fire.firestore()
	// 	if (newTask=='' && newPhone=='' && newStatus==''){
	// 		db.collection('cafes').doc(id).set({name:name,email:email,phone:phone,status:status,year:year,url:url})
	// 	}
	// 	else{
	// 	db.collection('cafes').doc(id).update({name:newTask,phone:newPhone,status:newStatus})
	// 	}
	// }
	

	const adminstudentopt = ()=>{
		if(newfireYearA==''){alert('Please select a year to Go')}else{
		setApiLoading(true)
		fire.firestore().collection('students').doc('year').collection(newfireYearA).orderBy("name","asc")
		.onSnapshot(function(data){setCount(data.size);setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
		document.getElementById('count').style.display='block'});
		setTimeout(() => {
			setApiLoading(false)
		}, 2000);
		// if (imgloading=='loaded'){
		// 	setApiLoading(false)
		// }else{
		// 	console.log('false')
		// }
	}
	}
	var array=[]

	const logout = ()=>{
		fire.auth().signOut()
		.then(function(){
	
		}).catch((e)=>{
	
		})
	  }
	  const useStyles = makeStyles((theme) => ({
		paper: {
		  padding: '6px 16px',
		},
		secondaryTail: {
		  backgroundColor: theme.palette.secondary.main,
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
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					
						<Navbar.Collapse id="responsive-navbar-nav">
						{/* <Navbar.Brand href="#home">Admin Panel</Navbar.Brand> */}
						<Nav className="mr-auto">
						<Nav.Link id="home" href="#home"><FcHome/> Home</Nav.Link>
						{/* <Nav.Link id="about" href="#About"><FcAbout/> About</Nav.Link> */}
						<Nav.Link id='students' href="#student"><FcReading/> Students</Nav.Link>
						<Nav.Link id='teachers' href="#teacher"><FcBusinesswoman/> Teachers</Nav.Link>
						<Nav.Link id="slideshows" href="#slideshow"><FcPhotoReel/> Slideshow</Nav.Link>
						<Nav.Link id='gallerycontrol' href="#gallery"><FcStackOfPhotos/> Gallery</Nav.Link>
						<Nav.Link id='recruiterscontrol' href="#recruiters"><FcConferenceCall/> Recruiters</Nav.Link>
						<Nav.Link id='noticecontrol' href="#notice">📋Notice</Nav.Link>
						<Nav.Link id='videocontrol' href="#video">🎦Video</Nav.Link>
						<Nav.Link id='magazinecontrol' href="#magazine">Magazine</Nav.Link>
						<Nav.Link id='feedbackcontrol' href="#feedback">Feedback</Nav.Link>
						<Nav.Link id='helplink' href="mailto:dsubham776050@gmail.com?subject=Help regarding...&body=Hi, my name is..." target='_blank'><FcQuestions/> Help</Nav.Link>
						</Nav>
						<Form inline>
						<p>.</p>
						<Button variant="outline-danger" onClick={logout}>Logout</Button>
						</Form>
						</Navbar.Collapse>
					</Navbar>
					{apiloading&& <LinearProgress />}
				</div><br/>
	

	{/* <Container fluid='xl' className={containerStyle.container} ><br/><br/> */}
	{/* <div id='home' style={{display:'block'}}><p>hello</p></div> */}
	

	<div id='homecard' style={{display:'block'}}>

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
          <Paper elevation={3} className={classes.paper}>
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
          <Paper elevation={3} className={classes.paper}>
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
          <Paper elevation={3} className={classes.paper}>
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
          <Paper elevation={3} className={classes.paper}>
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
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Cool Experience
            </Typography>
            <Typography>Enjoy every touches and get cool experiences with us. Never forget to give a feedback!</Typography>
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
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Be Respectful
            </Typography>
            <Typography>Be Respectful with your juniors, seniors and your classmates! Be neutral when you are admin of this web app.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
	
		
		
	</div>
	<div id='all' style={{display:'none'}}>
	<Container fluid='xl' className={containerStyle.container} ><br/><br/>
	<div id='batch' style={{display:'none',textAlign:'center'}} >
	{/* <LinearProgress /> */}
		<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>👩‍🎓Welcome to Students' Database Table</h2>
		<Row><Col></Col><Col>
		<Form style={{display:'flex'}}>
		<Form.Control as="select" type="text" value={newfireYearA} onChange={e=> setNewFireYearA(e.target.value)}>
		{tasksyearsA.map(spell=>(
			<option>{spell.year_arr}</option>
			
		))}
		</Form.Control>
		<Button onClick={adminstudentopt}>Go</Button>
		</Form>
		</Col><Col><h4 id='count' style={{display:'none'}}>Results found <Badge variant='warning' ><span >{count}</span></Badge></h4></Col></Row>
	</div>

	<div id='teacherheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>👩‍🏫Welcome to Teachers' Database Table</h2>
	
	</div>
	<div id='slideshowheading' style={{display:'none',textAlign:'center'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>📽Welcome to Slideshow Table</h2>
	
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
	<div style={{overflow:'scroll',maxHeight:350}}>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>
		<th>😀Name</th>
		<th>📮Email (Uname)</th>
		<th>📞Mobile</th>
		<th>📜About1</th>
		<th>📜About2</th>
		<th>📜About3</th>
		<th>📷Photo</th>
		<th>⚠️Delete</th>	
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
			<td>{spell.name}<br/>
			</td>
			<td>{spell.email}<br/></td>
			<td>{spell.phone}<br/>
			</td>
			<td>{spell.status1}<br/>
			</td>
			<td>{spell.status2}<br/>
			</td>
			<td>{spell.status3}<br/>
			</td>
			<img src={spell.url} onLoad={()=>{console.log('done loading');setimgloading('loaded')}} width={100}/>
			<td><Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
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
		<th>⚠️Delete</th>	
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
		<th>⚠️Delete</th>	
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
		<th>⚠️Delete</th>	
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
		<th>⚠️Delete</th>
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
		<th>⚠️Delete</th>	
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
		<th>⚠️Delete</th>	
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
		<th>⚠️Delete</th>	
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
		<th>⚠️Delete</th>	
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
			<Fab color="primary" aria-label="add" onClick={() => setModalShow(true)}>
				<AddIcon />
			</Fab>
			</Tooltip>
			</div>
	</Container>
	</div>



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
	  
    
	
			

	
	</div>
}
	</div>
	)
}

export default Admin
