import React, {useState} from "react";
import './AssignmentsModal.css';
import axios from "axios";

function AssignmentsModal({coordinatorId,studentId,open,onClose}){
    const [task,setTask] = useState({
        studentId:studentId,
        teacherId:coordinatorId,
        deadline:new Date(),
        message:'',
    })
    if(!open) return null;
    const sendAssignments = () => {
        axios.post(`http://localhost:8080/coordonator/assignment`,task,{
            'headers': {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            });
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
                        <input type='datetime-local' onChange={date => setTask({...task,deadline: date.target.value})}/>
                        <br/>
                        <label>Descriere</label>
                        <br/>
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