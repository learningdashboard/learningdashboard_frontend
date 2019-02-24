import React from 'react';
import { Collapse, Button, CardBody, Card, CardTitle, CardSubtitle, CardHeader,
          CardText, ListGroup, ListGroupItem, CardLink} from 'reactstrap';

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
            <CardHeader onClick={this.props.clickHandler}>
              <p className="pl-0 pr-0 d-inline">{this.props.resource.title}</p>
              <i className="fas fa-angle-down fa-lg d-inline float-right"></i>
            </CardHeader>
            {/*whichever parts you want to collapse put in a reactStrap Collapse component
             and just specify whethe the isOpen prop is true or fale to control collapse
              in this case we pass in whether the card should be collapsed as a prop*/}
            <Collapse isOpen={!this.props.collapsed}>
              <CardBody>
                  <CardText className="mb-2">
                    <span>{this.props.resource["description"]}</span>
                    <br/>
                    <span><strong>Added on:</strong>{this.dateConverter(this.props.resource.dateAdded)}</span>
                    <br/>
                    <span><strong>Added by:</strong>{this.props.resource.userName}</span>
                    <CardLink className="d-block" href="#">{this.props.resource.url}</CardLink>
                  </CardText>
              </CardBody>
            </Collapse>
          </Card>
      </div>
    );
  }
}

export default Resource
