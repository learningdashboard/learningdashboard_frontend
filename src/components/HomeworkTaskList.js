import React from 'react';
import '../viewcomponents/HomeView.css';

class HomeworkTaskList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      homeworkTaskIntro: this.props.homeworkTaskIntro,
      homeworkTaskList: this.props.homeworkTaskList
    };
  };

  listItemsToRender() {
    const currentWeekTasks = this.state.homeworkTaskList;

    let taskListToRender = [];

    for (let li of currentWeekTasks) {
      taskListToRender.push(
        <li>{li}</li>)
    }

    return taskListToRender;

  };

  render() {

    return (
      <div>

        <p> {this.state.homeworkTaskIntro}
          <ul>
            {this.listItemsToRender()}
          </ul>
        </p>
      </div>
    )
  };


}// end of class

export default HomeworkTaskList