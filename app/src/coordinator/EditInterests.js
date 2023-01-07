import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./editInterests.css";

function EditInterests() {
    const [coordinatorInterests, setCoordinatorInterests] = useState(null);
    const [newCoordinatorInterests, setNewCoordinatorInterests] = useState(null);
    const id = 1;
    useEffect(() => {
        axios.get(`http://localhost:8080/coordonator/interese/${id}`)
            .then(response => {
                setCoordinatorInterests(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // function handleEdit(event) {
    //     setCoordinatorInterests(event.target.value);
    // }

    return (
        <div className='infos'>
            <label for="fname">Infomatii generale: </label>
            {/* <input type="text" id="fname" name="fname" value={coordinatorInterests} onChange={handleEdit} />
            <button>
                 Save
            </button> */}

        </div>

    );
}

export default EditInterests;