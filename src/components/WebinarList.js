import React from 'react';
import '../viewcomponents/HomeView.css';

class WebinarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      webinars: this.props.webinars
    };
  };


  webinarListOutput() {
    const currentWeekMaterials = this.state.webinars;

    let webinarListToRender = [];

    if (currentWeekMaterials.length >= 1) {

    for (let link of currentWeekMaterials) {
      webinarListToRender.push(
        <div>
          <a href={link} target="blank">
            <i className="fas fa-external-link-alt fa-1x"></i> access course material</a>
        </div>
      );
    }
    } else {
      webinarListToRender.push(
        <div>
          <p><i className="fas fa-external-link-alt fa-1x"></i> nothing here this week!</p>
        </div>)
    }

      return webinarListToRender;
    
  };

  render() {


    return (
      <div>
        {this.webinarListOutput()}
      </div>
    )
  };


}// end of class

export default WebinarList