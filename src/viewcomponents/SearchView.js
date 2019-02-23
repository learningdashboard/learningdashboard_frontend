import React from 'react'
import './SearchView.css'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import SearchResultList from '../components/SearchResultsList'

export default class SearchView extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            checkBoxStatus: this.createCheckBoxStatusObject(),
            searchTags:[],
            searchResults:[]
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)

        console.log(this.state.checkBoxStatus)
    }

    createCheckBoxStatusObject(){
        let checkBoxStatus = {}
        for(let i=0; i<this.props.taglist.length; i++){
            checkBoxStatus[this.props.taglist[i]] = false
        }
        return checkBoxStatus 
    }

    resetcheckBoxStatus(){
        let checkBoxStatus = {}
        for(let i=0; i<this.props.taglist.length; i++){
            checkBoxStatus[this.props.taglist[i]] = false
        }
        this.setState({checkBoxStatus:checkBoxStatus})
    }

    getSelectedTags(){
        const selectedTags = []
        for(let tag in this.state.checkBoxStatus){
            if(this.state.checkBoxStatus[tag] == true){
                selectedTags.push(tag)
            }
        }
        return selectedTags
    }

    generateCheckBoxes(){
        const taglist = this.props.taglist
        const arrayOfCheckboxes = taglist.map((tag) =>
                                                    <div key={tag} className = "col-4">
                                                    <FormGroup check>
                                                         <Input id={tag} type="checkbox" onChange={this.onChange} checked={this.state.checkBoxStatus[tag]} />
                                                         <Label for={tag} check>{tag + ": "}</Label>
                                                    </FormGroup>  
                                                    </div>
                                             )      
        return arrayOfCheckboxes   
        
    }

    onChange(event){
        let newCheckBoxStatus = this.state.checkBoxStatus

        newCheckBoxStatus[event.target.id] = event.target.checked
    
        this.setState({checkBoxStatus:newCheckBoxStatus})
        
    }

    onSubmit(event){
        event.preventDefault()
        this.setState({searchTags:[]}) //reset list of search tags
        this.setState({searchTags:this.getSelectedTags()}) //set list of search tags to currently clicked boxes
        let searchResults = this.props.searchResourcesHandler(this.getSelectedTags()) //search
        this.setState({searchResults:searchResults}) //update state with new results
        this.resetcheckBoxStatus() //reset 
    }


    generateSearchTagList(){
        const searchTagList = this.state.searchTags.map((tag)=><span key={tag}>{tag+" "}</span>)
        return searchTagList
    }

    

    render(){
        return(
           <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h5 className="h5 mt-3">Select Tags:</h5>
                        <Form onSubmit={this.onSubmit}>
                            <div className="row">
                                {this.generateCheckBoxes()}
                            </div>
                            <div className="row">
                                <div className = "col-4">
                                    <Button type="submit" className="mt-3">Search</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <h5 className="h5">Search results for:</h5>
                        <p>{this.generateSearchTagList()}</p>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <SearchResultList resources={this.state.searchResults}></SearchResultList>
                    </div>
                </div>
           </div>
        )
    }
}
