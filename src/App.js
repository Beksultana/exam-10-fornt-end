import React, {Component, Fragment} from 'react';
import MainContainers from "./containers/MainContainers/MainContainers";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Comments from "./components/Comments/Comments";
import newNews from "./components/Comments/newPosts/newNews";

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
                  <Route path="/news/new" component={newNews}/>
                  <Route path="/comments" component={Comments}/>
              </Switch>
          </Container>
      </Fragment>
    );
  }
}

export default App;
