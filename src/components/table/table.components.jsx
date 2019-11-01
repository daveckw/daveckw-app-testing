import React from 'react';
import "./table.styles.scss"
import firebase from '../../firebase/firebaseUtils'

class TableComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {};
    }

    handleClick(e) {
        const uid = e.target.getAttribute("data-index");
        const db = firebase.firestore();
        db.collection("users").doc(uid).delete().then(() => {
            console.log("User deleted");
            
        }).catch(err => {
            console.log("Error deleting data");
        })
        this.props.onDelete(uid);
    }

    render(){

    return(
    <div className="container-fluid ">
    <div className="d-flex justify-content-center table-responsive">
                <table className="table table-sm table-hover table-dark table-condensed">
        <thead className="">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {this.props.users.map((user, i)=>{
                return (
                <tr>
                    <td>{i}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td className="pointer" key={user.id} data-index={user.id} onClick={this.handleClick}>Delete</td>
                </tr>
                )
            })}
        </tbody>  
        </table>
        
    </div>
        <h2>{this.props.name} : {this.props.email} : {this.props.phoneNumber}</h2>
    </div>
    )
 }
}



export default TableComponent;
