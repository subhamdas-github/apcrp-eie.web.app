import React from 'react'
import fire from './config/fire';
import {Modal, Button} from 'react-bootstrap'
function AdminDelete(props) {
    function onDelete(id, year,fireyear){
		const db = fire.firestore()
	    if(year== 1){db.collection('teachers').doc(id).delete()}
		else if(year== 2){db.collection('slideshow').doc(id).delete()}
		else if(year== 3){db.collection('gallery').doc(id).delete()}
		else if(year== 4){db.collection('recruiters').doc(id).delete()}
		else if(year== 5){db.collection('notice').doc(id).delete()}
		else if(year== 6){db.collection('video').doc(id).delete()}
		else if(year== 7){db.collection('feedbacks').doc(id).delete()}
		else if(year== 8){db.collection('magazines').doc(id).delete()}
		else{db.collection('students').doc('year').collection(fireyear).doc(id).delete()}
        
	}
    return (
        <div>
            <Modal 
            {...props}
                // show={showDeleteModal}
                // onHide={()=>setShowDeleteModal(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                <Modal.Title>⛔️Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete user <b>{props.id}</b> ?
                </Modal.Body>
                <Modal.Footer>
                
                <Button variant="secondary" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={()=>{props.onHide(); onDelete(props.id, props.year,props.fireyear)}}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AdminDelete
