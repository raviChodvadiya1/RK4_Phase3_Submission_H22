import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./register.css"
import React,{useState} from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './register.css'
import Login from './Login'



function Header() {
    return (
      <Navbar expand="lg" bg="primary">
        <Container>
          <Navbar.Brand href="#home">
              <p className='txt1'>Healthify - Register</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

function Form2(){

    const[formdata,setformdata]=useState({});

    const handlechange = (event) => 
    {
        const name = event.target.name;
        const value = event.target.value;
        setformdata({...formdata, [name]: value})}
      
        const pathname= window.location.pathname;
        let page
        if(pathname==='/reg'){
          page=<Login/>
        }
    const handlesubmit=(e)=>
    {
    e.preventDefault();
    alert("Your form has been submitted.\nName: " + formdata.fname + 
    "\nAge: " + formdata.age + "\nAadhar No: "+ formdata.aadhar)
 
 }




    return(
        <div className='form2 rounded-5'>
            <Container>
            <Form onSubmit={handlesubmit}>
                <Row>
                    <Col>
                    <div className='details'>
                    <p className='t1'>Enter patient Details</p>
                    <label className='adrtxt'>Full Name</label>
                    <Form.Control type="text" onChange={handlechange} name="fname"  className='inp1' placeholder="Enter full name" required/>
                    <label className='adrtxt'>Gender : </label><br/>
                    <input type='radio' className='radi' name='ps' value='male' onChange={onchange} /> 
                    <label className='radi'> Male</label>
                    <input type='radio' className='radi' name='ps' value='female' onChange={onchange} />
                    <label className='adrtxt'> Female</label><br/>
                    <label className='adrtxt'>Age</label>
                    <Form.Control type="number" onChange={handlechange} name='age' className='inp2' placeholder="Enter age" required max="99"/>
                    <label className='adrtxt'>Aadhar Number</label>
                    <Form.Control type="password" onChange={handlechange} name='aadhar' className='inp3' placeholder="Enter Aadhar Number" required/>
                    <label className='adrtxt'>Mobile Number</label>
                    <Form.Control type="text" onChange={handlechange} name='mobile' className='inp4' placeholder="Mobile Number" required/>
                    </div>
                    </Col>
                    
                    <div>
                    <label className='adrtxt'>Enter Address</label>
                    <Form.Group className="inp7" onChange={handlechange} name='address' controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type='submit' className='subm' variant="success">Submit</Button>
                    </div>
                    
                    
                </Row>
                </Form>
            </Container>
        </div>
    )
}

const Project=()=>{
    return(
        <div className='body'>
        <Header/>
        <Form2/>
        <p>  Continue to Login <a href="/">HERE</a></p>
        </div>
    )
}


export default Project;