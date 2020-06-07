import React from 'react';
// import Green from './Green';
import { Link } from 'react-router-dom';
// import Choose from './Choose';



const Colors = () => {
    return (
        <div>
            <Link to="/" className="btn btn-dark mt-2">Go back Home</Link>
            <h1 className="my-5 text-center">The Color Factory</h1>
            <h2>Choose your custom Color</h2>
            <Link to='/choose' className="btn btn-block btn-dark my-4">CHOOSE</Link>
            <h2>View the available colors below:</h2>
          <ul className="navbar">
            <li className="nav-item">
             <Link className="btn btn-primary text-white" to='/colors/blue'>Blue</Link>
            </li>
            <li className="nav-item">     
              <Link className="btn btn-danger text-white" to='/colors/red'>Red</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-success text-white" to='/colors/green'>Green</Link>
            </li>
          </ul> 
         
          {/* <Route path="/colors/green" component={Green}/> */}
        </div>
      )
}

export default Colors;