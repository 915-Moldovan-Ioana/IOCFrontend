import React from "react";
import './AssignmentsModal.css';

function AssignmentsModal({id,open,onClose}){
    if(!open) return null;
    return (
        <div className='overlay'>
            <div className='modal-container'>
                <p className='closeButton' onClick={onClose}>X</p>
                <div className='modal-content'>
                    aaaaaaaaaaaaaaaa
                </div>
            </div>
        </div>
    );
}
export {AssignmentsModal}