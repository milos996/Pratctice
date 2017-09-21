import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
              active : ""
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(activeTab){

      this.setState({
          active: activeTab
      });
    }

  render() {


    return (
     <div id="content">
        <ul id="navbar" className="nav nav-pills">
            <li className={(this.state.active == "") ? "active" : "" } > <Link to="/" > Home </Link> </li>
            <li className={(this.state.active == "about") ? "active" : "" }> <Link to="/about"> About </Link> </li>
            <li className={(this.state.active == "topics") ? "active" : "" }> <Link to="/topics"> Topics </Link> </li>
        </ul>

        <Route exact path="/" render={()=> <Home updateState={this.updateState} />} />
        <Route path="/about" render={()=> <About updateState={this.updateState} />}  />
        <Route path="/topics" render={(match)=> <Topics updateState={this.updateState} match={match} />}  />

      </div>
    );
  }
}


class Home extends React.Component{
  constructor(props){
    super(props);

    this.updateState = this.updateState.bind(this);
  }

  updateState(){
        this.props.updateState("");
  }

  componentWillMount(){
        this.updateState();
  }
render(){

    return(
      <h1> Home </h1>
    );
}
}


class About extends React.Component{

  constructor(props){
    super(props);

    this.updateState = this.updateState.bind(this);
  }

  updateState(){
        this.props.updateState("about");
  }


    componentWillMount(){
          this.updateState();
    }

  render(){

  return(
    <h1> About </h1>
  );
}
}

class Topic extends React.Component{
  constructor(props){
    super(props);
  }

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

  this.updateState = this.updateState.bind(this);
}

updateState(){

      this.props.updateState("topics");
}

  componentWillMount(){
        this.updateState();
  }

render(){
  var {match} = this.props.match;

  return(
        <div>
        <h2> Topics </h2>
        <ul>
          <li>
              <Link to={match.url + "/rendering"}>
                  Rendering with React
                </Link>
          </li>
          <li>
              <Link to={match.url + "/components"}>
                  Components
                </Link>
          </li>

          <li>
              <Link to={match.url + "/props-v-state"}>
                  Props v state
                </Link>
          </li>

        </ul>

        <Route path={match.url + "/:topicId"} component={Topic} />
        <Route exact path={match.url} render={()=>(
            <h3>Please select Topic </h3>
        )} />
        </div>

  );
}
  }
