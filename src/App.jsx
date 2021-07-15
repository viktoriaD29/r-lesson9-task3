import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  createUser = (formData) => {
    console.log(formData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
