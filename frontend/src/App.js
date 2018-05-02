import React, { Component } from 'react';
import './App.css';
import * as API from "./utils/api.js";
import CategoryNav from "./components/CategoryNav";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


class App extends Component {

    state = {
        posts: []
    };


    render() {
        return (
          <MuiThemeProvider>
            <div className="App">
              <h1>Readable</h1>
              <CategoryNav />


            </div>
          </MuiThemeProvider>
        );
      }
    }
export default App;
