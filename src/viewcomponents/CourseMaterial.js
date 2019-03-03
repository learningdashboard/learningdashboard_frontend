import React from 'react'
import {
    Collapse, CardBody, Card, CardHeader, CardLink, Input
} from 'reactstrap';

class CourseMaterial extends React.Component {
    constructor(props) {
        super(props);
        this.openBox = this.openBox.bind(this)

        this.state = {
            isOpen: false
        }
    }

    openBox() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <Card className="mb-2" key={this.props.index}>
                <CardHeader className="custom-card-header" >
                    <div className="container-fluid" onClick={this.openBox}>
                        <div className="row align-items-center">
                            <div className="col-11">
                                <h1>{this.props.material.weekNumber}</h1>
                            </div>

                            <div className="col-1">
                                <i className="fas fa-angle-down fa-lg float-right"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                </CardHeader>

                <Collapse isOpen={this.state.isOpen}>
                    <CardBody>
                        <div className="mb-1 text-muted"><em>Resources</em></div>
                        <div>
                            {this.props.material.lectureUrls.map(url =>
                                <div key={this.props.material.weekNumber + url}>
                                    Lectures: <CardLink href={url} className="d-block">{url}</CardLink>
                                    <br></br>
                                </div>
                            )}
                            <div>
                                Slides: <CardLink href={this.props.material.slides} className="d-block">{this.props.material.slides}</CardLink>
                                <br></br>
                            </div>
                        </div>
                    </CardBody>
                </Collapse>

            </Card>
        )
    }
}
export default CourseMaterial;

