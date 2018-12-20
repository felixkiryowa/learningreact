import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }
    function getGreeting(user) {
      if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
      }
      return <h1>Hello, Stranger.</h1>;
    }
    // function tick() {
    //   const element = (
    //     <div>
    //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //     </div>
    //   );
    //   ReactDOM.render(element, document.getElementById('root'));
    // }

    // function handle_intervals(){
    //   setInterval(tick, 6000);
    // }
    
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
    
    const element = (
      <div>
         <h1>
          Hello, {formatName(user)}!
        </h1><hr></hr>
        <h5>
          Greetings from , {getGreeting()}
        </h5>
        {/* <h5>
            { handle_intervals()}
        </h5> */}
      </div>
    );
    
    return (
      <div className="App">
          
          {element}
         <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
