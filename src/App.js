import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './layoutcomponents/CustomNavbar.js'
import HomeView from './viewcomponents/HomeView.js'
import AddResourceView from './viewcomponents/AddResourceView.js'
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
      tags:[]
    };
    this.changeViewHandler = this.changeViewHandler.bind(this)
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

  viewSwitcher(view){
    switch(view){
      case "home":
        return <HomeView changeViewHandler={this.changeViewHandler}></HomeView>
      case "add":
        return <AddResourceView changeViewHandler={this.changeViewHandler} addResourceHandler={this.addResourceHandler} taglist={this.state.tags}></AddResourceView> 
      case "course":
        return <CourseMaterialsView></CourseMaterialsView>
      case "search":
        return <SearchView taglist={this.state.tags}></SearchView>
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
