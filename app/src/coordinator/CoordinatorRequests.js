import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import "./acords.css";
import IdContext from "../login/IdContext";
function CoordinatorRequests() {
    const [students, setStudents] = useState(null);
    const [acords, setAcords] = useState([]);
    const [locuri,setLocuri]=useState(null);
    const idctx = useContext(IdContext);
    const id=idctx.idLogin;
    console.log(id);
    const ip="http://127.0.0.1:8887/";
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/students/${id}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/acord/${id}`)
            .then(response => {
                setAcords(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/${id}`)
            .then(response => {
                setLocuri(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const handleButtonClick = student => {
        axios.post('http://localhost:8080/coordonator/accept', { studentId: student.id,teacherId:id })
            .then(() => {
                window.location.reload();
                idctx.setIdLogin(id.id);
                idctx.setRole("coordonator");
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            {acords && <p>Numar cereri: {acords.length}</p>}
            {locuri && <p>Locuri libere: {locuri}</p>}
        <table>
            <thead>
            <tr>
                <th>Prenume</th>
                <th>Nume</th>
                <th>Acord</th>
                <th>Acceptare cerere</th>
            </tr>
            </thead>
            <tbody>
            {students &&
                students.map(student => {
                    const acord = acords.filter(a => a.id.studentId === student.id)[0];
                    return (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>
                                {acord.documentUrl && (
                                    <a href={ip+acord.documentUrl} download>Download</a>
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleButtonClick(student)}>
                                    Accepta cerere
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
}

export default CoordinatorRequests;