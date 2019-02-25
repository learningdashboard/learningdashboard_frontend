import React from 'react'
import './SearchView.css'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import SearchResultList from '../components/SearchResultsList'

export default class SearchView extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            tagStatus: this.createTagStatusObject(),
            searchTags:[],
            searchResults:[]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

        console.log(this.state.checkBoxStatus)
    }

    createTagStatusObject(){
        let tagStatus = {}
        for(let i=0; i<this.props.taglist.length; i++){
            tagStatus[this.props.taglist[i]] = false
        }
        return tagStatus 
    }

    resetcheckBoxStatus(){
        let newTagStatus = this.state.tagStatus
        for(let i in newTagStatus ){
            newTagStatus[i] = false
        }
        this.setState({tagStatus:newTagStatus})
    }

    toggleTagStatus(tag){
        console.log(this.state.tagStatus)
        let newTagStatus = this.state.tagStatus
        newTagStatus[tag] = !newTagStatus[tag]
        console.log(newTagStatus)
        this.setState({tagStatus:newTagStatus})
    }

    getSelectedTags(){
        const selectedTags = []
        for(let tag in this.state.tagStatus){
            if(this.state.tagStatus[tag] == true){
                selectedTags.push(tag)
            }
        }
        return selectedTags
    }

    generateCheckBoxes(){
        const taglist = this.props.taglist
        const arrayOfTags = taglist.map((tag) =>   {let selectStatusClass = ""
                                                    if(this.state.tagStatus[tag]==true){
                                                        selectStatusClass = "selected"
                                                    }
                                                    return(
                                                    <div key={tag} className = "col-4 tag-text-size">
                                                        <button  type="button" id={tag} className={"badge badge-secondary " + selectStatusClass} onClick={this.handleClick}>{tag}</button>
                                                    </div>
                                                    )
                                                    }
                                        )      
        return arrayOfTags   
        
    }

    handleClick(event){
        event.preventDefault()
        this.toggleTagStatus(event.target.id)
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({searchTags:[]}) //reset list of search tags
        this.setState({searchTags:this.getSelectedTags()}) //set list of search tags to currently clicked boxes
        let searchResults = this.props.searchResourcesHandler(this.getSelectedTags()) //search
        this.setState({searchResults:searchResults}) //update state with new results
        this.resetcheckBoxStatus() //reset 
    }


    generateSearchTagList(){
        const searchTagList = this.state.searchTags.map((tag)=><span key={tag} className="tag-text-size" ><span className="badge tag-label">{tag}</span><span> </span></span>)
        return searchTagList
    }

    

    render(){
        return(
           <div className="container-fluid d-flex flex-column">

                {/*row for the search tags*/}
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h6 className="mt-3">Select Tags:</h6>
                        <Form onSubmit={this.handleSubmit}>
                            <div className="row">
                                {this.generateCheckBoxes()}
                            </div>
                            <div className="row mt-4 mb-5">
                                <div className = "col-4">
                                    <Button type="submit" className="search-button">Search</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>

                {/*row for the search results*/}
                <div className = "row results-background flex-grow-1">
                    <div className="col-12">
                        
                        {/*row for the serach tags*/}
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="mt-3"><span>{this.generateSearchTagList()} </span></div>
                            </div>
                        </div>

                        {/*row for the results*/}
                        <div className="row pt-2 justify-content-center">
                            <div className="col-10">
                                <SearchResultList resources={this.state.searchResults}></SearchResultList>
                            </div>
                        </div>

                    </div>
                </div>
           </div>
        )
    }
}
