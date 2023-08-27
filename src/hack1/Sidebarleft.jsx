import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebarleft.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Sidebarleft = (props) => {
    
  return (
    <div className='leftside-container'>
        <h2 className="align-center">Patient Profile</h2>
        <div className="patientProfle row rounded-4">
            <Row>
                <Col>
                <div className="img col-sm-6">
                <img src="'/Users/premraval/Desktop/VScode/reactt/src/hack/download.png'" className='img1' alt="image is here" />
                </div>
                </Col>
                <Col>
                <div className="patientProfile">
                Name: {props.name}
                <br />
                Age: {props.age}
                <br />
                Address: {props.address}
                <br />
            </div>
                </Col>
            </Row>
            

        </div>
        <h2 className="mt-3">Lab Data</h2>
        <div className="patientInfo row">
            
            Blood Group: {props.bloodGroup}
            <br />
           
            Blood Pressure: {props.bloodPressure}
            <br />
            known allergies: {props.heartRate}
            <br />
            Diabetes : {props.oxygenLevel}
            <br />
        </div>
        <br />
        <h2 className="align-center">Current Prescription</h2>
        <div className="patientMedicine">
            Med1: {props.bloodGroup}
            <br />
           
            Med2: {props.bloodPressure}
            <br />
            Med3: {props.heartRate}
            <br />
            Med4: {props.oxygenLevel}
            <br />
        </div>

        
    
        
    </div>
  )
}

export default Sidebarleft