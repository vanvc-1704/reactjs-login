import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import TabGroup from  './components/TabGroup'
import Login from  './components/Login'

function DisplayTab(props) {
  if (props.isSignUp) {
    return <SignUp isSignUp = {props.isSignUp}/>;
  }

  return <Login isSignUp = {props.isSignUp}/>;  
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       isSignUp: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(isSignUp) {
    this.setState({
      isSignUp: isSignUp
    });
  }

  render() {
      return (
        <div className="form">
          <TabGroup isSignUp = {this.state.isSignUp}  handleClick = {this.handleClick}/>
          <div className="tab-content">
            <DisplayTab isSignUp = {this.state.isSignUp}/>
          </div>  
        </div> 
      )
  }
}

export default App;
