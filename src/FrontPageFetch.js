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

function FrontPageFetch() {
    const { SearchBar } = Search;
	const [modalShow, setModalShow] = React.useState(false);
	var [tasks, setTasks] = React.useState([]);
	const [newTask, setnewTask] = React.useState('');
	const [newEmail, setnewEmail] = React.useState('');
	const [newPhone, setnewPhone] = React.useState('');
    const [newStatus, setnewStatus] = React.useState('');
    const [newYear, setnewYear] = React.useState('');
	const [updateTask, setupdateTask] = React.useState('');

	const [showDelete, setShowDelete] = React.useState(false);
	const [showUpdate, setShowUpdate] = React.useState(false);

  	const handleCloseDelete = () => setShowDelete(false);
  	const handleShowDelete = () => setShowDelete(true);
	const handleCloseUpdate = () => setShowUpdate(false);
	const handleShowUpdate = () => setShowUpdate(true);

	var m=''
	useEffect(()=>{
		const fetchData = async () =>{
			const db = fire.firestore();
            document.getElementById('frontpagestudents').addEventListener('click',()=>{
                setTasks([])
                console.log('click now')
				document.getElementById('studentbody').style.display = 'block';
				// document.getElementById('batch').style.display = 'block';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
            })
			document.getElementById('students').addEventListener('click',()=>{
				setTasks([])
                console.log('click fuck now')
				document.getElementById('studentbody').style.display = 'block';
				document.getElementById('batch').style.display = 'block';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'none';
			})
			document.getElementById('teachers').addEventListener('click',()=>{
				setTasks([])
				document.getElementById('studentbody').style.display = 'block';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'block';
				document.getElementById('homecard').style.display = 'none';
				// db.collection('teachers').onSnapshot(function(data){
				// 	console.log(data)
				// 	setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				// });

			})
			document.getElementById('home').addEventListener('click',()=>{
				setTasks([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'block';
			});document.getElementById('about').addEventListener('click',()=>{
				setTasks([])
				document.getElementById('studentbody').style.display = 'none';
				document.getElementById('batch').style.display = 'none';
				document.getElementById('teacherheading').style.display = 'none';
				document.getElementById('homecard').style.display = 'block';
			});document.getElementById('collapse').addEventListener('click',()=>{
				setTasks([])
				console.log('collapse')
				document.getElementById('collapse').style.display='none';
				document.getElementById('expand').style.display='block';
			});document.getElementById('expand').addEventListener('click',()=>{
				console.log('expand')
				
				document.getElementById('collapse').style.display='block';
				document.getElementById('expand').style.display='none';
				if(m=='2021'){db.collection('cafes').onSnapshot(function(data){
					console.log(data)
					setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});}
				else if(m=='2020'){db.collection('year2020').onSnapshot(function(data){
					console.log(data)
					setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});}
			});document.getElementById('expandteacher').addEventListener('click',()=>{
				setTasks([])
				document.getElementById('collapseteacher').style.display='block';
				document.getElementById('expandteacher').style.display='none';
				document.getElementById('teacheralert').style.display='none';
				db.collection('teachers').onSnapshot(function(data){
					console.log(data)
					setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
				});
			});document.getElementById('collapseteacher').addEventListener('click',()=>{
				setTasks([])
				document.getElementById('collapseteacher').style.display='none';
				document.getElementById('expandteacher').style.display='block';
			})
			document.getElementById('2021').addEventListener('click',()=>{
				db.collection('cafes').onSnapshot(function(data){
				console.log(data)
				setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			});
			document.getElementById('studentalert').style.display='none';
			document.getElementById('collapse').style.display='block';
			document.getElementById('expand').style.display='none';
			m='2021'
			})
			document.getElementById('2020').addEventListener('click',()=>{
				db.collection('year2020').onSnapshot(function(data){
				console.log(data)
				setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			});
			document.getElementById('studentalert').style.display='none';
			document.getElementById('collapse').style.display='block';
			document.getElementById('expand').style.display='none';
			m='2020'
			})
			// document.getElementById('studentbody').style.display = 'none';
			// db.collection('cafes').onSnapshot(function(data){
			// 	console.log(data)
			// 	setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			// });
		};
		fetchData();
	}, []);
	const onCreate= () =>{
		const db = fire.firestore();
		db.collection('cafes').doc(newEmail).set({name:newTask,email:newEmail});
	};
	function onDelete(id, year){
		const db = fire.firestore()
		if (year== 2021){
			console.log('collection cafes')
			db.collection('cafes').doc(id).delete()
		}
		else if(year== 2020){
			console.log('collection 2020')
			db.collection('year2020').doc(id).delete()
		}
		else if(year== 1){
			console.log('collection teachers')
			db.collection('teachers').doc(id).delete()
		}
		
		// db.collection('cafes').doc(id).delete()
	}
	const onUpdate = (id,name,email,phone,status,year,url) =>{
		const db = fire.firestore()
		if (newTask=='' && newPhone=='' && newStatus==''){
			db.collection('cafes').doc(id).set({name:name,email:email,phone:phone,status:status,year:year,url:url})
		}
		else{
		db.collection('cafes').doc(id).update({name:newTask,phone:newPhone,status:newStatus})
		}
	}
	return (
	<>
	<div>
	{/* <Navbar bg="dark" variant="dark">
		<Navbar.Brand href="#home">
		Hey There
		</Navbar.Brand>
	</Navbar> */}
	
	<br></br>
	<Container fluid='xl' className={containerStyle.container} ><br/><br/>
	{/* <div id='home' style={{display:'block'}}><p>hello</p></div> */}
	<div id='studentbody' style={{display:'none'}}>
	{/* <div id='batch' style={{display:'none'}}><Batch /></div> */}
	<div id='teacherheading' style={{display:'none'}}>
	
	<div style={{display:'flex',justifyContent:'space-between',textAlign:'center',backgroundColor:'#3e444a',color:'white'}}>
	<h3><FcSearch/></h3>
	<h2>Teachers Corner Database<span style={{fontSize:20,padding:1}}><sup><Badge pill variant="primary">New</Badge></sup></span></h2>
	{/* <h2 style={{backgroundColor:'#3e444a',color:'white'}}>
		Teachers Corner Database<span style={{fontSize:24,paddingRight:650}}>
			<sup><Badge pill variant="primary">New</Badge></sup></span>
	</h2> */}
	<h3><FcAbout style={{cursor:'pointer'}}/></h3>

	</div>

	<div className={containerStyle.expandcollapsearea}>		
	<h3 id='expandteacher' style={{display:'block',cursor:'pointer',paddingLeft:543}}><Button variant='warning' className={containerStyle.expandcollapsebutton}><FcExpand/></Button></h3>
	<h3 id='collapseteacher' style={{display:'none',cursor:'pointer',paddingLeft:543}}><Button variant='warning' className={containerStyle.expandcollapsebutton}><FcCollapse/></Button></h3> 
	</div>

	<br/>

	<div id='teacheralert' style={{display:'block',textAlign:'center'}}>
		<Alert variant="success">
			<Alert.Heading>Welcome to Teachers Corner Section</Alert.Heading>
			<p>
			Ouu hoo, now you are inside Teachers Corner section of Administration Panel. If you see This
				important message go through <a href='#' >Documentation</a> before using Control Panel.
			</p>
			<hr />
			<p className="mb-0">
			Tips: If you can't see anything after pressing batchs button please,
							<br/><pre>1. Create new entry for students. 
							<br/> 2. Check your internet connection.</pre>
			</p>
		</Alert>
	</div>

	</div>
	
	<div id=''></div>
	<br></br>

	<Row>
	<Col>
	<Table responsive striped bordered hover variant="dark" className={containerStyle.tableoverflow}>
	<thead>
	<tr>
		{/* <th>ID</th> */}
		<th>Name</th>
		<th>Email</th>
		<th>Phone</th>
		<th>Status</th>
		<th>Photo</th>
		<th>Delete <FcHighPriority onClick={handleShowDelete} style={{cursor:'pointer'}}/></th>
		<th>Update <FcHighPriority onClick={handleShowUpdate} style={{cursor:'pointer'}}/></th>
	</tr>
	</thead>
	<tbody>
		{tasks.map(spell=>(
			<tr key={spell.id}>
			{/* <td>{spell.id}<br/><input style={{height:20,width:150}} placeholder={spell.name} onChange={e=>setupdateTask(e.target.value)}/></td> */}
			<td>{spell.name}<br/><input style={{height:20,width:100}} placeholder={spell.name}  onChange={e=>setnewTask(e.target.value)}/></td>
			<td>{spell.email}<br/></td>
			<td>{spell.phone}<br/><input style={{height:20,width:100}} placeholder={spell.phone}  onChange={e=>setnewPhone(e.target.value)}/></td>
			<td>{spell.status}<br/><input style={{height:20,width:100}} placeholder={spell.status}  onChange={e=>setnewStatus(e.target.value)}/></td>
			<img src={spell.url} width={100}/>
			<td> <Button variant="danger" onClick={()=>onDelete(spell.id,spell.year)}
			>Delete</Button></td>
			<td>
			{/* <input type="text" className=" " placeholder={spell.name}
			onChange={e=>setupdateTask(e.target.value)} placeholder={spell.name}></input> */}
			<Button className="text-white ml-4" variant="warning"
			onClick={()=> onUpdate(spell.id,spell.name,spell.email,spell.phone,spell.status,spell.year,spell.url)}>Update</Button>
			</td>
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
		  2. In case of updating only one field do not press the Update button before re-entering all the fields. (e.g. suppose a person Alok Mondal worked at Tata Power Pvt. Ltd. 1 year ago, but now he is an employer of Google. So for updating his status you need to re-enter or update the rest fields[name,phone,...etc] before pressing the Update button, Otherwise rest data will lost ! ).
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

export default FrontPageFetch