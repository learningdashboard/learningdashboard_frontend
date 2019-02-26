import React from 'react'
import './CourseMaterialsView.css'

export default class CourseMaterialsView extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            courseMaterials = [
                {
                    course: "JavaScript",
                    resource: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript", 
                    tutorial: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"
                },
                {
                    course:"HTML",
                    resource: "https://developer.mozilla.org/en-US/docs/Glossary/HTML#Concept_and_syntax",
                    tutorial: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
                },
                {
                    course: "CSS", 
                    resource: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
                    tutorial: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
                }
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