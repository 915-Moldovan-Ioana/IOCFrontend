import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import IdContext from "../login/IdContext";
import axios from "axios";
import { RiContactsBookLine } from "react-icons/ri";

function Note() {
    const paperStyle = { padding: "50px 20px", margin: "20px auto" };
    const idctx = useContext(IdContext);
    const id = idctx.idLogin;
    const [info, setInfo] = useState(null);
    const [criteria,setCriteria]=useState(null);
    async function getInfo() {
        const response = await axios.get(
            `http://localhost:8080/student/${id}/criteria`
        );
        const responseData = await response.data;
        setInfo(responseData);
        console.log("response data ", responseData);
        console.log(info);
    }

    async function getInfo2() {
        const response = await axios.get(
            `http://localhost:8080/admins/global-details`
        );
        const responseData = await response.data.evaluationCriteria;
        setCriteria(responseData);
        console.log("response data ", responseData);
        console.log(info);
    }
    useEffect(() => {
        getInfo();
        getInfo2();
        console.log(info);
    }, []);

    // TODO: fetch news
    if (info != null) {

        if (info.reTakeGrade == null) {
            return (
                <>
                    <h1 align="center" style={{ color: "black" }}>
                        {" "}
                        Criteria:
                    </h1>
                    <h3 align="center" style={{ color: "black" }}>
                        {criteria}
                    </h3>

                    <h1 align="center" style={{ color: "black" }}>
                        {" "}
                        Grade:
                    </h1>
                    <h2 align="center" style={{ color: "black" }}>
                        {info.normalGrade}
                    </h2>
                </>
            );
        } else {
            return (

                <>
                    <h1 align="center" style={{ color: "black" }}>
                        {" "}
                        Criteria:
                    </h1>
                    <h3 align="center" style={{ color: "black" }}>
                        {criteria}
                    </h3>

                    <h1 align="center" style={{ color: "black" }}>
                        {" "}
                        Grade:
                    </h1>
                    <h2 align="center" style={{ color: "black" }}>
                        {info.normalGrade}
                    </h2>

                    <h1 align="center" style={{ color: "black" }}>
                        {" "}
                        Re Take Grade:
                    </h1>
                    <h2 align="center" style={{ color: "black" }}>
                        {info.reTakeGrade}
                    </h2>
                </>
            );
        }
    }
    return (
        <>
        </>
    );
}

export default Note;
