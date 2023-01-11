import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import "./acceptedStudents.css";
import IdContext from "../login/IdContext";

function AcceptedStudents() {
    const [students, setAcceptedStudents] = useState(null);
    const [showDetails, showStudentDetails] = useState(false);
    const [studentDetails, setStudentDetails] = useState(null);
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

    return (
        <div className="main-container">
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
                                <tr key={student.id} >
                                    <td className="click" onClick={() => handleButtonClick(student)}>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                </tr>
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
        </div>

    );
}

export default AcceptedStudents;