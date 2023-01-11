import React, {useState} from "react";
import './modalEval.css';
import axios from "axios";

function ModalEval({coordinatorId,studentId,open,onClose}){
    const [task,setTask] = useState({
        studentId:studentId,
        teacherId:coordinatorId,
        deadline:new Date(),
        message:'',
    })
    if(!open) return null;
    const sendNota = () => {
    //
    }
    return (
        <div className='overlay'>
            <div className='modal-container'>
                <div className='modal-content'>
                    <p className='close-button' onClick={onClose}>X</p>
                    <p className='modal-title'>Atribuie Nota</p>
                    <div className='modal-body'>
                        <br/>
                        <label>Task: Task de trimis acte</label>
                        <br/>
                        <h1>Nota:</h1><input onChange={message => setTask({...task,message: message.target.value})}/>
                    </div>

                    <div className='modal-footer'>
                        <button className='post-assignment' onClick={() => sendNota()}>Trimite</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export {ModalEval}