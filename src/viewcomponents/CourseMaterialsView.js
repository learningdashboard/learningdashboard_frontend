import React from 'react'
import './CourseMaterialsView.css'
import {
    Collapse, Button, CardBody, Card, CardTitle, CardSubtitle, CardHeader,
    CardText, ListGroup, ListGroupItem, CardLink
} from 'reactstrap';

export default class CourseMaterialsView extends React.Component {
    constructor(props) {
        super(props);
        this.openBox = this.openBox.bind(this)

        this.state = {
            courseMaterials: [
                {
                    course: "JavaScript",
                    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/"
                },
                {
                    course: "HTML",
                    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML#Concept_and_syntax/"
                },
                {
                    course: "CSS",
                    url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS"
                },
                {
                    course: "SQL",
                    url: "https://www.khanacademy.org/computing/computer-programming/sql/"
                }
            ],
            isOpen: false
        }
    }

    openBox() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Course Materials</h1>
                        {this.state.courseMaterials.map(materials =>

                            <Card className="mb-2">
                                <CardHeader className="custom-card-header" onClick={this.openBox}>
                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="col-11">

                                                <h1>{materials.course}</h1>
                                            </div>

                                            <div className="col-1">
                                                <i className="fas fa-angle-down fa-lg float-right"></i>
                                            </div>
                                        </div>
                                    </div>

                                </CardHeader>
                                <Collapse isOpen={!this.state.isOpen}>
                                    <CardBody>
                                        <div className="mb-1 text-muted"><em>Resource</em></div>
                                        <div><p> 
                                    <CardLink className="d-block"><a href={materials.url} target="_blank">{materials.url}</a></CardLink>
                                        </p></div>
                                    </CardBody>
                                </Collapse>

                            </Card>

                        )}
                    </div>
                </div>
            </div>
        )
    }
}


//make each card independent dependant on topic
//make the cards components but identify its unique aspects 
// each card needs its own state = each the crds will need its own open/close function [independent]