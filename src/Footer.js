import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaFacebook, FaLinkedinIn,FaWhatsapp,FaGithub,FaHackerrank} from 'react-icons/fa'
import {SiFacebook} from 'react-icons/si'
import {MdEmail} from 'react-icons/md';
import containerStyle from './AdminContainer.module.css'
import alok from './images/alok.jpg'
import subham from './images/subham.jpg'
function Footer() {
    function getdate (){
        return new Date().getFullYear();
    }
    return (
        <div>
            <div  className={containerStyle.newtestfont} style={{backgroundColor:'black',color:'whitesmoke',maxHeight:2000}}>
                <br/><br/>
            <Container fluid='xl'>
                <br/><br/>
                <Row>
                    <Col sm >
                    <br/>
                        <div className={containerStyle.footerconcept}>
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    <h2 style={{color:'#4169E1'}} ><b>Acharya Prafulla Chandra Ray Polytechnic</b></h2>
                    <h4 >Department of Electronics and Instrumentation Engineering</h4>
                    <h7 >188, Raja Subodh Chandra Mallick Road Jadavpur,Kolkata: 700032<br/> Call : <a href='tel:03324146241'>03324146241</a>
                    <br/>email: <a href="mailto:apcraypolytechnic@gmail.com" target='_blank'>apcraypolytechnic@gmail.com</a>/<a href='mailto:officeapcray@gmail.com' target='_blank'>officeapcray@gmail.com</a>
                    <br/>Visit our <a href='https://www.facebook.com/groups/192098204773124' target='_blank'><SiFacebook/> facebook</a> community</h7>
                    </div>
                    </Col>
                    
                    <Col sm>
                    <br/>
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    <div className={containerStyle.maps} style={{textAlign:'center'}}>
                        <iframe height="250" style={{maxWidth:400}}
                        src="https://maps.google.com/maps?q=apc%20ray%20polytechnic,%20jadavpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='d-block w-100'>
                        </iframe>
                    </div>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col sm ><br/>
                    {/* <hr style={{borderWidth:5, borderColor:'#FF4500'}}></hr> */}
                    <div className={containerStyle.footerconcept}>
                    <h2 style={{color:'blueviolet'}} ><b>Conceptualist</b></h2>
                    <p> <h4 >Alok Mondal <img src={alok} width={26} style={{borderRadius:20,paddingBottom:2}}/> </h4><a href='https://www.facebook.com/alok.mondal.56481379' target='_blank' style={{color:'white'}}><FaFacebook /></a>&nbsp;<FaLinkedinIn/>&nbsp;<FaWhatsapp/>&nbsp;<MdEmail/>&nbsp;<br/> Electronics & Instrumentation Engineering<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032<br/></p>
                    </div>
                    </Col>


                
                    <Col sm ><br/>
                    {/* <hr style={{borderWidth:5,borderColor:'#FF4500'}}></hr> */}
                    <div className={containerStyle.footerconcept}>
                    <h2 style={{color:'#4169E1'}} ><b>Developed by</b></h2>
                        <p>
                     <h4>Subham Das  &lt;/&gt;</h4><a href='https://www.facebook.com/subham.das.908347' target='_blank' style={{color:'white'}}><FaFacebook /></a>&nbsp;<FaLinkedinIn/>&nbsp;<FaWhatsapp/>&nbsp;<MdEmail/>&nbsp;<FaGithub/>&nbsp;<FaHackerrank/><br/> Computer Science & Technology<br/>
                    Acharya Prafulla Chandra Ray Polytechnic, Kolkata-700032</p>
                    </div>
                    </Col>
                </Row>
                
                <p></p><br/>
                <p style={{fontSize:13}}>©️ This Web Application don't collect any personal data from anyone. All the information given in this website are collected from source. No data is used without it's author's permission. Only the selected Admin(s) will be given access to Admin Panel every year.</p>
                <p style={{textAlign:'center'}}><a href=''>Copyright © {getdate()}</a>. All rights reserved.</p>
            </Container>
            </div>
        </div>
    )
}

export default Footer
