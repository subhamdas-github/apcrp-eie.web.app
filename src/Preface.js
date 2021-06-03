import React from 'react'
import sty from './css/adminFormImg.module.css';
import { Col, Container, Row } from 'react-bootstrap'
import containerStyle from './AdminContainer.module.css'
import {TiPointOfInterest} from 'react-icons/ti'
import {CgEditBlackPoint} from 'react-icons/cg'
import {FcAdvance} from 'react-icons/fc'
import {FaHandPointRight} from 'react-icons/fa';
import eielogo from './images/logoeie.png';
import FrontHeading from './FrontHeading';
import Footer from './Footer';

function Preface() {
    return (
        <>
        <FrontHeading/>
        <div className={sty.controlpanelfont}>
            <br/><br/>
            <Container fluid='xl'>
            <Container fluid='xl' className={containerStyle.containerfront}>
            <h1 style={{textAlign:'center'}} className={containerStyle.borderbottomstyle}>💌Preface</h1>
            <div style={{padding:5,textAlign:'justify',color:'#00008B'}} className={containerStyle.prefacediv}>

                <Row xs={1} md={3} style={{textAlign:'center'}}>
                <Col md={3} >
                </Col>
                <Col md={6}>
                <img className="d-block w-100"
                src={eielogo} 
                style={{position:'absolute',opacity:0.2,maxWidth:480,paddingRight:12,paddingTop:10}}
                />
                </Col>
                <Col xs={3} md={4}>
                </Col>
                </Row>
{/* <b> */}
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:30}}>W</span>e the students of <span style={{color:'#C71585'}}><b> DEIE(2018-2021)</b></span> have always thought it to be our duty to give ourselves
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
            {/* <p >

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design & Concept:
            <span style={{color:'red'}}>- Alok Mondal (DEIE 2021)</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inspired by:
            <span style={{color:'red'}}>- Sourav Guchhait  (DEIE 2018)</span>
            </p> */}
            <Row className="justify-content-md-center">
                <Col >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design & Concept: <span style={{color:'red'}}>- Alok Mondal (DEIE 2021)</span>
                </Col>
                <Col md="auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inspired by:<span style={{color:'red'}}>- Sourav Guchhait  (DEIE 2018)</span>
                </Col>
            </Row>
            </div>
            <br/><br/><hr/>
            </Container>
            </Container>
        </div>
        <Footer/>
        </>
    )
}

export default Preface
