import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [myName, setMyName] = useState('');
  const [myEmail, setMyEmail] = useState('');
  const [myContact, setMyContact] = useState('');

  const handleName = (e) => {
    setMyName(e.target.value);
  }

  const handleEmail = (e) => {
    setMyEmail(e.target.value);
  }

  const handleContact = (e) => {
    setMyContact(e.target.value);
  }

  return (
    // event listener - onClick, onChange, onSubmit
    <>
      <h2>
        {myName} {myEmail} {myContact}
      </h2>
      <form>
        <label>Name : </label>
        <input type="text" onChange={handleName} />
        <br/>

        <label>Email : </label>
        <input type="email" onChange={handleEmail}/>
        <br/>

        <label>Contact : </label>
        <input type="text" onChange={handleContact}/>
        <br/>

        <button type="button" onClick={() => {
          alert('Name : ${myName} Email : ${myEmail} Contact : ${myContact}');
        }}>Submit</button>
      </form>
    </>
  );
}

export default App;