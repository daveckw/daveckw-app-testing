import React from 'react';
import "./table.styles.scss"

const TableComponent = ({users, name, email, phoneNumber})=>(
    <div className="container-fluid">
    <div className="d-flex justify-content-center">
            <table className="table table-sm table-hover table-dark table-condensed w-auto">
        <thead className="">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {users.map(printOut)}
        </tbody>  
        </table>
        
    </div>
        <h2>{name} : {email} : {phoneNumber}</h2>
    </div>
)

function printOut(user, i){
    return (
        <tr>
            <td>{i}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
        </tr>
    )
}

export default TableComponent;
