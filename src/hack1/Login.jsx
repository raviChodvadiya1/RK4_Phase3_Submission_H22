import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg1 from './Reg1'

export const Login = () => {
    
      const [aadhar, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission and authentication logic here
        console.log('Submitted:', aadhar, password);
      };

      const pathname= window.location.pathname;
      let page
      if(pathname==='/reg'){
        page=<Reg1/>
      }
    
    
      return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center">Login</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        AADHAR NUMBER
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={aadhar}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </form>
                  <br />
                  <p>  REGISTER NEW PAITIENT <a href="/reg">HERE</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

    
  )
}

export default Login
