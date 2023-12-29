import React from 'react';
import './MainComponent.css';
function SideComponent() {
    // define your state variables here

    // define your functions here

    return (
        <>
        <div className='container-fuid  col-md-12'> 
            
            {/* write your JSX code here */}
            
            <div >
        <div className='sideheading col-md-12 '>Task Boards</div>
        <br></br>
        <br></br>
        <br></br>
        <div className='sidepart col-md-12 '>
        <div className="  col-md-12 ">
           <span className='sideheading1'> FreeLance project</span> 
         </div>
         <br></br>
         <div className="  col-md-12 ">
           <span className='sideheading2'>SBI Outsource</span> 
         </div>
         <br></br>
         <div className="  col-md-12 ">
           <span className='sideheading2'>HCL project 1</span> 
         </div>
         <br></br>
         <div className="  col-md-12 ">
           <span className=' text-primary'> +Add new Project</span> 
         </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default SideComponent;
