import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './layoutcomponents/CustomNavbar.js'
import HomeView from './viewcomponents/HomeView.js'
import AddResourceView from './viewcomponents/AddResourceView.js'
import CourseMaterialsView from './viewcomponents/CourseMaterialsView.js'
import SearchResultsView from './viewcomponents/SearchResultsView.js'

/* STATES:
 * view: this is a string which specifys which page view to render based on switch statement in viewSwitcherHandler()
 * 
 * resources: an array of resource objects as dummy data for front end
 * [
 * {
 * title: <string>,
 * description: <string>,
 * url: <string>,
 * userName: <string>,
 * dateAdded: <date>,
 * resourceTags: <array>
 * },
 * {...},
 * {...}
 * ]
 * 
 * tags: an array of strings which is the full list of available tags
 * [<string>, <string>]
 */

const dummyTaskList = [
  "JavaScript",
  "Conditionals",
  "Axios",
  "HTML",
  "AWS",
  "Arrays",
  "React",
  "Bootstrap",
  "mySQL",
  "Tutorials/Practice Exercises",
  "Loops",
  "JS Express",
  "CSS",
  "Testing/TDD",
  "Professional Development"
]


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view:"home",
      resources:[],
      tags: dummyTaskList
    }
    this.changeViewHandler = this.changeViewHandler.bind(this)
    this.addResourceHandler = this.addResourceHandler.bind(this)
  }

  addResourceHandler(resource){
    let newResourcesArray = this.state.resources;
    newResourcesArray.push(resource)
    this.setState({resources:newResourcesArray})
  }

  changeViewHandler(view){
    this.setState({view:view})
  }

  viewSwitcher(view){
    switch(view){
      case "home":
        return <HomeView changeViewHandler={this.changeViewHandler}></HomeView>
      case "add":
        return <AddResourceView addResourceHandler={this.addResourceHandler} taglist={this.state.tags}></AddResourceView> 
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
        <div className='d-flex flex-grow-1'>
          {this.viewSwitcher(this.state.view)}
        </div>
      </div>
    )
  }
}


export default App;
