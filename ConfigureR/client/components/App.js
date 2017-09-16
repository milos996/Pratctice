import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class App extends React.Component {
  render() {
    return (
     <div>
        <ul className="nav nav-tabs">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/about"> About </Link> </li>
            <li> <Link to="/topics"> Topics </Link> </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />

      </div>
    );
  }
}


function Home(props){
    return(
      <h1> Home </h1>
    );
}


function About(props){
  return(
    <h1> About </h1>
  );
}

function Topics(props){
  return(
    <h1> Topics </h1>
  );
}
