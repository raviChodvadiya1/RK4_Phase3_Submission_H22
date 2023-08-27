import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const displayinfo = () => {
  return (
    <div>
    <h2 className="text-center">patients List</h2>
    <div className = "row">
       <button className="btn btn-primary"> Add patient</button>
    </div>
    <br></br>
    <div className = "row">
           <table className = "table table-striped table-bordered">

               <thead>
                   <tr>
                       <th> patient First Name</th>
                       <th> patient Last Name</th>
                       <th> patient Id</th>
                       <th> Actions</th>
                   </tr>
               </thead>
               <tbody>
                   
                    
                        
                           <tr>
                                <td> Ravi </td>   
                                <td> ChodVadiya</td>
                                <td> Ravi123</td>
                                <td>
                                    <button className="btn btn-info">View </button>
                                    
                                </td>
                           </tr>
                           <tr>
                                <td> Ravi </td>   
                                <td> ChodVadiya</td>
                                <td> Ravi123</td>
                                <td>
                                    <button className="btn btn-info">View </button>
                                    
                                </td>
                           </tr>
                           <tr>
                                <td> Ravi </td>   
                                <td> ChodVadiya</td>
                                <td> Ravi123</td>
                                <td>
                                    <button className="btn btn-info">View</button>
                                    
                                </td>
                           </tr>
               </tbody>
           </table>

    </div>
    

</div>
  )
}

export default displayinfo