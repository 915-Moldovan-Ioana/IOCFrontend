import React, {useEffect, useState} from 'react'
import axios from "axios";

function CoordinatorRequests() {
    const [students, setStudents] = useState(null);
    const [acords, setAcords] = useState(null);
    const id = 2;

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

    return (
        <div className=''>
            {students &&acords&& (
                <ul>
                    {students.map(student => {
                        const acord = acords.filter(a => a.id.studentId === student.id)[0];
                        return(
                            <li key={student.id}>{student.firstName}+{acord.documentUrl}</li>

                        )
                    })}
                </ul>
            )}

        </div>
    );
}

export default CoordinatorRequests;