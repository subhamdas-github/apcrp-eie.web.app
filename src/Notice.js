import React,{useEffect} from 'react'
import { Container,Navbar,NavDropdown,Nav,Button,Modal, Form, CardColumns,Card,Alert,ListGroup } from 'react-bootstrap'
import fire from './config/fire';
import containerStyle from './AdminContainer.module.css'
function Notice() {
    const [tasksNot, setTasksNot] = React.useState([]);
    const [count, setcount] = React.useState(0)
    var colors = 
    ['#00FFFF','#8A2BE2','#A52A2A','#5F9EA0','#0000FF','#D2691E','#00FFFF','#006400','#8B008B','#A9A9A9',
     '#556B2F','#FF8C00','#9932CC','#8B0000','#8FBC8F','#483D8B','#E9967A','#2F4F4F','#2F4F4F','#00CED1',
     '#9400D3','#FF1493','#00BFFF','#1E90FF','#696969','#696969','#B22222','#228B22','#DCDCDC','#FF00FF',
     '#F8F8FF','#808080','#DAA520','#FFD700','#ADFF2F','#008000','#FF69B4','#CD5C5C','#F0FFF0','#4B0082',
     '#FFFFF0','#F0E68C','#E6E6FA','#ADD8E6','#F08080','#FFFACD','#E0FFFF','#90EE90','#FFB6C1','#D3D3D3',
     '#FFA07A','#20B2AA','#87CEFA','#778899','#B0C4DE','#FFFFE0','#32CD32','#800000','#0000CD','#66CDAA',
     '#BA55D3','#9370DB','#3CB371','#7B68EE','#00FA9A','#48D1CC','#C71585','#191970','#F5FFFA','#FFE4E1',
     '#FFE4B5','#FFDEAD','#000080','#808000','#6B8E23','#FF4500','#FFA500','#DA70D6','#EEE8AA','#AFEEEE',
     '#DB7093','#FFEFD5','#CD853F','#DDA0DD','#B0E0E6','#800080','#663399','#4169E1','#BC8F8F','#FF0000',
     '#9ACD32','#FFFF00','#008080','#FF6347','#4682B4','#6A5ACD','#2E8B57','#F4A460','#FA8072','#00FF7F']
    var textcolors = 
    ['#008000','#4B0082','#00008B','#DC143C','#800080','#A52A2A','#2F4F4F','#008080','#9400D3','#6A5ACD'] 
    useEffect(()=>{
        // fire.firestore().collection('notice')
        // .onSnapshot(function(data){setcount(data.size);setTasksNot(data.docs.map(doc=>({ ...doc.data(), id: doc.id})));})
    },[])
    return (
        <div>
                            <Alert variant="danger">
                            <Alert.Heading>Sorry! there is no new Notice</Alert.Heading>
                            <p>
                                Please come back after some time. If you think this is a mistake please contact with Administrator(s).
                            </p>
                            </Alert>
                            
                            <CardColumns>
                                {tasksNot.map(spell => (
                                    
                                <Card border='primary'
                                    className="text-center p-1"
                                    style={{backgroundColor: colors[Math.floor(Math.random() * 100)]}}
                                >
                                    <div className={containerStyle.fonts}>    
                                    <Card.Img src={spell.url} />
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{color:textcolors[Math.floor(Math.random() * 10)]}}><h5><b>{spell.email}</b></h5>
                                        {spell.status1}
                                        </ListGroup.Item>
                                        {/* <ListGroup.Item><Card.Link><FcAddressBook/> {spell.email}</Card.Link></ListGroup.Item> */}
                                        {/* <ListGroup.Item><FcPhone/> {spell.phone}</ListGroup.Item> */}
                                    </ListGroup>
                                    </div>
                                    
                                </Card>
                                ))}
                            </CardColumns>
        </div>
    )
}

export default Notice
