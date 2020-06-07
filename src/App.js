import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Choose from './Choose';
import Colors from './Colors';
import Green from './Green';

const Home = () => {
  return(
    <div className="container text-center">
      <h1>Welcome to the Color Factory</h1>
      <Link to="/colors" type="button" className="btn btn-block btn-dark my-4">Click Here to see the Available Colors</Link>
    </div>
  )
}

const chooseColor = ({match}) => {
  const { color } = match.params;
  return (
      <div>
          <h3>Please choose a color:</h3>
          {'/colors/green' ? <Green /> : 'NONE'}
      </div>
  )
}

const App = () => {
  
    return(
      <div className="container"> 
        <Route exact path='/' component={Home}/>
        <Route path='/colors' component={Colors}/>
        <Route path='/choose' component={Choose} />
        <Route path="/colors/:color" component={chooseColor}/> 
      </div>
    );
  
}

export default App;
