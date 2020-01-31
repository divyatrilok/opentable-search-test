import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search';
import Results from './components/Results';

import { connect } from 'react-redux';
const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <header className={(this.props.restaurantsReducer && this.props.restaurantsReducer.restaurants) ? 'App-header small': 'App-header'}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App to talk to Opentable</h1>
          
        </header>
        <MuiThemeProvider>
        <div className="App-body">
              <Search />
              <Results />
            </div>
            </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);