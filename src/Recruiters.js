import React from 'react'
import { Container,Navbar,NavDropdown,Nav,Button,Modal, Form, CardColumns,Card } from 'react-bootstrap'
import fire from './config/fire';
import {FcMms} from 'react-icons/fc';
import sty from './css/adminFormImg.module.css';
import containerStyle from './AdminContainer.module.css'
import { CenterFocusWeakTwoTone } from '@material-ui/icons';
import WorkIcon from '@material-ui/icons/Work';
function Recruiters(props) {

    const [tasksRecrt, setTasksRecrt] = React.useState([]);
    React.useEffect(()=>{
        const fetchData = async ()=>{
            const db = fire.firestore();
            document.getElementById('frontrecruiters').onload=(fire.firestore().collection('recruiters').onSnapshot(function(data){setTasksRecrt(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));
        };
        fetchData();
    },[]);

    return (
        <div>
            <div id='frontrecruiters' >
            <Modal 
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
                >
                <Modal.Header closeButton className={containerStyle.grad}>
                    <Modal.Title id="contained-modal-title-vcenter" className={sty.controlpanelfont} >
                    {/* <img src='https://imgk.timesnownews.com/story/NHM_recruitment_2021_9.jpg?tr=w-400,h-300,fo-auto' width={100}/>  */}
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{color:'white'}}><WorkIcon fontSize="large"/></div>
                    <span style={{color:'white',fontSize:30,paddingTop:3}}>&nbsp;Companies That Recruite</span>
                    </div>
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body 
                style={{height:370}}
                >
                <marquee behavior="alternate" direction="up" height="350" >
<CardColumns >



                    {tasksRecrt.map(spell=>(
                        <img 
                        className="d-block w-100"
                        src={spell.url}
                        style={{maxHeight:200,objectFit:'contain'}}
                        // className={containerStyle.modalborder}
                        /> 
                       
                    ))}

</CardColumns>

</marquee>
                </Modal.Body>
                
                <Modal.Footer className={containerStyle.grad}>
                    <Button variant='danger' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}

export default Recruiters
