import React,{useState,useEffect} from 'react'
import * as b from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import sty from './css/adminFormImg.module.css';
import fire from './config/fire'
import containerStyle from './AdminContainer.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FeedbackIcon from '@material-ui/icons/Feedback';
import  Button  from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import RateReviewIcon from '@material-ui/icons/RateReview';
function Review(props) {
    const labels = {
   
        1: 'Useless',
       
        2: 'Poor',
        
        3: 'Satisfactory',
    
        4: 'Good',
     
        5: 'Excellent',
      };
      const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '90%',
            
          },
        },
        rate:{
          
            width: 200,
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center',
          
        },
      }));
      const [h, seth] = useState('')
      const classes = useStyles();
        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [sub, setSub] = React.useState('');
        const [comment, setComment] = React.useState('');

        const [value, setValue] = React.useState(0);
        const [hover, setHover] = React.useState(-1);
        const onSend = ()=>{
            if (email=='' || name==''){alert('enter a email address')}
            else{
            fire.firestore().collection('feedbacks').doc(email).set({rate:value,name:name,email:email,subject:sub,comment:comment,year:7})
            setName('')
            setEmail('')
            setSub('')
            setComment('')
            setValue(0)
            }
        }
      //  useEffect(()=>{
      //     if (props.page=='aboutus'){
      //       seth(<h2>Rate This Article</h2>)
      //     }else{
      //       seth(<h2>Rate This Page</h2>)
      //     }
      //  },[])
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
                >
                    <Modal.Header closeButton className={containerStyle.grad}>
                        <Modal.Title id="contained-modal-title-vcenter">
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{color:'white',paddingTop:3}}><RateReviewIcon fontSize="large"/></div>
                        <span style={{color:'white',fontSize:29}}>&nbsp;Review</span>
                        </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                <b.Row>
                <b.Col style={{textAlign:'center'}}>
                <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                  <p></p>
                  <div className={sty.controlpanelfont}>
                          {/* <h2>Rate This Article</h2> */}
                          {props.page?<h2>Rate This Article</h2>
                          :
                          <h2>Rate This Page</h2>
                          }
                          <Rating
                            size="large"
                            name="hover-feedback"
                            value={value}
                            precision={1}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                          />
                          {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </div>
                    <p></p>
                  </div>
                <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                    type="text"
                    id="outlined-multiline-flexible"
                    label="Full Name"
                    multiline
                    rowsMax={4}
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required

                    />
                    
                    <TextField
                    type="email"
                    id="outlined-multiline-flexible"
                    label="Email Address"
                    multiline
                    rowsMax={4}
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    variant="outlined"
                    size="small"
                    required
                    />
                    {props.page?
                    <TextField
                    type="text"
                    id="outlined-multiline-flexible"
                    label="Title (Optional)"
                    multiline
                    rowsMax={4}
                    value={sub}
                    onChange={(e)=>{setSub(e.target.value)}}
                    variant="outlined"
                    size="small"
                    

                    />
                    :
                    <TextField
                    type="text"
                    id="outlined-multiline-flexible"
                    label="Subject (Optional)"
                    multiline
                    rowsMax={4}
                    value={sub}
                    onChange={(e)=>{setSub(e.target.value)}}
                    variant="outlined"
                    size="small"
                    

                    />
                    }
                    
                    {props.page?
                    <TextField
                    id="outlined-multiline-static"
                    label="Share your opinion/suggestion (Optional)"
                    multiline
                    rows={10}
                    value={comment}
                    
                    onChange={(e)=>{setComment(e.target.value)}}
                    variant="outlined"
                    size="small"
                    />
                    :
                    <TextField
                    id="outlined-multiline-static"
                    label="Write Something (Optional)"
                    multiline
                    rows={10}
                    value={comment}
                    
                    onChange={(e)=>{setComment(e.target.value)}}
                    variant="outlined"
                    size="small"
                    />
                    }
                </div>
                    <div >
                        {/* <p></p> */}
                    <Button  size="large" variant="contained" color="primary" endIcon={<SendIcon/>} onClick={onSend}>
                    Send
                    </Button>
                    {/* <p></p> */}
                    </div>
                </form>
                </b.Col>
                {/* <b.Col></b.Col> */}
                </b.Row>
                    </Modal.Body>
                    <Modal.Footer className={containerStyle.grad}>
                        <b.Button variant='danger' onClick={props.onHide}>Close</b.Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Review
