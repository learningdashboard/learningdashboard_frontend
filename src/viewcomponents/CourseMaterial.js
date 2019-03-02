import React from 'react'
import {
    Collapse, CardBody, Card, CardHeader, CardLink
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
                <CardHeader className="custom-card-header" onClick={this.openBox}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-11">
                                <h1>{this.props.materials.course}</h1>
                            </div>

                            <div className="col-1">
                                <i className="fas fa-angle-down fa-lg float-right"></i>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <Collapse isOpen={this.state.isOpen}>
                    <CardBody>
                        <div className="mb-1 text-muted"><em>Resource</em></div>
                        <div>
                            {this.props.materials.urls.map(url =>
                                <div key={this.props.materials.course + url}>
                                    <CardLink href={url} className="d-block">{url}</CardLink>
                                    <br></br>
                                </div>
                            )}
                        </div>
                    </CardBody>
                </Collapse>

            </Card>
        )
    }
}
export default CourseMaterial;

