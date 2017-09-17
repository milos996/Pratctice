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
            <li > <Link to="/"> Home </Link> </li>
            <li > <Link to="/about"> About </Link> </li>
            <li > <Link to="/topics"> Topics </Link> </li>
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

class Topic extends React.Component{

  render(){

    return(
      <div>
      <h3>{this.props.match.params.topicId} </h3>
      </div>
    );
}
}

class Topics extends React.Component{

  constructor(props){
    super(props);
  }

render(){
  return(
        <div>
        <h2> Topics </h2>
        <ul>
          <li>
              <Link to={this.props.match.url + "/rendering"}>
                  Rendering with React
                </Link>
          </li>
          <li>
              <Link to={this.props.match.url + "/components"}>
                  Components
                </Link>
          </li>

          <li>
              <Link to={this.props.match.url + "/props-v-state"}>
                  Props v state
                </Link>
          </li>

        </ul>

        <Route path={this.props.match.url + "/:topicId"} component={Topic} />
        <Route exact path={this.props.match.url} render={()=>(
            <h3>Please select Topic </h3>
        )} />
        </div>

  );
}
  }
