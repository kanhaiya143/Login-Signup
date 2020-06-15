import React from 'react';
import {Button} from '@material-ui/core';


import { Link,BrowserRouter as Router, Route,IndexRoute} from 'react-router-dom';




const Home=()=> {
    const buttonStyle={
        color:'white',
        textDecoration: 'none' 
    }
    return (
       
        <div className="Home" >
        
        
        <Button variant="contained" color="primary"><Link to='/signup' style={buttonStyle}>Sign up</Link></Button>
        
        <Button variant="contained" color="primary"><Link to='/signin' style={buttonStyle}>Sign in</Link></Button>
        </div >
    );
  }
  
  export default Home;