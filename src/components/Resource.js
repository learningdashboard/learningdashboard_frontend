import React from 'react';
import { Collapse, Button, CardBody, Card, CardTitle, CardSubtitle, CardHeader,
          CardText, ListGroup, ListGroupItem, CardLink} from 'reactstrap';
import './Resource.css'

/*Result component should have the following props:
  clickHandler...the method that gets called when result card is expanded
  resource....this is a JSON resource object 
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

  generateTagList(){
    const taglist = this.props.resource.resourceTags
    const arrayOfTags = taglist.map((tag) =>  <span key={tag} className="tag-text-size" ><span className="badge badge-secondary">{tag}</span><span> </span></span>)
    return arrayOfTags   
}


  render() {
    return (
      <div>
          {/*use reactstrap card, cardheader and cardbody components to create a
          bootstrap card*/}
          <Card className="mb-2">
            <CardHeader className="custom-card-header" onClick={this.props.clickHandler}>
              <div className="container-fluid">

                <div className="row align-items-center">
                  <div className="col-11">
                    
                    <div className="row">
                        <div className="col-12">
                          <h6 className="pl-0 pr-0 d-inline">{this.props.resource.title}</h6>
                        </div>
                    </div>

                    <div className="row mt-1">
                      <div className="col-12">
                        {this.generateTagList()}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <CardLink className="d-block"><a href={this.props.resource.url} target="_blank">Open resource</a></CardLink>
                        
                      </div>
                      <div className="col-4">
                        <CardLink className="d-block"><a href={this.props.resource.url} target="_blank">Delete resource</a></CardLink>
                      </div>
                      <div className="col-4">
                        <CardLink className="d-block"><a href={this.props.resource.url} target="_blank">Edit resource</a></CardLink>
                      </div>
                    </div>

                  </div>

                  <div className="col-1">
                    <p className="float-right">info</p>
                    <i className="fas fa-angle-down fa-lg float-right"></i>
                  </div>

                </div>
              </div>

              
            </CardHeader>
            {/*whichever parts you want to collapse put in a reactStrap Collapse component
             and just specify whethe the isOpen prop is true or fale to control collapse
              in this case we pass in whether the card should be collapsed as a prop*/}
            <Collapse isOpen={!this.props.collapsed}>
              <CardBody>
                    <div className="mb-1 text-muted"><em>Added on: {this.dateConverter(this.props.resource.dateAdded)} by {this.props.resource.userName}</em></div>
                    <div><p>{this.props.resource["description"]}</p></div>
                   
              </CardBody>
            </Collapse>
          </Card>
      </div>
    );
  }
}

export default Resource
