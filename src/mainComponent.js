
import React, { useState } from 'react';
import './MainComponent.css';
import { Modal, ModalBody, ModalHeader, Input, ModalFooter } from 'reactstrap';

function MainComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsEntered, setDetailsEntered] = useState(true);
  const [taskDetails, setTaskDetails] = useState({
    name: '',
    startDate: '',
    endDate: '',
    status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    setModalOpen(false);
    console.log('Task Details:', taskDetails);
    const taskDetailsDiv = document.getElementById('taskDetails');
    if (taskDetailsDiv) {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <p>Name: ${taskDetails.name}</p>
        <p>Start Date: ${taskDetails.startDate}</p>
        <p>End Date: ${taskDetails.endDate}</p>
        
      `;
      
      taskDetailsDiv.appendChild(newDiv);
      <br></br>
      newDiv.style.marginBottom='40px';
      newDiv.style.paddingBottom='20px'
      
    }

    setTaskDetails({
      name: '',
      startDate: '',
      endDate: '',
    });
    setDetailsEntered(true);
  };
  
  return (
    <div className="container-fluid">
     <div className="row">
         <div className="col-md-2">
          
    
         <div className='container-fluid sidebar col-md-12'> 
            
            
            
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
     </div>         </div>
     </div>
        
      </div>
        <div className="col-md-10">
          <>
          <Modal size='lg' isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} id="form-id">
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Add new task</ModalHeader>
        <ModalBody>
          <form className='no-hover'>
            <div className='row'>
              <div className='col-md-12'>
                <label htmlFor='name'>Name of the Task</label>
                <input
                 type='text'
                 className='form-control'
                 placeholder='Text'
                 name='name'
                 value={taskDetails.name}
                 onChange={handleInputChange}
                />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-md-6'>
                <label>Start Date:</label>
                <input
                 type="date"
                 className='form-control'
                 name='startDate'
                 value={taskDetails.startDate}
                 onChange={handleInputChange}
                />
              </div>
              <div className='col-md-6'>
                <label>End Date:</label>
                <input
                 type="date"
                 className='form-control'
                 name='endDate'
                 value={taskDetails.endDate}
                 onChange={handleInputChange}
                />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-md-12'>
                <label for="statusDropdown">Status</label>
                <Input
                 type="select"
                 id="statusDropdown"
                 name='status'
                 value={taskDetails.status}
                 onChange={handleInputChange}
                >
                 <option value="">To Do</option>
                 <option value="progress" disabled>Progress</option>
                 <option value="inProgress" disabled>In Progress</option>
                 <option value="completed" disabled>Completed</option>
                </Input>
              </div>
            </div>
          </form>
          <br />
          <ModalFooter className="justify-content-end">
            <button
              type="button"
              className="btn text-primary btn-block"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Cancel
            </button>
            &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              className="btn btn-block btn-primary"
              onClick={handleAddTask}
            >
              Add
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>

            <div className="container mainpart col-md-12">
              <div className='heading col-md-12 '>My Projects</div>

              <br></br>
              <div className='row '>
                <div className='col-md-2 text-primary'>
                  <span className='background1 '>To Do</span>
                </div>
                
                <div className='col-md-1'></div>
                <div className='col-md-2 text-danger'>
                  <span className='background2'>In Progress</span>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-2 text-primary'>
                  <span className='background3'>In Review</span>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-2 text-success'>
                  <span className='background4'>Completed</span>
                </div>
                <div className='col-md-1'></div>
               <br></br>
               <br></br>
               <br></br>
              
               <div className=' row col-md-12'>
                

                   
                 <div className='col-md-2'></div>
                 
                  <div className='row col-md-1'></div>
               <button
                    type="button"
                    className="btn col-md-2 btn2 position"
                  >
                    + Add new
                  </button>
                  <div className='col-md-1'></div>
                  <button
                    type="button"
                    className="btn col-md-2  btn3 "
                  >
                    + Add new
                  </button>
                  <div className='col-md-1'></div> 
                  
                  <button
                    type="button"
                    className="btn col-md-2  btn4 "
                  >
                    + Add new
                  </button>
                  <div className='col-md-1'></div> 
                  
                  
               </div>
              </div>


              <br></br>
              <div className='container-fluid'>
                <div id="taskDetails" className='col-md-2'></div>
                <br/>
                <div className=' col-md-12'>
                  {detailsEntered ? (
                    <button
                      type="button"
                      className="btn col-md-2 btn1 "
                      id="initialAddNewButton"
                      onClick={() => setModalOpen(true)} style={{marginTop:'-160px'}} 
                    >
                      + Add new
                    </button>
                  ) : null}
                  
                </div>
                
               
              </div>
              
            </div>
            
          </>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
