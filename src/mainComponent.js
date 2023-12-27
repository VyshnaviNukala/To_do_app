import React,{useState} from 'react';
import './MainComponent.css';
import {Modal,ModalBody,ModalHeader,Input,ModalFooter} from 'reactstrap';


function MainComponent(){
 const[modal,setModal]=useState(false);
 return (
   <>
 <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)}>
     <ModalHeader toggle={() => setModal(!modal)}>Add new task</ModalHeader>
     <ModalBody>
    <form className=' no-hover'>
      <div className='row'>
            <div className='col-md-12'>
               
                  <label htmlFor='name'>Name of the Task</label>
                  <input type='text' className='form-control' placeholder='Text'/>
               
            </div>
      </div>
      <br/>
      <div className='row'>
          <div className='col-md-6'>
            <label>Start Date:</label>
          <input type="date" className='form-control'   />
          </div>
           <div className='col-md-6'>
             <label>End Date:</label>
             <input type="date" className='form-control' />
            </div>
      </div>
     <br/>
      <div className='row'>
           <div className='col-md-12'>
           
           <label for="statusDropdown">Status</label>
          
           
            <Input  type="select" id="statusDropdown">
            <option value="" >To Do</option>
              <option value="progress" disabled >Progress</option>
              <option value="inProgress" disabled >In Progress</option>
              <option value="completed" disabled>Completed</option>
            </Input >
         
           </div>
      </div>
    </form>
    <br/>
    <ModalFooter className="justify-content-end">
    <button type="button" className="btn text-primary  btn-block "  >Cancel</button>
   &nbsp; &nbsp; &nbsp;
    <button type="button" className="btn   btn-block btn-primary "  >Add</button>
    </ModalFooter>
     </ModalBody>
     </Modal> 



    <div class="container-fluid">
      <div className='heading col-span-12 '>My Projects</div>
     <br></br>
      <div className='row'>
 
      <div className='col-md-1 text-primary'>
    <span className='background1 '>To Do</span>
    </div>
       <div className='col-md-2'></div>
       <div className='col-md-1 text-danger'>
    <span className='background2'>In Progress</span>
   </div>
       <div className='col-md-2'></div>
       <div className='col-md-1 text-primary'>
    <span className='background3'>In Review</span>
    </div>
       <div className='col-md-2'></div>
       <div className='col-md-1 text-success'>
    <span className='background4'>Completed</span>
    </div>
       <div className='col-md-2'></div>
    </div>

    <br></br>
    <div className='container-fluid'>
      <div className='row'>
    <button type="button" className="btn col-md-2  btn-block btn1" onClick={()=>setModal(true)} >+ Add new</button>
    <div className='col-md-1'></div>
    <button type="button" className="btn col-md-2  btn-block btn2">+ Add new</button>
    <div className='col-md-1'></div>
    <button type="button" className="btn col-md-2  btn-block btn3">+ Add new</button>
    <div className='col-md-1'></div>
    <button type="button" className="btn col-md-2  btn-block btn4">+ Add new</button>
    <div className='col-md-1'></div>
    </div>
    <div >
    
    </div>
   </div>
   </div>

   </>
 );
};


export default MainComponent;