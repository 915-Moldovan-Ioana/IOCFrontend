import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./acceptedStudents.css";
import {AssignmentsModal} from "./AssignmentsModal/AssignmentsModal";

function AcceptedStudents() {
    const [students, setAcceptedStudents] = useState(null);
    const [showDetails, showStudentDetails] = useState(false);
    const [studentDetails, setStudentDetails] = useState(null);
    const [openModal,setOpenModal] = useState(false);
    const id = 4;
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/acceptedStudents/${id}`)
            .then(response => {
                setStudentsData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const setStudentsData = (students) => {
        students.forEach(student => {
            student.openModal = false;
        })
        setAcceptedStudents(students);
    }
    const handleButtonClick = student => {
        showStudentDetails(true)
        setStudentDetails(student);
    };
    const openModalForAssignments = (id) => {
        let studentsCopy = students;
        studentsCopy.forEach(student => {
            if(student.id === id)
                student.openModal = true;
        })
        setAcceptedStudents(studentsCopy);
    };

    return (
        <div>
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
                                            <button onClick={() => openModalForAssignments(student.id)}>
                                                Posteaza sarcina de lucru
                                            </button>
                                        </td>
                                    </tr>
                                    <AssignmentsModal id={student.id} open={student.openModal} onClose={() => setOpenModal(false)}/>
                                </>
                        );
                        })}
                </tbody>
            </table>
            {showDetails &&
                <div className="details">
                    Informatii despre studentul {studentDetails.firstName}:<br></br>
                    Email: {studentDetails.email}
                    </div>
            }
        </div>

    );
}

export default AcceptedStudents;