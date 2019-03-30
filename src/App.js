import React, {Component, Fragment} from 'react';
import MainContainers from "./containers/MainContainers/MainContainers";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";

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
              </Switch>
          </Container>
      </Fragment>
    );
  }
}

export default App;
