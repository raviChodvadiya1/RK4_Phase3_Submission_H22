import React from 'react'
import LeftSide from './Sidebarleft'
import PatientHistory from './History'
import './Patient.css'
import './landpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  return (
    <div className='landpage'>
    <div className='Main-container row'>
        <div className="col-md-4">
          <LeftSide />
        </div>
        <div className="col-md-7 pathis">
            <PatientHistory/>
        </div>
    </div >    
    </div>
  )
}

export default LandingPage

