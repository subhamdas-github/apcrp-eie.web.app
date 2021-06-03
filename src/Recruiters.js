import React from 'react'
import { Container,Navbar,NavDropdown,Nav,Button,Modal, Form, CardColumns,Card } from 'react-bootstrap'
import fire from './config/fire';
import {FcMms} from 'react-icons/fc';
import containerStyle from './AdminContainer.module.css'
import { CenterFocusWeakTwoTone } from '@material-ui/icons';
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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className={containerStyle.newtestfont} >
                    <img src='https://imgk.timesnownews.com/story/NHM_recruitment_2021_9.jpg?tr=w-400,h-300,fo-auto' width={100}/> 
                    <b style={{color:'brown',fontSize:30}}>Our Recruiters</b>
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body style={{height:350,overflow:'scroll'}}>
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

                
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant='danger' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}

export default Recruiters
