import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import "./acceptedStudents.css";
import {AssignmentsModal} from "./AssignmentsModal/AssignmentsModal";
import IdContext from "../login/IdContext";

function AcceptedStudents() {
    const [students, setAcceptedStudents] = useState(null);
    const [showDetails, showStudentDetails] = useState(false);
    const [studentDetails, setStudentDetails] = useState(null);
    const [openModal,setOpenModal] = useState(false);
    const idctx = useContext(IdContext);
    const id = idctx.idLogin;
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/acceptedStudents/${id}`)
            .then(response => {
                setAcceptedStudents(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleButtonClick = student => {
        showStudentDetails(true)
        setStudentDetails(student);
    };
    const openModalForAssignments = (student) => {
        setOpenModal(true);
        setStudentDetails(student);
    };

    return (
        <div className="main-container">
            <table>
                <thead>
                    <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students &&
                        students.map(student => {
                            return (
                                <tr key={student.id} >
                                    <td className="click" onClick={() => handleButtonClick(student)}>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                </tr>
                            );
                                <>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>
                                            <button onClick={() => handleButtonClick(student)}>
                                                Afisare detalii
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => openModalForAssignments(student)}>
                                                Posteaza sarcina de lucru
                                            </button>
                                        </td>
                                    </tr>
                                </>
                        );
                        })}
                </tbody>
            </table>
            {showDetails &&
                <div className="details">
                    Informatii suplimentare despre studentul {studentDetails.firstName}:<br></br>
                    Email: {studentDetails.email}
                </div>
            }
            {openModal && <AssignmentsModal coordinatorId={id} studentId={studentDetails.id} open={openModal} onClose={() => setOpenModal(false)}/>}
        </div>

    );
}

export default AcceptedStudents;