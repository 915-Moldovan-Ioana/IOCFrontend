import React, { ChangeEvent, useContext, useState } from 'react'
import IdContext from "../login/IdContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function UploadPracticeDocument() {
    const [fileList, setFileList] = useState();
    const idctx = useContext(IdContext);
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileList(e.target.files);
    };

    const handleUploadClick = () => {
        if (!fileList) {
            return;
        }
        const data = []


        files.forEach(file => {

            data.push(file.name);
        });

        const user = idctx.idLogin;
        fetch('http://localhost:8080/coordonator/practiceDocument', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    "userId": user,
                    "fileList": data
                }
            ),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

        window.alert('Files uploaded!')
    };

    const files = fileList ? [...fileList] : [];

    return (
        <div className="div-1">
            <div className="col-sm-6 offset-sm-3">
                <input type="file" className="form-control" onChange={handleFileChange} multiple />

                <ul>
                    {files.map((file, i) => (
                        <li key={i}>
                            {file.name}
                        </li>
                    ))}
                </ul>

                <Button onClick={handleUploadClick} className="btn-primary">Upload</Button>
            </div>
        </div>
    );
}

export default UploadPracticeDocument;