import React from 'react'
import fire from './config/fire';
import {Modal, Button} from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function AdminUpdate(props) {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      const [open, setOpen] = React.useState(false);
      const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
	  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  function gettime(){
		return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
	  }
	  function getdate(){
		return new Date().getDate()+ " "+ months[new Date().getMonth()]+","+ new Date().getFullYear();
	  }
	function activities(useremail, newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh, newfireYearA){
		// if (flag=='flaguserDecline'){
		// fire.firestore().collection('activities').doc().set({task:fire.auth().currentUser.email+' updated '+' of '+useremail+' in the year '+year+ ' in Students Section.',color:'warning',timestamp:new Date().valueOf()})
		fire.firestore().collection('activities').doc().set({task:fire.auth().currentUser.email+' updated status '+newTask+newPhone+newStatus1+newStatus2+newStatus3+newkh+' of '+useremail+' in the year '+newfireYearA+ ' in Students Section.',
		color:'warning',
		date:getdate(),
		time:gettime(),
		timestamp:new Date().valueOf()})
	}

    function onUpdate(newfireYearA, id, tableid, name, email,phone,status1,status2,status3,url,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh){
		if (id!=tableid){
			// alert('Update ')
        
        handleClick()
			// settableid('')
		}
		else{
			tableid='';
		if(newTask=='' && newPhone==''&&newStatus1==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:status2,status3:status3,url:url})
		}
		// 1 change
		else if(newPhone==''&&newStatus1==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus1==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus1==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus1==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		// 2 change
		else if(newStatus1==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus1==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus1==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus1==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:status1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		// 3 change
		else if(newStatus2==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		// 4 change
		else if(newStatus3==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:status3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus2==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus2==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''&&newStatus1==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:status1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newStatus1==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''&&newPhone==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		// 5 change
		else if(newkh==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:url})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus3==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:status3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus2==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:status2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newStatus1==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:status1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newPhone==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:phone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		else if(newTask==''){
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:name,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		// 6 change
		else{
		fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:newkh})
		activities(email,newTask,newPhone,newStatus1,newStatus2,newStatus3,newkh,newfireYearA);
		}
		// else if(newTask==''){setnewTask(name)}
		// else if(newPhone==''){setnewPhone(phone)}
		// else if(newStatus1==''){setnewStatus1(status1)}
		// else if(newStatus2==''){setnewStatus2(status2)}
		// else if(newStatus3==''){setnewStatus3(status3)}
		// setnewTask('')
		// setnewPhone('')
		// setnewStatus1('')
		// setnewStatus2('')
		// setnewStatus3('')
	}
		// const db = fire.firestore()
	    // if(year== 1){db.collection('teachers').doc(id).update({name:newTask,phone:newPhone,status1:newStatus1,url:url})}
		
		// fire.firestore().collection('students').doc('year').collection(newfireYearA).doc(id).update({name:newTask,email:email,phone:newPhone,status1:newStatus1,status2:newStatus2,status3:newStatus3,url:url})
	
	}
    return (
        <div>
            <Modal 
            {...props}
                
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                <Modal.Title>⚠️Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to Update user <b>{props.upid}</b> ?
                </Modal.Body>
                <Modal.Footer>
                
                <Button variant="secondary" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="warning" onClick={()=>{props.onHide(); 
                onUpdate(props.fireyear,props.upid, props.tableid, props.upname,props.upemail,props.upphone,props.upstatus1,props.upstatus2,props.upstatus3,props.upurl,props.newTask,props.newPhone,props.newStatus1,props.newStatus2,props.newStatus3,props.newkh)}}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
            Something went wrong! Update user <b>{props.tableid}</b> first!
            </Alert>
            </Snackbar>
        </div>
    )
}

export default AdminUpdate
