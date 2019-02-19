import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './layoutcomponents/CustomNavbar.js'
import HomeView from './viewcomponents/HomeView.js'
import AddResourceView from './viewcomponents/AddResourceView.js'
import CourseMaterialsView from './viewcomponents/CourseMaterialsView.js'
import SearchResultsView from './viewcomponents/SearchResultsView.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view:"home"
    }
    this.changeViewHandler = this.changeViewHandler.bind(this)
  }

  changeViewHandler(view){
    this.setState({view:view})
  }

  viewSwitcher(view){
    switch(view){
      case "home":
        return <HomeView></HomeView>
      case "add":
        return <AddResourceView></AddResourceView> 
      case "course":
        return <CourseMaterialsView></CourseMaterialsView>
      case "search":
        return <SearchResultsView></SearchResultsView>
      default:
        console.log("no matching view...so returned to homeview")
        return <HomeView></HomeView>;
    }
  }


  render() {
    return (
      <div id="background" className = "d-flex flex-column vh-100"> 
        <CustomNavbar changeViewHandler={this.changeViewHandler}></CustomNavbar>
        <div className='flex-grow-1'>
          {this.viewSwitcher(this.state.view)}
        </div>
      </div>
    )
  }
}


export default App;
