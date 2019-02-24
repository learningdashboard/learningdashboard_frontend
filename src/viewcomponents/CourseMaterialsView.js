import React from 'react'
import './CourseMaterialsView.css'

export default class CourseMaterialsView extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            courseMaterials: [
                "JavaScript",
                "HTML",
                "React",
                "Tutorials"
            ]
        }
    }  

    render(){
        return(
           <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Course Materials</h1> 
                    {this.state.courseMaterials.map(materials => <h1>{materials}</h1>) }
                   </div>
                </div>
           </div>
        )
    }
}