import React, { Component } from 'react';

class FamousPerson extends Component { 

  state = {
    user: {
      name: '',
      role: ''
    }
  }

   handleChangeFor = (propertyName) => {
     return (event) => {
       this.setState({
         user: {
           ...this.state.user,
           [propertyName]: event.target.value
         }
       });
     }
   }


  render() {
    return (
      <div className="App">
         <label for="name">Name:</label>
        <input onChange={ this.handleChangeFor('name') } />
        <br/>
        <label for="role">Role:</label>
        <input onChange={ this.handleChangeFor('role') } />
        <br/>
        <h1>Added Famous People:</h1>
        <p>{this.state.user.name} is famous for {this.state.user.role}</p>
      </div>
    );
  }
}

export default FamousPerson;
