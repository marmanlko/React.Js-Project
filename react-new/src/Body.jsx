import React from 'react';
import Component from './Component';
const food="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"

function Btn(Pros)
{
    return(
        <>
            <a href={Pros.link} target="_blank"><button className="btn2">{Pros.title}</button></a>
        </>

    );
}
const Body =()=>{
return(
    <>
    <div className="container-fluid">
        <img src={food} alt="image not found" />
        <div className="d-flex justify-content-center centered">
        
        {
            Sdata.map((val) =><Btn title={val.title} link={val.link}/>)
        }
        
            
            
        </div>
    </div>
    
    </>
    );
};


const Sdata=[
    {
        title:"Order Now",
        link:"mrdic.in"
    },
    {
        title:"See Menu",
        link:"marmanlko.in"
    }
];


export default Body;
export {Component};