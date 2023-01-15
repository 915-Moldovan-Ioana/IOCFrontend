import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from "axios";


function AdminAddAccountsWithFile() {
    const [fileList, setFileList] = useState();
    const [outputMessage, setOutputMessage] = useState();

    const paperStyle = {padding: '50px 20px', margin: "20px auto"}

    const onChangeHandler = event => {
        setFileList(event.target.files[0]);
        console.log(event.target.files[0]);
    };

    const onClickHandler = () => {
        const data2 = new FormData()
        data2.append('file', fileList)
        axios({
            method: 'post',
            url: "http://localhost:8080/admins/accounts",
            headers: {"Content-Type": "multipart/form-data"},
            data: data2

        }).then(r => {
            console.log(r);
            setOutputMessage(r.data)
        });
    }

    return (<Paper elevation={3} style={paperStyle}>
        <h1 style={{color: "black",}}>Adaugare conturi</h1>
        <input onChange={onChangeHandler} type="file" className="form-control" multiple/>

        <h2>{outputMessage}</h2>


        <Button onClick={onClickHandler} sx={{
            color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)'
        }}>Upload</Button>

    </Paper>)
}

export default AdminAddAccountsWithFile;
