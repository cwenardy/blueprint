import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";

class App extends React.Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#0442a5',
        },
        secondary: {
          main: '#ea6b04',
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} title="Home" menu="/"/>
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
