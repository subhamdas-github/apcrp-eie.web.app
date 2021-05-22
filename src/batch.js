import React,{useEffect} from 'react'
import fire from './config/fire';
import { FcPhone, FcAddressBook, FcContacts, FcPlus, FcAddDatabase,FcSynchronize,FcCollapse,FcExpand } from 'react-icons/fc';
import {Button,Row, Container, Col, Form, Navbar,Nav,FormControl, Table, Modal} from 'react-bootstrap';
import {ToggleButtonGroup, ToggleButton, Badge,Alert} from 'react-bootstrap';
import containerStyle from './AdminContainer.module.css'
function Batch() {
    const [tasksyears, setTasksyears] = React.useState([]);
    const [newfireYear, setNewFireYear] = React.useState('');
    const [tasks, setTasks] = React.useState([]);
    useEffect(()=>{
        fire.firestore().collection('students').onSnapshot(function(data){
			setTasksyears(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
			
		});
    },[])
    return (
        <div style={{textAlign:'center'}}>
            
                {tasksyears.map(spell=>(
                    <Button onClick={()=>{setNewFireYear(spell.year_arr);console.log(setNewFireYear);fire.firestore().collection('students').doc('year').collection(spell.year_arr).onSnapshot(function(data){setTasks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));})}}>{spell.year_arr}</Button>
                ))}
            {/* <ToggleButton size='lg' value={1} id="2021">Batch <Badge variant="light">2021</Badge></ToggleButton> */}
            

            {/* <ToggleButtonGroup type="checkbox" >
            <ToggleButton size='lg' value={1} id="2021">Batch <Badge variant="light">2021</Badge></ToggleButton>
            <ToggleButton size='lg' value={2} id="2020">Batch <Badge variant="light">2020</Badge></ToggleButton>
            <ToggleButton size='lg' value={3} id="2019">Batch <Badge variant="light">2019</Badge></ToggleButton>
            <ToggleButton size='lg' value={4} id="2018">Batch <Badge variant="light">2018</Badge></ToggleButton>
            </ToggleButtonGroup> */}

            <div className={containerStyle.expandcollapsearea}>
            <h3 id='collapse' style={{display:'none',cursor:'pointer',paddingLeft:543}}><Button variant='warning' className={containerStyle.expandcollapsebutton}><FcCollapse/></Button></h3>
            <h3 id='expand' style={{display:'block',cursor:'pointer',paddingLeft:543}}><Button variant='warning' className={containerStyle.expandcollapsebutton}><FcExpand/></Button></h3>
            </div>
            <br/>
            <div id='studentalert' style={{display:'block'}}>
            <Alert variant="success">
            <Alert.Heading>Hey Admin, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully entered Students Corner section of Administration Panel. If you see This
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
            {/* <button id="2021">2021</button>
            <button id="2020">2020</button> */}
        </div>
    )
}

export default Batch
