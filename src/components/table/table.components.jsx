import React from 'react';
import "./table.styles.scss"

const TableComponent = ({users, name, email, phoneNumber})=>(
    <div className='myDiv'>
       
        <ul className="myList-Group">
            {users.map(printOut)}
        </ul>
        <h2>{name} : {email} : {phoneNumber}</h2>
    </div> 
)

function printOut(user){
    return (
        <li className="myList-Item">{user.name} : {user.email} : {user.phoneNumber}</li>
    )
}

export default TableComponent;
