import React from "react";
import Table from "../components/Table/Table2";
import '../styles/history.css';
const History = () => {
    return(
        <div className="history">
            <h2>History</h2>

            <Table />       {/*imports the table2 component*/}
        </div>
    )
}


export default History;