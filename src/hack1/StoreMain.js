import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

import './StoreMain.css'
function Division(){
    const [Taskvalue,setvalue]=useState('');
    const [Taskname,setname]=useState('');
    const[todolist,settodolist]=useState([]);
    function handleChange(e){
        setvalue(e.target.value)
        // console.log(e.target.value)
        // console.log(e.target.name)
        setname(e.target.name)
    }
    function handleSubmit(e){
        console.log(Taskname)
        console.log(Taskvalue)
        settodolist([...todolist,{'name':Taskname,'value':Taskvalue}])
        console.log(todolist)
    }

    return(
        <div>
            <h3>Scan medicine </h3>
            <Container className='Container'>
            <Row className='row'>
                <Col>
                <Button variant="primary">Paracetomol</Button>
                </Col>
                <Col xs={3}>
                <Form.Control type="text" required name='paracetomol' placeholder="Enter quantity" onChange={handleChange} />
                </Col>
                <Col>
                <Button variant="outline-primary " onClick={handleSubmit}>Scan</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="primary">Dolo 650</Button>
                </Col>
                <Col xs={3}>
                <Form.Control type="text" required name='Dolo 650' placeholder="Enter quantity" onChange={handleChange} />
                </Col>
                <Col>
                <Button variant="outline-primary " onClick={handleSubmit}>Scan</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="primary">Metacin</Button>
                </Col>
                <Col xs={3}>
                <Form.Control type="text" required name='Metacin' placeholder="Enter quantity" onChange={handleChange} />
                </Col>
                <Col>
                <Button variant="outline-primary " onClick={handleSubmit}>Scan</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button variant="primary">Lemonet</Button>
                </Col>
                <Col xs={3}>
                <Form.Control type="text" required name='Lemonet' placeholder="Enter quantity" onChange={handleChange} />
                </Col>
                <Col>
                <Button variant="outline-primary " onClick={handleSubmit}>Scan</Button>
                </Col>
            </Row>

            </Container>
            {/* <tr>
            <th>Patient ID</th>
            <th>Medecine ID</th>
            <th>Quantity</th> */}
            {/* <th>Table heading</th> */}
          {/* </tr> */}
          <div className='div-heading-med'>
            <p>Patient ID</p>
            <p>Medecine ID</p>
            <p>Quantity</p>
          </div>
            {
                todolist.map((tast)=>{
                    return(
                        <div className='main-div-parent'>
                            {/* <tr> */}
                            {/* <tb>#</tb> */}
                            {/* <tb>123</tb> */}
                            {/* <tb>{tast.name}</tb> */}
                            {/* <tb>{tast.value}</tb> */}
                            {/* <tb>Table heading</tb> */}
          {/* </tr> */}
                        <div className='sub-div-one'>
                            <p>123</p>
                        </div>
                        <div className='sub-div-two'>
                            <p>{tast.name}</p>
                        </div>
                        <div className='sub-div-three'>
                            <p>{tast.value}</p>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const StoreMain = () => {
  return (
    <div>
        <Division/>

    </div>
  )
}

export default StoreMain
