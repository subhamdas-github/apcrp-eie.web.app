import React,{useEffect,useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import fire from './config/fire'
import firebase from 'firebase';
import containerStyle from './AdminContainer.module.css'
import * as b from 'react-bootstrap';
import sty from './css/adminFormImg.module.css';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import ScaleLoader from 'react-spinners/ScaleLoader'
import { FormHelperText } from '@material-ui/core';
import FrontHeading from './FrontHeading';
import  Footer  from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FeedbackIcon from '@material-ui/icons/Feedback';
import  Button  from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
// import {signInWithGoogle} from './config/fire'
// import {auth} from './config/fire'
// const firebaseC = {
//     apiKey: "AIzaSyAEZ_0yLmx8-rklA4di8Tcrs1ocoiCzEtc",
//     authDomain: "apcrp-eie.firebaseapp.com",
//     databaseURL: "https://apcrp-eie-default-rtdb.firebaseio.com",
//     projectId: "apcrp-eie",
//     storageBucket: "apcrp-eie.appspot.com",
//     messagingSenderId: "93094625915",
//     appId: "1:93094625915:web:b8b28f40a85685da4198de"
// };
//   if (!firebase.apps.length) {
    // firebase.initializeApp(firebaseC);
//   }
function Feedback() {
  const labels = {
   
    1: 'Useless',
   
    2: 'Poor',
    
    3: 'Satisfactory',

    4: 'Good',
 
    5: 'Excellent',
  };
  
    const [feedbacks,setFeedbacks] = useState([])
    

 

    const [cuurentuser, setcurrentuser] = useState(null)
    const [count, setcouunt] = useState('')
    const [loading, setloading] = useState(true)
    var colormap = ['#aa00ff','#e91e63','#4caf50','#ff5722','#673ab7','#2c3e50','#C71585','#008080','#0077b5','#0063B1']
    useEffect(()=>{
        
        fire.firestore().collection("feedbacks").orderBy("name", "asc").onSnapshot(function(data){
            setFeedbacks(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));
            setcouunt(<span>{data.size} <span>Comments</span></span>)
            setloading(false)
          });
    },[])
    
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
      const classes = useStyles();
        const [name, setName] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [comment, setComment] = React.useState('');

        const [value, setValue] = React.useState(0);
        const [hover, setHover] = React.useState(-1);
        
    const responseGoogle=(res)=>{
        console.log(res.name)
    };
    const onSend = ()=>{
        if (email=='' || name==''){alert('enter a email address')}
        else{
        fire.firestore().collection('feedbacks').doc(email).set({rate:value,name:name,email:email,comment:comment,year:7})
        setName('')
        setEmail('')
        setComment('')
        setValue(0)
        }
    }
    return (
        <div>
            <FrontHeading/>
            
            
            <div style={{padding:20}} className={containerStyle.grad}>
            <Paper elevation={9}  className={containerStyle.grad}>
            <div >
              {/* <b.Alert variant='info'> */}
                <b.Row className="justify-content-md-center" >
                    <b.Col xs lg="2">
                    <h1 style={{fontSize:100}}>✍️</h1>
                    </b.Col>
                    
                    <b.Col md="auto">
                       
                            
                            <div style={{paddingTop:20,color:'aliceblue'}}  className={sty.controlpanelfont}>
                                <h5>&#10148; How about giving a feedback?</h5>
                                <h5>&#10148; We're happy that you are using this web app.</h5>
                                <h5>&#10148; Kindly share your views, opinions, suggestions or ideas about it.</h5>
                                <h5>&#10148; We'll do our best to make this application more nice & useful.</h5>
                            </div>
                          
                    </b.Col>
                    
                </b.Row>
                {/* </b.Alert> */}
            </div>
            
            <hr/>
            
                <br/>
                <b.Alert variant='info'>
            <div >
              
                <b.Row>
                <b.Col sm>
                  <br/>
                  <h4 style={{display:'flex'}}>5 Stars<Rating name="read-only" defaultValue={5} readOnly size="large"/></h4>
                  <b.ProgressBar animated now={90} label={`${90}%`}/><br/>
                  <h4 style={{display:'flex'}}>4 Stars<Rating name="read-only" defaultValue={4} readOnly size="large"/></h4>
                  <b.ProgressBar animated now={5} label={`${5}%`}/><br/>
                  <h4 style={{display:'flex'}}>3 Stars<Rating name="read-only" defaultValue={3} readOnly size="large"/></h4>
                  <b.ProgressBar animated now={5} label={`${5}%`}/><br/>
                  <h4 style={{display:'flex'}}>2 Stars<Rating name="read-only" defaultValue={2} readOnly size="large"/></h4>
                  <b.ProgressBar animated now={1} label={`${0}%`}/><br/>
                  <h4 style={{display:'flex'}}>1 Star<Rating name="read-only" defaultValue={1} readOnly size="large"/></h4>
                  <b.ProgressBar animated now={1} label={`${0}%`}/>
                </b.Col>
                
                <b.Col sm style={{textAlign:'center'}}>
                <div >
                  <p></p>
                  <div className={sty.controlpanelfont}>
                          <h2>Rate Us</h2>
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
                    label="Name"
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
                
            </div>
            </b.Alert>
            <hr/>
            </Paper>
            </div>
            

            {/* <b.Container fluid='xl' className={sty.controlpanelfont}>
            <b.Container fluid='xl' className={containerStyle.containerfront}>
                <br/>
                {loading?
                <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}}>
                  <p></p>
                <div style={{display:'flex'}}><ScaleLoader loading={loading} color='#3f51b5' height={30} radius={10} margin={2} width={5} />
                <span style={{fontSize:20,paddingLeft:5}}>Loading...</span>
                </div>
                <p></p>
                </div>
                :
                <div style={{paddingLeft:20}}>
                <h5>{count}</h5>
                
              {feedbacks.map((spell=>(
                  <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar style={{color:'white',backgroundColor:colormap[Math.floor(Math.random() * 10)]}}>{spell.name[0].toUpperCase()}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={spell.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              
                            </Typography>
                            {spell.comment}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                  )))}
              </div>
}
            </b.Container>
            </b.Container> */}
            <Footer/>
        </div>
    )
}

export default Feedback
