import React from 'react';

const TableComponent = ({users, email, password})=>(


    
    <div>
        <h2>{email} : {password}</h2>
        <h2>{JSON.stringify(users)}</h2>
        <ul>
            {users.map(printOut)}
        </ul>
    </div>
    
)

function printOut(user){
    return (
        <li>{user.name} : {user.email}</li>
    )
}

export default TableComponent;
