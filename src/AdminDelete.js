import React from 'react'
import fire from './config/fire';
import {Modal, Button} from 'react-bootstrap'
function AdminDelete(props) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    function gettime(){
		return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
	  }
	  function getdate(){
		return new Date().getDate()+ " "+ months[new Date().getMonth()]+","+ new Date().getFullYear();
	  }
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
		else{db.collection('students').doc('year').collection(fireyear).doc(id).delete(); activities(id,'flagstudentsDelete',fireyear)}
        
	}
    function activities(useremail, flag,year){
		if (flag=='flagstudentsDelete'){
		fire.firestore().collection('activities').doc()
		.set({task:fire.auth().currentUser.email+' deleted student '+useremail+' from '+year+' passout year ',
		color:'danger',
        date:getdate(),
		time:gettime(),
	  timestamp:new Date().valueOf()})
		}
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
