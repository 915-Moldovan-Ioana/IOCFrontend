import React, {useState} from "react";
import '../coordinator/modalEval.css';
import axios from "axios";

function AdminSendEmail(){
    const [confirmationMessage,setConfirmationMessage] = useState("");
    const [message,setMessage]=useState("");
    const[email,setEmail]=useState("");
    const[subject,setSubject]=useState("");
    const sendEmail = () => {
        axios.get(`http://localhost:8080/admins/email/${email}/${subject}/${message}`)
            .then(() => {
                setConfirmationMessage("Email trimis cu succes!");
            })
                .catch(error => {
                    console.error(error);
                });
        }
    return (
            <div className='modal-container'>
                <div className='modal-content'>
                    <p className='modal-title'>Trimitere email</p>
                    <div className='modal-body'>
                        <label>Email: </label>
                        <input onChange={message => setEmail(message.target.value)}/>
                        <br/>
                        <label>Subiect: </label>
                        <input onChange={message => setSubject(message.target.value)}/>
                        <br/>
                        <label>Mesaj: </label>
                        <br/>
                        <textarea onChange={message => setMessage(message.target.value)}/>
                    </div>
                    <div className='modal-footer'>
                        <button className='post-assignment' onClick={() => sendEmail()}>Trimite email</button>
                        <div className='info-message'>{confirmationMessage}</div>
                    </div>
                </div>
            </div>
    );
}
export {AdminSendEmail}