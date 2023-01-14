import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import "./acords.css";
import IdContext from "../login/IdContext";
function TaskCompleted() {
    const [students, setStudents] = useState(null);
    const [tasks, setTasks] = useState([]);
    const idctx = useContext(IdContext);
    const id=idctx.idLogin;
    console.log(id);
    console.log(id);
    const ip="http://127.0.0.1:8887/";
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/studentsAcc/${id}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/tasks/${id}`)
            .then(response => {
                setTasks(response.data);
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
                    <th>Prenume</th>
                    <th>Nume</th>
                    <th>Task</th>
                    <th>Document trimis</th>
                </tr>
                </thead>
                <tbody>
                {students && tasks &&
                    tasks.map(task => {
                        console.log(task)
                        console.log(students)
                        const student = students.filter(a => task.studentTeacherid.studentId === a.id)[0];
                        return (
                            <tr key={student.id}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{task.message}</td>
                                <td>
                                    {task.documentUrls && (
                                        <a href={ip+task.documentUrls[0]} download>{task.documentUrls[0]}</a>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TaskCompleted;