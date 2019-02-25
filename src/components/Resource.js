import React from 'react';
import { Collapse, Button, CardBody, Card, CardTitle, CardSubtitle, CardHeader,
          CardText, ListGroup, ListGroupItem, CardLink} from 'reactstrap';
import './Resource.css'

/*Result component should have the following props:
  clickHandler...the method that gets called when result card is expanded
  result....this is a JSON resource object 
  collapsed....boolean that tells card whether it is collapsed or not
*/
class Resource extends React.Component{
  constructor(props) {
    super(props);
  }

  //function that takes the date string from the server and formats it into the
  //date style we want
  dateConverter(date){
    let options = {year:"2-digit",month:"2-digit", day:"2-digit"}
    return date.toLocaleString("en-GB", options)
  }


  render() {
    return (
      <div>
          {/*use reactstrap card, cardheader and cardbody components to create a
          bootstrap card*/}
          <Card className="mb-2">
            <CardHeader className="custom-card-header" onClick={this.props.clickHandler}>
              <h6 className="pl-0 pr-0 d-inline">{this.props.resource.title}</h6>
              <i className="fas fa-angle-down fa-lg d-inline float-right"></i>
            </CardHeader>
            {/*whichever parts you want to collapse put in a reactStrap Collapse component
             and just specify whethe the isOpen prop is true or fale to control collapse
              in this case we pass in whether the card should be collapsed as a prop*/}
            <Collapse isOpen={!this.props.collapsed}>
              <CardBody>
                    <div className="mb-1 text-muted"><em>Added on: {this.dateConverter(this.props.resource.dateAdded)} by {this.props.resource.userName}</em></div>
                    <div><p>{this.props.resource["description"]}</p></div>
                    <CardLink className="d-block" href="#">{this.props.resource.url}</CardLink>
              </CardBody>
            </Collapse>
          </Card>
      </div>
    );
  }
}

export default Resource
