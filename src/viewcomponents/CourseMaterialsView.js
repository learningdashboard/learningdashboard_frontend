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
                    urls: ["https://drive.google.com/file/d/19IBL7aZZrBr1weP1A3qCT36e56DzW2uA/view?usp=sharing/"]
                },
                {
                    course: "Responsive Design",
                    urls: ["https://drive.google.com/file/d/1aXhMP5FQ1bYQVDOx_13Lwacgy54pbd5T/view?usp=sharing",
                        "https://drive.google.com/file/d/1jk8QOhPuDUGQrKRe02KNlqm7CN7C_XF6/view?usp=sharing",
                        "https://drive.google.com/file/d/1KmmwiHm0EWQWCxVquCoV2QY0U6m-ecCS/view?usp=sharing"]
                },
                {
                    course: "Axios",
                    urls: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"]
                },
                {
                    course: "Serverless Requests",
                    urls: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing",
                        "https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing",
                        "https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing",
                        "https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing",
                        "https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"
                    ]
                },
                {
                    course: "SQL",
                    urls: ["https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing",
                        "https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"]
                },
                {
                    course: "React",
                    urls: ["https://drive.google.com/file/d/18h04-lEuc9BCI9bZEjxJyF2hyJvRghLv/view?usp=sharing",
                        "https://drive.google.com/file/d/17cAc18taaaf3Ga34FoblCv29vgD58ELo/view?usp=sharing",
                        "https://drive.google.com/file/d/1lGR_fBm-w6Mjj3y3uFpjo8R4iyWKEIc6/view?usp=sharing",
                        "https://drive.google.com/file/d/1_hlktJFqvNBCBJiqryhL3gmxytZSvZvY/view?usp=sharing",
                        "https://drive.google.com/file/d/1BOKC9hp2CLC4ZmCdxPzfnXhRj8PrDdC3/view?usp=sharing",
                        "https://drive.google.com/file/d/1WjflDVJZVtU9Ax0X4k9enz547ouLTskK/view?usp=sharing",
                        "https://drive.google.com/file/d/13Ueo0dlbQuru0UpqmELTksIND5zP2Ccl/view?usp=sharing",
                        "https://drive.google.com/file/d/1PKoUG3nNilRioaDVxheHRqycmDc--0Ir/view?usp=sharing"]
                },
                {
                    course: "Professional Development",
                    urls: ["https://drive.google.com/file/d/1RoDOrLgx46R4B-_hWIRujfQp28tS9yka/view?usp=sharing"]
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
                                            <CardLink className="d-block">
                                                {materials.urls.map(url =>
                                                <div>
                                                 <a href={url} target="_blank">{url}</a>
                                                 <br></br>
                                                </div>
                                                )}
                                            </CardLink>
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
//change URL sources to  googledocs 