import React from 'react';
import ReactDOM  from 'react-dom';
const Quiz=(props)=>
{
    let x=props.x;
    let y=props.y;
    let z=props.z;
    
   return(
       
            ((x===y)&&(y==z))?<><h5 style={{color:'green'}}>{x} {y} {z} <br/>Matched</h5> <hr /></>:<><h5 style={{color:'red'}}>{x} {y} {z} <br/>Not Matched</h5> <hr /></>
        
   );
  
}
export default Quiz;