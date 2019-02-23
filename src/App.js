import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './layoutcomponents/CustomNavbar.js'
import HomeView from './viewcomponents/HomeView.js'
import AddResourceView from './viewcomponents/AddResourceView.js'
import CourseMaterialsView from './viewcomponents/CourseMaterialsView.js'
import SearchView from './viewcomponents/SearchView.js'

/* STATES:
 * view: this is a string which specifys which page view to render based on switch statement in viewSwitcherHandler()
 * 
 * resources: an array of resource objects as dummy data for front end
 * [
 * {
 * id:<number>
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

const dummyTagList = [
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

const dummyResourceList = [
  {"id":0,
   "title":"test1",
   "description":"test description",
   "url":"testurl",
   "userName":"Nicola",
   "dateAdded": new Date(2019,1,1),
   "resourceTags":["JavaScript"]},
   {"id":1,
   "title":"test2",
   "description":"test description",
   "url":"testurl2",
   "userName":"Nicola",
   "dateAdded": new Date(2019,1,1),
   "resourceTags":["JavaScript","Loops"]},
   
]

let uniqueId=2;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view:"home",
      resources:dummyResourceList,
      tags: dummyTagList
    }
    this.changeViewHandler = this.changeViewHandler.bind(this)
    this.addResourceHandler = this.addResourceHandler.bind(this)
    this.searchResourcesHandler = this.searchResourcesHandler.bind(this)
  }

  addResourceHandler(resource){
    resource.id = uniqueId
    uniqueId ++

    let newResourcesArray = this.state.resources;
    newResourcesArray.push(resource)
    this.setState({resources:newResourcesArray})
    console.log(this.state.resources)
  }

  searchResourcesHandler(taglist){
    
    return this.state.resources.filter(
      (resource)=>
          {for(let i=0; i<taglist.length;i++){
            if(resource.resourceTags.includes(taglist[i])){
              return true
            }
          }}
    )
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
        return <SearchView taglist={this.state.tags} searchResourcesHandler={this.searchResourcesHandler}></SearchView>
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
