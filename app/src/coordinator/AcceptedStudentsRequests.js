import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./acceptedStudents.css";

function AcceptedStudentsRequests() {
    const [students, setAcceptedStudents] = useState(null);
    const [showDetails, showStudentDetails] = useState(false);
    const [studentDetails, setStudentDetails] = useState(null);
    const id = 4;
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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students &&
                        students.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>
                                        <button onClick={() => handleButtonClick(student)}>
                                            Afisare detalii
                                        </button>
                                    </td>
                                </tr>
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

export default AcceptedStudentsRequests;