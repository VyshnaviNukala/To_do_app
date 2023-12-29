
import React, { useState } from 'react';
import './MainComponent.css';
import { Modal, ModalBody, ModalHeader, Input, ModalFooter } from 'reactstrap';

function MainComponent() {
 const [modal, setModal] = useState(false);

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
    setModal(false); // Close the modal immediately
    console.log('Task Details:', taskDetails);
    const taskDetailsDiv = document.getElementById('taskDetails');
    if (taskDetailsDiv) {
    //   const newDiv = document.createElement('div');
    //   newDiv.innerHTML = `
    //   <p>Name: ${taskDetails.name}</p>
    //   <p>Start Date: ${taskDetails.startDate}</p>
    //   <p>End Date: ${taskDetails.endDate}</p>
      
      
    // `;
    //   taskDetailsDiv.appendChild(newDiv);
   
    const newDiv = document.createElement('div');
      newDiv.innerHTML = `
      <p>Name: ${taskDetails.name}</p>
      <p>Start Date: ${taskDetails.startDate}</p>
      <p>End Date: ${taskDetails.endDate}</p>
      
      
    `;
    
    newDiv.style.paddingBottom = '20px'; 
    <br></br> // add space between divs
      taskDetailsDiv.appendChild(newDiv);
      
    }

    setTaskDetails({
      name: '',
      startDate: '',
      endDate: '',
     
    });
 };

 return (
    <>
      <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} id="form-id">
        <ModalHeader toggle={() => setModal(!modal)}>Add new task</ModalHeader>
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
              onClick={() => setModal(!modal)}
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

      <div class="container col-md-12">
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
        </div>

        <br></br>
        <div className='container-fluid'>
          <div className='row'>
            <button
              type="button"
              className="btn col-md-2 btn-block btn1"
              onClick={() => setModal(true)}
            >
              + Add new
            </button>
            <div className='col-md-1'></div>
            <button
              type="button"
              className="btn col-md-2 btn-block btn2"
            >
              + Add new
            </button>
            <div className='col-md-1'></div>
            <button
              type="button"
              className="btn col-md-2 btn-block btn3"
            >
              + Add new
            </button>
            <div className='col-md-1'></div>
            <button
              type="button"
              className="btn col-md-2 btn-block btn4"
            >
              + Add new
            </button>
            
            <div className='col-md-1'></div>
          </div>
          <div>
          <br/>
          
            {/* <div id="taskDetails" className='col-md-2'></div> */}
            <div id="taskDetails" className='col-md-2 '></div>
            
          </div>
        </div>
      </div>
    </>
 );
}

export default MainComponent;
