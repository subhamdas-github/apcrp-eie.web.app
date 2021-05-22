import React from 'react'
import { Container,Navbar,NavDropdown,Nav,Button,Modal, Form, CardColumns } from 'react-bootstrap'
import fire from './config/fire';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import containerStyle from './AdminContainer.module.css'
import {FcMms} from 'react-icons/fc';
function Gallery(props) {
    const [tasksGallery, setTasksGallery] = React.useState([]);
    React.useEffect(()=>{
        const fetchData = async ()=>{
            const db = fire.firestore();
            document.getElementById('frontgallery').onload=(fire.firestore().collection('gallery').onSnapshot(function(data){setTasksGallery(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));}));
        };
        fetchData();
    },[]);
    return (
        <div>
            <div id='frontgallery' >
            <Modal 
                {...props}
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className={containerStyle.newtestfont}>
                    <FcMms/> <b>Gallery</b>
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
               
                <Carousel images={tasksGallery.map((spell) => ({
                    src: spell.url
                }))} style={{maxHeight:360,objectFit:'contain'}}/>
    

                
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant='danger' onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )
}

export default Gallery
