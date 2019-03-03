import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './layoutcomponents/CustomNavbar.js'
import HomeView from './viewcomponents/HomeView.js'
import AddResourceView from './viewcomponents/AddResourceView.js'
import EditResourceView from './viewcomponents/EditResourceView.js'
import CourseMaterialsView from './viewcomponents/CourseMaterialsView.js'
import SearchView from './viewcomponents/SearchView.js'
import ResourceService from './service/ResourceService.js'


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


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      view:"home",
      tags:[],
      resource: {}
    };
    this.changeViewHandler = this.changeViewHandler.bind(this);
    this.setResource=this.setResource.bind(this);
  };

  async componentDidMount(){
    let taglist
    try{
        taglist = await ResourceService.getTags();
    }catch(e){
        console.log(e)
    }  

    this.setState({tags:taglist})

  }


  changeViewHandler(view){
    this.setState({view:view})
  }

  setResource(resource){
    this.setState({resource: resource});
  }

  viewSwitcher(view){
    switch(view){
      case "home":
        return <HomeView changeViewHandler={this.changeViewHandler} setResource={this.setResource}></HomeView>
      case "add":
        return <AddResourceView changeViewHandler={this.changeViewHandler} taglist={this.state.tags}></AddResourceView> 
      case "course":
        return <CourseMaterialsView></CourseMaterialsView>
      case "search":
        return <SearchView changeViewHandler={this.changeViewHandler} taglist={this.state.tags} setResource={this.setResource} ></SearchView>
      case "edit":
      return <EditResourceView changeViewHandler={this.changeViewHandler} taglist={this.state.tags} resource={this.state.resource}></EditResourceView>
      default:
        console.log("no matching view...so returned to homeview")
        return <HomeView changeViewHandler={this.changeViewHandler}></HomeView>;
    }
  }


  render() {
    return (
        <div>
        <CustomNavbar changeViewHandler={this.changeViewHandler}></CustomNavbar>
        {this.viewSwitcher(this.state.view)}
        </div>
    )
  }
}


export default App;
