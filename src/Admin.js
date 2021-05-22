import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/fire';
import {FcAbout, FcHighPriority, FcPlus,FcCollapse,FcExpand,FcSearch} from 'react-icons/fc';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {ToolkitProvider,Search,products,columns,BootstrapTable} from 'react-bootstrap-table2-toolkit';
import {Button,Row, Container, Col, Form, Navbar,Nav,FormControl, Table, Modal,Alert, OverlayTrigger,Tooltip} from 'react-bootstrap';
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
function Admin() {
    const { SearchBar } = Search;
	const [arr, setArr] = React.useState([]);
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
	
	const [showDelete, setShowDelete] = React.useState(false);
	const [showUpdate, setShowUpdate] = React.useState(false);

	const [count, setCount] = React.useState(0);

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
				document.getElementById('studentbody').style.display = 'block';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'block';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
			})
			document.getElementById('teachers').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'block';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'block';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('teachers').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			})
			document.getElementById('slideshows').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'block';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'block';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('slideshow').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			})
			document.getElementById('gallerycontrol').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'block';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'block';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('gallery').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			})
			document.getElementById('recruiterscontrol').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'block';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'block';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('recruiters').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			})
			document.getElementById('noticecontrol').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'block';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'block';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
				db.collection('notice').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			})
			document.getElementById('videocontrol').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'block';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'block';
				document.getElementById('homecard').style.display = 'none';
				db.collection('video').onSnapshot(function(data){
					console.log(data)
					setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			})
			document.getElementById('home').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'block';
			});document.getElementById('about').addEventListener('click',()=>{
				setTasksA([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('teachersbody').style.display = 'none';
				document.getElementById('slideshowbody').style.display = 'none';
				document.getElementById('gallerybody').style.display = 'none';
				document.getElementById('recruiterbody').style.display = 'none';
				document.getElementById('noticebody').style.display = 'none';
				document.getElementById('videobody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('slideshowheading').style.display = 'none';
				document.getElementById('galleryheading').style.display = 'none';
				document.getElementById('recruiterheading').style.display = 'none';
				document.getElementById('noticeheading').style.display = 'none';
				document.getElementById('videoheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'block';
			});
			
			
		};
		fetchData();
		fire.firestore().collection('students').onSnapshot(function(data){
			setTasksyearsA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));

		});
	}, []);
	
	
	function onDelete(id, year){
		const db = fire.firestore()
	    if(year== 1){db.collection('teachers').doc(id).delete()}
		else if(year== 2){db.collection('slideshow').doc(id).delete()}
		else if(year== 3){db.collection('gallery').doc(id).delete()}
		else if(year== 4){db.collection('recruiters').doc(id).delete()}
		else if(year== 5){db.collection('notice').doc(id).delete()}
		else if(year== 6){db.collection('video').doc(id).delete()}
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
	const deletestorage= ()=>{
			var fileUrl = 
		'https://firebasestorage.googleapis.com/v0/b/apcrp-eie.appspot.com/o/Images%2Fa13.png?alt=media&token=1e23554f-93f7-4512-9cca-9ee870af34c7';
		
		// Create a reference to the file to delete
		var fileRef = storage.refFromURL(fileUrl);
		
		// console.log("File in database before delete exists : " 
		// 		+ fileRef.exists())

		// Delete the file using the delete() method 
		fileRef.delete().then(function () {
		
			// File deleted successfully
			console.log("File Deleted")
		}).catch(function (error) {
			// Some Error occurred
			console.log('file not delte')
		});
		
		// console.log("File in database after delete exists : "
		// 		+ fileRef.exists())
	}

	const adminstudentopt = ()=>{
		if(newfireYearA==''){alert('Please select a year to Go')}else{
		fire.firestore().collection('students').doc('year').collection(newfireYearA)
		.onSnapshot(function(data){setCount(data.size);setTasksA(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
		document.getElementById('count').style.display='block'});}
	}
	var array=[]
	return (
	<>
	<div>
	{/* <Navbar bg="dark" variant="dark">
		<Navbar.Brand href="#home">
		Hey There
		</Navbar.Brand>
	</Navbar> */}
	<AdminNavigation/>
	<br></br>
	<Container fluid='xl' className={containerStyle.container} ><br/><br/>
	{/* <div id='home' style={{display:'block'}}><p>hello</p></div> */}
	<div id='homecard' style={{display:'block'}} onLoad={(tasksyearsA.map(spell=>(array.push(spell.year_arr))))}>

	{/* <AdminHome/>  */}
		<Chart
		width={'500px'}
		height={'300px'}
		chartType="PieChart"
		loader={<div>Loading Chart</div>}
		data={
		[
			['Task', 'Hours per Day'],
			[array[0],count],
		]

	// 	[
	// 	tasksyearsA.map(spell=>(

	// 		[{spell.year_arr},{count}]
	// 	))
	// ]
	// [
	// 	['home','10'],
		
	// ]
		}

		options={{
			title: 'Students Graph',
		}}
		rootProps={{ 'data-testid': '1' }}
		/>
	</div>
	
	<div id='batch' style={{display:'none',textAlign:'center'}} className={containerStyle.adminfont}>
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

	<div id='teacherheading' style={{display:'none'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>👩‍🏫Welcome to Teachers' Database Table</h2>
	
	</div>
	<div id='slideshowheading' style={{display:'none'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>🎦Welcome to Slideshow Table</h2>
	
	</div>
	<div id='galleryheading' style={{display:'none'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>🖼️Welcome to Gallery Table</h2>
	
	</div>
	<div id='recruiterheading' style={{display:'none'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>🧑‍💼Welcome to Recruiter Table</h2>
	
	</div>
	<div id='noticeheading' style={{display:'none'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>📋Welcome to Notice Table</h2>
	
	</div>
	<div id='videoheading' style={{display:'none'}}>

	<h2 style={{backgroundColor:'#343a40',color:'whitesmoke',borderRadius:10}}>Welcome to Video Table</h2>
	
	</div>

	
	<div id=''></div>
	<br></br>

	<div id='studentbody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTerm(e.target.value)}/>
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
			<img src={spell.url} width={100}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table>
	</Col>
	</Row>
	</div>

	<div id='teachersbody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforT(e.target.value)}/>
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
	</Table>
	</Col>
	</Row>
	</div>

	<div id='slideshowbody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforSS(e.target.value)}/>
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
	</Col>
	</Row>
	</div>

	<div id='gallerybody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforG(e.target.value)}/>
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
	</Table>
	</Col>
	</Row>
	</div>

	<div id='recruiterbody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforR(e.target.value)}/>
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
	</Table>
	</Col>
	</Row>
	</div>

	<div id='noticebody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>

	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforN(e.target.value)}/>
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
	</Table>
	</Col>
	</Row>
	</div>

	<div id='videobody' style={{display:'none'}} className={containerStyle.admintable}>
	<Row>
	<Col>
	
	<input type='text' placeholder='🔍Search...' onChange={(e)=>setSearchTermforN(e.target.value)}/>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>

		<th>Title</th>
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

			<img src={spell.url} width={200}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id, spell.year)}
			>Delete</Button></td>
			</tr>
		))}
	</tbody>
	</Table>
	</Col>
	</Row>
	</div>
	</Container>
	



	<Modal
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
      </Modal>

	</div>
			
	<div>
	<Container>
	<div>
	
	{/* <ToggleButtonGroup type="checkbox" style={{display:'flex',marginLeft:490,marginRight:490,paddingTop:320,position:'fixed'}} >
		<ToggleButton variant='primary' size='lg' onClick={() => setModalShow(true)}><FcPlus/> Create</ToggleButton>
	</ToggleButtonGroup> */}
	
	</div>
      {/* <Button variant="primary" onClick={() => setModalShow(true)} style={{display:'flex',height:40,paddingLeft:10,paddingTop:2}}>
        <h4><FcPlus/> <span style={{fontSize:17}}>Create</span></h4>
      </Button> */}
	{/* <CreateNew />
	<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton> */}
      <AdminForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
	  
    </Container>
	</div>
	{/* <div >
	<Navbar bg='dark' variant="light" fixed='bottom' style={{textAlign:'center',display:'flex',justifyContent:'space-between'}}>
    <p></p>
	<ToggleButtonGroup type="checkbox" style={{paddingBottom:20,paddingRight:20}}>
		<ToggleButton variant='danger' size='lg' onClick={() => setModalShow(true)}><FcPlus/> Create</ToggleButton>
	</ToggleButtonGroup>
  </Navbar>
	</div> */}
	{/* <ToggleButtonGroup type="checkbox" style={{position:'fixed'}}>
		<ToggleButton variant='danger' size='lg' onClick={() => setModalShow(true)}><FcPlus/> Create</ToggleButton>
	</ToggleButtonGroup> */}
	<div className={containerStyle.createbutton}>
	<OverlayTrigger
      key='top'
      placement='top'
      overlay={
        <Tooltip >
          Create <strong>New</strong>
        </Tooltip>
      }
    >
		<h1 style={{fontSize:55}}><FcPlus onClick={() => setModalShow(true)}/></h1>
    </OverlayTrigger>
	</div>
	</>
	);
}

export default Admin
