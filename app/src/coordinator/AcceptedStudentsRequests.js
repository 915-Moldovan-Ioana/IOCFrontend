import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./acceptedStudents.css";

function AcceptedStudentsRequests() {
    const [students, setAcceptedStudents] = useState(null);
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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nume</th>
                        <th>Prenume</th>
                    </tr>
                </thead>
                <tbody>
                    {students &&
                        students.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default AcceptedStudentsRequests;