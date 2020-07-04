import React from 'react';
import './App.css';


export interface loginButtons {
  registerButtonName: string
  loginButtonName: string}

function Header() {
  return (
    <div className="header grid">
      <div >1</div>
      <div >2</div>
      <div >
        <Login loginButtonName="Login" registerButtonName="Register" />
      </div>
    </div>
  );
}

function Login(props:loginButtons) {  
  return (
    <div className="header_registration_field">
      <div> <Time /> </div>
      <div>
        <ul className="fixed_list">
          <li className="registration_listElement" ><button>{props.registerButtonName}</button></li>
          <li className="registration_listElement"><button>{props.loginButtonName}</button></li>
        </ul>
      </div>
    </div>); }


export default Header;

function Time() {  
  var rawDate = new Date().toLocaleTimeString();
  var date = rawDate.substring(0, 8);
  return (<p className="date"> { date } </p>); };


setInterval(Time, 100);


