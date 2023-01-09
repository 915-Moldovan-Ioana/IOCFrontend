import React, {useState} from "react";
import './AssignmentsModal.css';

function AssignmentsModal({id,open,onClose}){
    const [task,setTask] = useState({
        studentId:id,
        message:'',
        deadline:new Date()
    })
    if(!open) return null;
    const sendAssignments = () => {

    }
    return (
        <div className='overlay'>
            <div className='modal-container'>
                <div className='modal-content'>
                    <p className='close-button' onClick={onClose}>X</p>
                    <p className='modal-title'>Atribuie sarcina</p>
                    <div className='modal-body'>
                        <label>Termen</label>
                        <br/>
                        <input type='date' onChange={date => setTask({...task,deadline: date.target.value})}/>
                        <br/>
                        <label>Descriere</label>
                        <br/>
                        {/*<input type="text" onChange={message => setTask({...task,message: message.target.value})}/>*/}
                        <textarea onChange={message => setTask({...task,message: message.target.value})}/>
                    </div>
                    <div className='modal-footer'>
                        <button className='post-assignment' onClick={() => sendAssignments()}>Trimite</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export {AssignmentsModal}