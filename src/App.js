import React, {Component, Fragment} from 'react';
import MainContainers from "./containers/MainContainers/MainContainers";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import NewPost from "./components/NewPost/NewPost";
import Comments from "./components/Comments/Comments";

class App extends Component {
  render() {
    return (
      <Fragment>
          <header>
              <Toolbar/>
          </header>
          <Container style={{marginTop: '20px'}}>
              <Switch>
                  <Route path="/" exact component={MainContainers}/>
                  <Route path="/news/new" exact component={NewPost}/>
                  <Route path="/comments" exact component={Comments}/>
              </Switch>
          </Container>
      </Fragment>
    );
  }
}

export default App;
