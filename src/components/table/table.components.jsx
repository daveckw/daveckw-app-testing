import React from 'react';

const TableComponent = ({users, name, email, phoneNumber})=>(
    <div>
        <h2>{name} : {email} : {phoneNumber}</h2>
        <ul>
            {users.map(printOut)}
        </ul>
    </div> 
)

function printOut(user){
    return (
        <li>{user.name} : {user.email} : {user.phoneNumber}</li>
    )
}

export default TableComponent;
