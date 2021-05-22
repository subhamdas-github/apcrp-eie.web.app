import React, {useState, useEffect} from 'react'
import {Button,Row, Container, Col, Form, Navbar,Nav,FormControl, Table, Modal,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import Chart from "react-google-charts";

function AdminHome() {

    useEffect(()=>{
      
    },[])
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
    {/* <p></p>        
<Card bg='success' text='white' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.aamc.org/sites/default/files/medical-students-1041148794.jpg" />
  <Card.Body text='white' >
    <Card.Title>Students Dashboard</Card.Title>
    <Card.Text>
        Here are Students Corner Dashboard to control and manipulate Data.
        Admin is advised to read documentation before use.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" style={{color:'black'}} >
    <ListGroupItem>Flexible & easy to use</ListGroupItem>
    <ListGroupItem>More Functionalities</ListGroupItem>
    <ListGroupItem>ReadMe before Use</ListGroupItem>
  </ListGroup>
  <Card.Body >
    Go to <Button variant='secondary'>Student Database</Button>
    
  </Card.Body>
</Card>
  <br />
  <Card bg='warning' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://www.teacherdashboard365.com/sites/default/files/Teacher-Dashboard-homepage-image-v2.png" />
  <Card.Body>
    <Card.Title>About Dashboard</Card.Title>
    <Card.Text>
    Administration Dashboard -- Project Details
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Project Name: APCEIEDOM</ListGroupItem>
    <ListGroupItem>Project Version: V.1.2.0</ListGroupItem>
    <ListGroupItem>Project Page: Admin</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
<p></p>

  <Card bg='info' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.gannett-cdn.com/presto/2019/07/09/USAT/95f3e51a-46d4-467c-9698-b8485e0a62c1-GettyImages-1005285232.jpg?crop=2120,1193,x1,y0&width=2120&height=1193&format=pjpg&auto=webp" />
  <Card.Body>
    <Card.Title>Teachers Dashboard</Card.Title>
    <Card.Text>
    Here are Teachers Corner Dashboard to control and manipulate Data.
        Admin is advised to read documentation before use.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Flexible & easy to use</ListGroupItem>
    <ListGroupItem>More Functionalities</ListGroupItem>
    <ListGroupItem>ReadMe before Use</ListGroupItem>
  </ListGroup>
  <Card.Body>
  Go to <Button variant='secondary'>Teacher Database</Button>
    
  </Card.Body>
</Card>
<p></p> */}
{/* <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 10],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/> */}
        </div>
    )
}

export default AdminHome
