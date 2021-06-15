import React,{useState,useEffect} from 'react'
import sty from './css/adminFormImg.module.css';
import { Col, Container, Row, Alert } from 'react-bootstrap'
import containerStyle from './AdminContainer.module.css'
import {TiPointOfInterest} from 'react-icons/ti'
import {CgEditBlackPoint} from 'react-icons/cg'
import {FcAdvance} from 'react-icons/fc'
import {FaHandPointRight} from 'react-icons/fa';
import eielogo from './images/logoeie.png';
import FrontHeading from './FrontHeading';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import an from './Animated.module.css'

import Review from './Review';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import FadeInSection from './FadeInSection';
// import { Alert } from 'react-bootstrap';
function Preface() {
    const [modalShow, setModalShow] = useState(false);
    const [page, setPage] = useState(false);
    return (
        <>
        <FrontHeading/>

        {/* <Grid container spacing={3}>
        <Grid item xs>
                
        </Grid>
        <Grid item xs>
        <img 
            src={eielogo}
            style={{position:'absolute',textAlign:'center',maxWidth:500}}
            />
        </Grid>
        <Grid item xs>
        
        </Grid>
        </Grid> */}
        
        <div className={containerStyle.grad} style={{padding:20}}>
        
            {/* <Container fluid='xl'> */}
            {/* <Container fluid='xl' className={containerStyle.containerfront}> */}
            <Paper elevation={9}  className={containerStyle.grad}>
                
            
            
        
        <div style={{textAlign:'justify',color:'#00008B',fontSize:19}} className={sty.controlpanelfont}>
        <h1 style={{textAlign:'center',fontSize:44}} className={containerStyle.borderbottomstyle}>&gt;&gt;<span className={containerStyle.ach}><b>To Our Juniors</b></span></h1>
        <Alert variant='info'>     
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:34}}>W</span>e the students of <span style={{color:'#C71585'}}><b> DEIE(2018-2021)</b></span> have always thought it to be our duty to give ourselves
            up for our juniors. So here we are presenting this platform. The platform contains all detailed information and contacts of us, hence even when we are not in the college anymore you our beloved juniors💝 can reach us for any sort of help or catching up. This wouldn’t have been possible without the heartfelt love we have gotten from you junior. This is what inspired us to give something back. The proud heritage of the electronics department is a culmination of our past and our future. We hope this tradition of joining the past with the future will be continued.
            </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However there are a few things we have to say to you our next generation.. </p>
            <p>
            <span style={{display:'flex',paddingLeft:60}}>📌Keep the attendance high in classes because the godly teachers we have, their class is enough to learn the concepts.</span> 

            <span style={{display:'flex',paddingLeft:60}}>📌Keep the project work active and alive because hands on job training is the foundation of Diploma Engineering.</span> 

            <span style={{display:'flex',paddingLeft:60}}>📌Love your juniors as you were expected to be treated when you were juniors.</span> 

            <span style={{display:'flex',paddingLeft:60}}>📌Improve the placement by working together all year long and not at the eleventh hour. </span> 

            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hope each and every one of us can uphold the proud lineage of DEIE of APCRP.

            We would like to end saying a big <span style={{color:'#C71585'}}><b> “THANK YOU” </b></span> to each and everyone of this proud institution for shaping us as we are today.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank You,</p>
            
            <Row className="justify-content-md-center">
                <Col >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design & Concept: <span style={{color:'red'}}>- Alok Mondal (DEIE 2021)</span>
                </Col>
                <Col md="auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inspired by:<span style={{color:'red'}}>- Sourav Guchhait  (DEIE 2018)</span>
                </Col>
            </Row>
{/* </div> */}

                        

<hr/>
                        <div style={{textAlign:'center',display:'flex',justifyContent:'space-between'}} className={sty.controlpanelfont}>
                        <p></p>
                        <p></p>
                          <div style={{display:'flex',fontSize:16}}><EditIcon fontSize="small"/><span className={an.articlefeedback} onClick={() => {setPage(true); setModalShow(true)}}>Give feedback about this article</span></div>
                    
                        </div>
</Alert>
</div>
            <br/>
            {/* </Container> */}
            {/* </Container> */}
            <div style={{padding:40}} className={sty.controlpanelfont}>
                    <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                      <p></p>
                      <div>
                        <h5 style={{fontSize:18,display:'flex'}}><span style={{paddingTop:14}}>Was this page helpful?</span>
                          <span style={{cursor:'pointer'}}>
                            <Tooltip title="Yes" placement="top">
                              <IconButton aria-label="like" onClick={() => {document.getElementById('like').style.color='white'; setPage(false);setTimeout(() => {setModalShow(true);document.getElementById('like').style.color='#175451';}, 3000);}}>
                                <ThumbUpAltIcon id='like' style={{color:'#175451'}} />
                              </IconButton>
                            </Tooltip>
                          </span>
                          <span style={{cursor:'pointer'}}>
                            <Tooltip title="No" placement="top">
                              <IconButton aria-label="dislike" onClick={() =>{document.getElementById('dislike').style.color='white'; setPage(false); setTimeout(() => {setModalShow(true);document.getElementById('dislike').style.color='#175451';}, 3000); }}>
                                <ThumbDownAltIcon id='dislike' style={{color:'#175451'}} />
                              </IconButton>
                            </Tooltip>
                          </span>
                        </h5>
                        {/* <h5 className={an.review} onClick={() => {setPage(false);setModalShow(true)}}>Review this page</h5> */}
                      </div>
                      <p></p>
                    </div>
                </div>
            </Paper>
            
        </div>
        
        <Footer/>
        <Review
            show={modalShow}
            onHide={() => setModalShow(false)}
            page={page}
            />
        </>
    )
}

export default Preface
