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
      email: '',
      password: ''
      

    };

  }

  componentDidMount() {
    testDB().then(returnUsers =>{
      let users = [];
      console.log('returnUsers:' + returnUsers);
      returnUsers.forEach(user => {
        console.log("user.name: "+ user.data().name);
        console.log("user.email: "+user.data().email);
        users.push({
          name: user.data().name,
          email: user.data().email
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

    this.setState({ email: '', password: '' });
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
          email={this.state.email}
          password={this.state.password}
        />

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            
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


export default App;
