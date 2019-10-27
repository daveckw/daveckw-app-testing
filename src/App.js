import './App.css';
import React, { Component } from 'react';
import './App.css';
import firebase from './firebase/firebaseUtils'
import TableComponent from "./components/table/table.components"
import FormInput from './components/form-input/form-input.component';
import CustomButton from './components/custom-button/custom-button.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users : [],
      name: '',
      email: '',
      phoneNumber: ''
      

    };

  }

  componentDidMount() {
    testDB().then(returnUsers =>{
      let users = [];
      console.log('returnUsers:' + returnUsers);
      returnUsers.forEach(user => {
        console.log("user.name: "+ user.data().name);
        console.log("user.email: "+user.data().email);
        console.log("user.phoneNumber: "+user.data().phoneNumber);
        users.push({
          name: user.data().name,
          email: user.data().email,
          phoneNumber: user.data().phoneNumber
        })
      })
      console.log("User Array: " + JSON.stringify(users) )
      console.log("this.state.users: " + JSON.stringify(this.state.users));
      this.setState({users: users});
      console.log("this.state: "+JSON.stringify(this.state.users));
      
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    saveData({
      name: this.state.name, 
      email: this.state.email, 
      phoneNumber: this.state.phoneNumber
    });
    this.setState({ name: '', email: '', phoneNumber: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, ()=>{
      console.log("this.state: "+JSON.stringify(this.state));
    });
  };

  render() {
   
    return (
      <div className="App">
      <header className="App-header">
        <h1>Homepage</h1>
        <TableComponent 
          users={this.state.users} 
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}

        />

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='name'
            type='text'
            handleChange={this.handleChange}
            value={this.state.name}
            label='name'
            required
          />
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='phoneNumber'
            type='text'
            value={this.state.phoneNumber}
            handleChange={this.handleChange}
            label='Phone Number'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Add to FireStore </CustomButton>
            
          </div>
        </form>
      </header>
    </div>
      
    )
  }
}

async function testDB(){
  const db = firebase.firestore();
  let usersRef = await db.collection("users");
  console.log("usersRef: " + usersRef);
  let usersRefGet = await usersRef.get();
  console.log("usersRefGet: " + usersRefGet);
  console.log("usersRefGet.docs: "+ usersRefGet.docs);
  console.log(typeof usersRefGet.docs);
  usersRefGet.docs.forEach(doc =>{
    console.log("doc.name: " + doc.data().name);
  })
  return usersRefGet.docs;
  
}

async function saveData(userData){
  const db = firebase.firestore();
  db.collection("users").add(userData).then((savedData)=>{
    console.log("Data Saved!")
  }).catch((err)=>{
    console.log("Error in saving!")
  })
}


export default App;
