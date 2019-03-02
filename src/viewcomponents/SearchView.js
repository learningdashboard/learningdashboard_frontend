import React from 'react'
import './SearchView.css'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import SearchResultList from '../components/SearchResultsList'
import ResourceService from '../service/ResourceService'

export default class SearchView extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            tagStatus: [],
            searchTags:[],
            searchResults:[],
            taglist:this.createTagStatusObject()
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

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

    generateTagList(){
        const arrayOfTags = this.props.taglist.map((tag) =>   {let selectStatusClass = ""
                                                    if(this.state.tagStatus[tag]==true){
                                                        selectStatusClass = "selected"
                                                    }
                                                    return(
                                                    <div key={tag} className = "col-6 col-md-4 tag-text-size">
                                                        <button  type="button" id={tag} className={"badge badge-secondary " + selectStatusClass} onClick={this.handleClick}>{tag}</button>
                                                    </div>
                                                    )
                                                    })
        return arrayOfTags;
    }

    createTagStatusObject() {
        let tagStatus = {}
        for (let i = 0; i < this.props.taglist.length; i++) {
            tagStatus[this.props.taglist[i]] = false
        }
        return tagStatus
    }

    handleClick(event){
        event.preventDefault()
        console.log(event.target.id)
        this.toggleTagStatus(event.target.id)
    }

    async handleSubmit(event){
        event.preventDefault()
        this.setState({searchTags:[]}) //reset list of search tags
        this.setState({searchResults:[]})//reset search results

        let searchTags = this.getSelectedTags()
        console.log(searchTags)
        this.setState({searchTags:searchTags}) //set list of search tags to currently clicked boxes

        let searchResults
        try{
            searchResults = await ResourceService.search(searchTags)
        }catch(e){
            console.log(e)
        }

        this.setState({searchResults:searchResults}) //update state with new results
        this.resetcheckBoxStatus() //reset 
    }



    generateSearchTagList(){
        const searchTagList = this.state.searchTags.map((tag)=><span key={tag} className="tag-text-size" ><span className="badge tag-label">{tag}</span><span> </span></span>)
        return searchTagList
    }

    

    render(){
        return(
           <div className="container-fluid">

                {/*row for the search tags*/}
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h6 className="mt-3">Select Tags:</h6>
                        <Form onSubmit={this.handleSubmit}>
                            <div className="row">
                                {this.generateTagList()}
                            </div>
                            <div className="row mt-4">
                                <div className = "col-4">
                                    <Button type="submit" className="search-button">Search</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>

                {/*row for the search results*/}
                <div className = "mt-5 row border-top">
                    <div className="col-12">
                         
                        {/*row for the serach tags*/}
                        <div className="row mt-3 justify-content-center">
                            <div className="col-10">
                                <div className=""><span>{this.generateSearchTagList()} </span></div>
                            </div>
                        </div>

                        {/*row for the results*/}
                        <div className="row mt-4 justify-content-center">
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
