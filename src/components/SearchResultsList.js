import React from 'react';
import Resource from './Resource'
import ResourceService from '../service/ResourceService';

/*******************************************************************************
<SearchResultList> -- state to control which SearchResult component is expanded
              -- props: results that is an array of resource JSON objects from database
  <SearchResult></SearchResult> -- props: key - to enable REACT to identify each SearchResult component
                                resource - a JSON object which contains all resource details as
                                          returned from server
                                clickHandler - calls toggle(result_id) to change state to
                                              which SearchResult is expanded
                                collapsed - property which controls if that SearchResult component is expanded

  <SearchResult></SearchResult>
  <SearchResult></SearchResult>
  .........
</SearchResultList>
*******************************************************************************/



//a component that holds all the search information and then passes this as props
//to a search_result component to be rendered
class SearchResultList extends React.Component {
  //constructor for the searchresultslist component so you can set initial state
  constructor(props) {
    super(props);
    //initially none of the search resources are expanded
    this.state = {
      openResource: null
    };

   
  }

  //function that stores which SearchResult is open (not collapsed)in the state openResult,
  //triggered when a SearchResult component is clicked to expand or collapse it. It receives
  //the id of the clicked Resource component
  toggle(id) {
    console.log(id)
    //if clicked SearchResult component is already open then set openResource  to null ..so all
    //SearchResult components will be collapsed
    if (this.state.openResource == id) {
      this.setState({ openResource: null })
    } else {
      //otherwise set the openResource state to the id of the clicked Resource component
      this.setState({ openResource: id })
    }

  }

 async handleDelete(resourceId) {
    await ResourceService.deleteResource(resourceId);
    
    //can't get list component to refresh
    alert("resource deleted" + resourceId);
  }



  //generate an array of Resource components to be rendered
  resultListOutput() {
    let resultListToRender = []

    for (let i = 0; i < this.props.resources.length; i++) {
      let resource = this.props.resources[i]
      let collapsed
      if (this.state.openResource == resource.resourceId) {
        collapsed = false;
      } else {
        collapsed = true;
      }
      //set a key for each element of the array...this helps React to identify which
      //components need to actually rerender when render is called
      resultListToRender.push(
      <Resource
        key={resource.resourceId}
        resource={resource}
        clickHandler={this.toggle.bind(this, resource.resourceId)}
        collapsed={collapsed}
        deleteHandler={this.handleDelete}>
        </Resource>)
    }
    return resultListToRender;
  }

 
  render() {
    return (
      <div className="">
        {this.resultListOutput()}
      </div>
    )
  }

}
export default SearchResultList
