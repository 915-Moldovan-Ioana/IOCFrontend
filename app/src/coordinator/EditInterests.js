import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./editInterests.css";

function EditInterests() {
    const [coordinatorInterests, setCoordinatorInterests] = useState(null);
    const [oldCoordinatorInterests, setOldCoordinatorInterests] = useState(null);
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

    const handleButtonSave = newThemesInteres => {
        console.log('HEREEE', newThemesInteres)
        axios.put(`http://localhost:8080/coordonator/${id}`, newThemesInteres, {
            'headers': {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                //window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };
    const [isDisabled, setIsDisabled] = useState(true);

    function handleClick() {
        setIsDisabled(!isDisabled);
        if (coordinatorInterests) { setOldCoordinatorInterests(coordinatorInterests); }
        if (!isDisabled) {
            if (coordinatorInterests) { handleButtonSave(coordinatorInterests); }
            else {
                console.log(oldCoordinatorInterests);
                handleButtonSave(oldCoordinatorInterests);
                setCoordinatorInterests(oldCoordinatorInterests);
            }
        }
    }

    return (
        <div className="card infos">
            <div className="card-header">
                <h3>Informatii generale</h3>
                <p>Teme si interese</p>
            </div>
            <div className="card-body">
                <textarea
                    className="editTextarea"
                    maxLength={252}
                    disabled={isDisabled}
                    value={coordinatorInterests}
                    onChange={event => {
                        setCoordinatorInterests(event.target.value);
                    }
                    }
                ></textarea>
                <div>
                    <button onClick={handleClick} className="radius">
                        {isDisabled ? 'Editeaza' : 'Salveaza'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditInterests;