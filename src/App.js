import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './layoutcomponents/CustomNavbar.js'
import HomeView from './viewcomponents/HomeView.js'
import AddResourceView from './viewcomponents/AddResourceView.js'
import EditResourceView from './viewcomponents/EditResourceView.js'
import CourseMaterialsView from './viewcomponents/CourseMaterialsView.js'
import SearchView from './viewcomponents/SearchView.js'
import ResourceService from './service/ResourceService.js'


/* STATES:
 * view: this is a string which specifys which page view to render based on switch statement in viewSwitcherHandler()
 * 
 * resources: an array of resource objects as dummy data for front end
 * [
 * {
 * id:<number>
 * title: <string>,
 * description: <string>,
 * url: <string>,
 * userName: <string>,
 * dateAdded: <date>,
 * resourceTags: <array>
 * },
 * {...},
 * {...}
 * ]
 * 
 * tags: an array of strings which is the full list of available tags
 * [<string>, <string>]
 */

const courseMaterials =
  [
    {
      weekNumber: 3,
      topic: "CSS",
      slides: ["https://drive.google.com/open?id=1rw3l9oH103CA4_N4RK_R4J7_RkFAB5bL"],
      lectureWebinar: ["https://drive.google.com/file/d/19IBL7aZZrBr1weP1A3qCT36e56DzW2uA/view?usp=sharing/"],
      homeworkWebinar: [],
      homeworkTaskIntro: "Utilise your wireframe and the sections/names you identified, in order to:",
      homeworkTaskList: [
        "Update your HTML to use ID’s and Classes where necessary",
        "Style your ToDo list"
      ],
      currentWeek: false
    },
    {
      weekNumber: 4,
      topic: "Responsive Design",
      slides: "https://drive.google.com/open?id=1sLds0SnNebkFeye1srCxP6NvNyFjtnO6",
      lectureWebinar: ["https://drive.google.com/file/d/1aXhMP5FQ1bYQVDOx_13Lwacgy54pbd5T/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/1jk8QOhPuDUGQrKRe02KNlqm7CN7C_XF6/view?usp=sharing"],
      homeworkTaskIntro: "The following to be completed on your week-002-html repository",
      homeworkTaskList: ["Include the Bootstrap CSS in your HTML file",
        "Read up on the complete guide to a flex box",
        "Read up on the Bootstrap Grid System",
        "Convert the <table> you have used for your ‘ToDo’ list to be a grid instead",
        "Explore more Bootstrap components, such as buttons, forms and badges"
      ],
      currentWeek: true

    },
    {
      weekNumber: 5,
      topic: "Visual Studio Code Debugging",
      slides: "https://drive.google.com/open?id=1M6bKMf8xVkJUSFC42jZUeamzlHrRZPw6",
      lectureWebinar: ["no lecture recording this week."],
      homeworkWebinar: ["https://drive.google.com/file/d/1KmmwiHm0EWQWCxVquCoV2QY0U6m-ecCS/view?usp=sharing"],
      homeworkTaskIntro: "Nothing here this week!",
      homeworkTaskList: ["Creating your own personal GitHub Repo - starting a project from new!",
        "Watch 2 webinars on React",
        "Creating and running your own React application"],
      currentWeek: false
    },
    {
      weekNumber: 6,
      slides: "https://drive.google.com/open?id=10CR_MS46CFrmXGgtQcIcWl9Zjy6-BiPy",
      topic: "React - Part 1",
      lectureWebinar: ["https://drive.google.com/file/d/1lGR_fBm-w6Mjj3y3uFpjo8R4iyWKEIc6/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/18h04-lEuc9BCI9bZEjxJyF2hyJvRghLv/view?usp=sharing",
        "https://drive.google.com/file/d/17cAc18taaaf3Ga34FoblCv29vgD58ELo/view?usp=sharing"],
      homeworkTaskIntro: "Complete the following tasks:",
      homeworkTaskList: ["Finish off porting over your index.html in to your React application",
        "Watch the next React webinar",
        "Implement one action for adding a task"],
      currentWeek: false
    },
    {
      weekNumber: 7,
      slides: "https://drive.google.com/open?id=18ltTaVDJ8sHHPA4wqppCY-2tlJoUuK1u",
      topic: "React - Part 2",
      lectureWebinar: ["https://drive.google.com/file/d/1BOKC9hp2CLC4ZmCdxPzfnXhRj8PrDdC3/view?usp=sharing",
        "https://drive.google.com/file/d/1WjflDVJZVtU9Ax0X4k9enz547ouLTskK/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/1_hlktJFqvNBCBJiqryhL3gmxytZSvZvY/view?usp=sharing",
        "https://drive.google.com/file/d/13Ueo0dlbQuru0UpqmELTksIND5zP2Ccl/view?usp=sharing",
        "https://drive.google.com/file/d/1PKoUG3nNilRioaDVxheHRqycmDc--0Ir/view?usp=sharing"],
      homeworkTaskIntro: "Completion of your React ToDo list: (homework for next two weeks)",
      homeworkTaskList: ["Styled using using either component styles or CSS files (or both)",
        "Responsive elements (Bootstrap Grid)",
        "Ability to ‘Add’ a task",
        "Ability to ‘Delete’ a task",
        "Ability to ‘Mark Complete’ a task",
        "Add your own information to the README file"],
      currentWeek: false
    },
    {
      weekNumber: 8,
      slides: "https://drive.google.com/open?id=1L-ZEx928Gt9JZGv3RQndOsra-ZYbeN8e",
      topic: "cloud",
      lectureWebinar: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
      homeworkWebinar: [],
      homeworkTaskIntro: "Completion of your React ToDo list:",
      homeworkTaskList: ["Styled using using either component styles or CSS files (or both)",
        "Responsive elements (Bootstrap Grid)",
        "Ability to ‘Add’ a task",
        "Ability to ‘Delete’ a task",
        "Ability to ‘Mark Complete’ a task",
        "Add your own information to the README file"],
      currentWeek: false
    },
    {
      weekNumber: 9,
      slides: "https://drive.google.com/open?id=1wNuZybTCSTkleFy_aHseV_E5-00KGQBd",
      topic: "Introduction to Databases",
      lectureWebinar: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/1H6iPLxSrWLjACwnou5DJAPfWa4mCCXb_/view?usp=sharing"],
      homeworkTaskIntro: "Complete the following tasks:",
      homeworkTaskList: ["Respond to email regarding AWS account",
        "Complete React application (Don't forget the README)",
        "Have some form of 1 to 1 with James (Zoom, In Person, Over slack chat)"],
      currentWeek: false
    },
    {
      weekNumber: 10,
      slides: "https://drive.google.com/open?id=1WOaX5D6EnWm7eMjviCJbDu2GtCQT6Iic",
      topic: "Serverless - AWS and Lambda",
      lectureWebinar: ["https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing"],
      homeworkTaskIntro: "Update your function to return an array of tasks:",
      homeworkTaskList: ["It does NOT have to query database yet", "Think back to the example array of books"],
      currentWeek: false
    },
    {
      weekNumber: 11,
      slides: "https://drive.google.com/open?id=1_TK0618aFpmLnvPu6G_UsSFxEPmPtxsO",
      topic: "Serverless - Connection to Database",
      lectureWebinar: ["https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"],
      homeworkTaskIntro: "Complete the following tasks:",
      homeworkTaskList: ["(Optional) Think of any app ideas for the project weeks and prepare a quick 1-2 min brief",
        "Watch the webinar called Week 010 - Postman usage and further serverless request method handlers",
        "Implement the handlers for creating tasks, deleting tasks and updating tasks",
        "Update those handlers to execute SQL"],
      currentWeek: false
    },
    {
      weekNumber: 12,
      slides: "https://drive.google.com/open?id=1ypRbSOH6WMo2b-lKq1DGpZ5ZhXiEftKJ",
      topic: "Calling API from React",
      lectureWebinar: ["https://drive.google.com/file/d/1RoDOrLgx46R4B-_hWIRujfQp28tS9yka/view?usp=sharing"],
      homeworkWebinar: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
      homeworkTaskIntro: "Complete the following tasks:",
      homeworkTaskList: ["Hook up your application frontend / backend",
        "Meet with your project team",
        "Prep CV as per Beckie’s webinar"],
      currentWeek: false
    }
  ]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: "home",
      tags: [],
      resource: {},
      courseMaterials: courseMaterials
    };
    this.changeViewHandler = this.changeViewHandler.bind(this);
    this.setResource = this.setResource.bind(this);
    this.setCurrentWeek = this.setCurrentWeek.bind(this);
  };

  async componentDidMount() {
    let taglist
    try {
      taglist = await ResourceService.getTags();
    } catch (e) {
      console.log(e)
    }

    this.setState({ tags: taglist })

  }

  setResource(resource) {
    this.setState({ resource: resource });
  }

  setCurrentWeek(weekNumber) {
    for (let i = 0; i < courseMaterials.length; i++) {
      if (courseMaterials[i].weekNumber == weekNumber) {
        courseMaterials[i].currentWeek = true
      } else {
        courseMaterials[i].currentWeek = false
      }
    }
  }

  changeViewHandler(view) {
    this.setState({ view: view })
  }

  viewSwitcher(view) {
    switch (view) {
      case "home":
        return <HomeView courseMaterials={this.state.courseMaterials} changeViewHandler={this.changeViewHandler}
          setResource={this.setResource}></HomeView>
      case "add":
        return <AddResourceView changeViewHandler={this.changeViewHandler} taglist={this.state.tags}></AddResourceView>
      case "course":
        return <CourseMaterialsView setCurrentWeek={this.setCurrentWeek}
          courseMaterials={this.state.courseMaterials}></CourseMaterialsView>
      case "search":
        return <SearchView changeViewHandler={this.changeViewHandler} taglist={this.state.tags}
          setResource={this.setResource} ></SearchView>
      case "edit":
        return <EditResourceView changeViewHandler={this.changeViewHandler} taglist={this.state.tags}
          resource={this.state.resource}></EditResourceView>
      default:
        console.log("no matching view...so returned to homeview")
        return <HomeView changeViewHandler={this.changeViewHandler}></HomeView>;
    }
  }

  render() {
    return (
      <div>
        <CustomNavbar changeViewHandler={this.changeViewHandler}></CustomNavbar>
        {this.viewSwitcher(this.state.view)}
      </div>
    )
  }
}


export default App;
