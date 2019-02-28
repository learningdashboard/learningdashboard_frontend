import React from 'react'
import './HomeView.css'
import SearchResultsList from '../components/SearchResultsList'
import {Button} from 'reactstrap'
import ResourceService from '../service/ResourceService';


export default class HomeView extends React.Component{

    constructor(props){
        super(props)

        this.state={resource:[]}

        this.clickAddResource=this.clickAddResource.bind(this)
        this.clickSearch=this.clickSearch.bind(this)
    }


    clickAddResource(){
        this.props.changeViewHandler("add")
    }

    clickSearch(){
        this.props.changeViewHandler("search")
    }


    async componentDidMount(){
        let resources = []
        try{
            resources = await ResourceService.getResourcesTop();
        }catch(e){
            console.log(e)
        }
        console.log(resources)
        this.setState({resources:resources});
    }
    
    render(){
        console.log(this.state.resources)
        return(
           <div className="container-fluid">
                
            <div className="row mt-4">
                {/*column for resources*/}
                <div className="col-12 col-md-7">
                 
                    <div className ="row mt-2 mb-3 justify-content-end">
                            <Button type="button" onClick={this.clickAddResource} className="add-button mr-2">Add a New Resource</Button>
                            <Button type="button" onClick={this.clickSearch} className="start-search-button">Search All Resources</Button>
                    </div>

                    <div className ="row mt-3">
                        <div className="col-12">
                            <h6>Recently added:</h6>
                            <SearchResultsList resources={this.props.resources}></SearchResultsList>
                        </div>
                    </div>
                </div>

                {/*column for other content*/}
                <div className="col-12 col-md-5">
                        
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <a className="btn btn-secondary" href="#" role="button">Test your knowledge with the Step Into Tech Quiz!</a>
                        </div>
                    </div>

                </div>
           
            </div>
        </div>

        )
    }
}
