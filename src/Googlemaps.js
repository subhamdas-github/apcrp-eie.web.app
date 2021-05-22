import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ReactMapGL from 'react-map-gl';
import containerStyle from './AdminContainer.module.css'
function Googlemaps() {
    
    return (
        <div>
            <div >
                <br/>
                <Container fluid='xl'>
                <Container fluid='xl' style={{textAlign:'center'}} className={containerStyle.containerfront}>
                
                <Row>
                    <Col>
                    <div className={containerStyle.maps} >
                        <iframe width="568" height="451"
                        src="https://maps.google.com/maps?q=apc%20ray%20polytechnic,%20jadavpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='d-block w-100'>
                        </iframe>
                    </div>
                    </Col>
                </Row>
                </Container>
                </Container>
            </div>
        </div>
    )
}

export default Googlemaps
