import React, { Component } from 'react';
import './App.css';
import Layout from './layoutcomponents/Layout';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view:"home"
    }
  }

  render() {
    return (
        <Layout view={this.state.view}>


        </Layout>
    );
  }
}

export default App;
