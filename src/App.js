import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

<<<<<<< HEAD
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
=======
class App extends React.Component{
  state = {
    count: 0,
  }

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState(current => ({ 
      count: current.count - 1,
    }));
  };
  render(){
    return (
      <div>
        <h1>I'm class component {this.state.count}</h1>
        <button onClick = {this.add}>Add</button> &nbsp;&nbsp;&nbsp;
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  } 
>>>>>>> c6a2fb5b8a92bc81475a5b2387d9522e543b201b
}

export default App;