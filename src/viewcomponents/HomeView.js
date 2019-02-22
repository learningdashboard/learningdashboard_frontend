import React from 'react'
import './HomeView.css'
import {Button, Card, CardHeader, CardBody,CardTitle,CardSubtitle,CardText,CardLink} from 'reactstrap'


export default class HomeView extends React.Component{
    render(){
        return(
           <div className="container-fluid m-2 d-flex flex-grow-1">
                <div className="row d-flex flex-grow-1">
                    <div className="col-7 bg-resources d-flex">
                        <div className="container-fluid mt-3">
                            <div className ="row mb-3 justify-content-end">
                                <div className="col-6 text-right">
                                    <Button className="add-button">Add a New Resource</Button>
                                </div>
                            </div>
                            <div className ="row">
                                <div className="col">
                                <Card>
                                    <CardHeader className="text-right"><Button size="sm">delete</Button></CardHeader>
                                    <CardBody>
                                        <CardTitle className="h5">Resource Title</CardTitle>
                                        <CardSubtitle className="h6 text-muted mb-2">added by: Nicola</CardSubtitle>
                                        <CardText>resource description</CardText>
                                        <CardLink href="#">resource link</CardLink>
                                        <Button className = "d-block mt-2 review-button" size="sm">Add Review</Button>
                                    </CardBody>
                                </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex">
                    </div>
                </div>
           </div>
        )
    }
}
