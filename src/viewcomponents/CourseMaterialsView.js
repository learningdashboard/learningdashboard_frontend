import React from 'react';
import CourseMaterial from '../components/CourseMaterial';
import './CourseMaterialsView.css';

import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


export default class CourseMaterialsView extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            courseMaterials: [
                {
                    weekNumber: "Week 3 - JavaScript",
                    slide: "https://docs.google.com/document/d/18fA6pq6hwYo8S0OJ4lo8h2GgHK41j4PeECwiOBOR_PI/edit",
                    lectureUrls: ["https://drive.google.com/file/d/19IBL7aZZrBr1weP1A3qCT36e56DzW2uA/view?usp=sharing/"],
                    homeworkWebinar: [],
                    homeworkTaskIntro: "Utilise your wireframe and the sections/names you identified, in order to:",
                    homeworkTaskList: [
                        "Update your HTML to use ID's and Classes where necessary",
                        "Style your ToDo list"],
                    currentWeek: true
                },
                {
                    weekNumber: "Week 4 - Responsive Design",
                    slide: "https://docs.google.com/document/d/1VwJw1Op4m2AR0N6gKeEDGABhMXwYxoSEWGlSsf8o9gI/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1aXhMP5FQ1bYQVDOx_13Lwacgy54pbd5T/view?usp=sharing",
                        "https://drive.google.com/file/d/1jk8QOhPuDUGQrKRe02KNlqm7CN7C_XF6/view?usp=sharing",
                        "https://drive.google.com/file/d/1KmmwiHm0EWQWCxVquCoV2QY0U6m-ecCS/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1jk8QOhPuDUGQrKRe02KNlqm7CN7C_XF6/view?usp=sharing"],
                    homeworkTaskIntro: "Insert design elements to your ToDo list",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: "Week 5",
                    topic: "Visual Studio Code Debugging",
                    slides: "https://docs.google.com/document/d/1uc6BqLutcyYJTG4hqTX0ASS8zq1-J2k4Fju7JMhYV9o/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1KmmwiHm0EWQWCxVquCoV2QY0U6m-ecCS/view?usp=sharing"],
                    homeworkTaskIntro: "Fix Bugs",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: "Week 6",
                    slides: "https://docs.google.com/document/d/1N5w_Ck-XoVaGN0YyMOm_Qna9hFrzjHOo8l36-hbzacE/edit",
                    topic: "React - Part 1",
                    lectureUrls: ["https://drive.google.com/file/d/18h04-lEuc9BCI9bZEjxJyF2hyJvRghLv/view?usp=sharing",
                        "https://drive.google.com/file/d/17cAc18taaaf3Ga34FoblCv29vgD58ELo/view?usp=sharing",
                        "https://drive.google.com/file/d/1lGR_fBm-w6Mjj3y3uFpjo8R4iyWKEIc6/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/18h04-lEuc9BCI9bZEjxJyF2hyJvRghLv/view?usp=sharing",
                        "https://drive.google.com/file/d/17cAc18taaaf3Ga34FoblCv29vgD58ELo/view?usp=sharing"],
                    homeworkTaskIntro: "Insert React Elements into the Application",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 7,
                    slides: "https://docs.google.com/document/d/1xlceEDCEM5piVF07kteUoZNEcr1nrLu13YLXxmyXyrk/edit",
                    topic: "React - Part 2",
                    lectureWebinar: ["https://drive.google.com/file/d/1BOKC9hp2CLC4ZmCdxPzfnXhRj8PrDdC3/view?usp=sharing",
                        "https://drive.google.com/file/d/1WjflDVJZVtU9Ax0X4k9enz547ouLTskK/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1_hlktJFqvNBCBJiqryhL3gmxytZSvZvY/view?usp=sharing",
                        "https://drive.google.com/file/d/13Ueo0dlbQuru0UpqmELTksIND5zP2Ccl/view?usp=sharing",
                        "https://drive.google.com/file/d/1PKoUG3nNilRioaDVxheHRqycmDc--0Ir/view?usp=sharing"],
                    homeworkTaskIntro: "Insert React elements into the Application [State,Props]",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: "Week 8",
                    slides: "https://docs.google.com/document/d/1UiwDoFYuUmleNdGAI6J-OdKfWJ4cAVMP-6XON36SyFI/edit",
                    topic: "cloud",
                    lectureUrls: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing",
                        "https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing",
                        "https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing",
                        "https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing",
                        "https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"],
                    homeworkWebinar: [],
                    homeworkTaskIntro: "Finish Fron-End Application",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 9,
                    slides: "https://docs.google.com/document/d/17yVQ7OOU1JQhiueiDp-D1-9W_jeda6CI6A2nYd3JzE8/edit",
                    topic: "Introduction to Databases",
                    lectureWebinar: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1H6iPLxSrWLjACwnou5DJAPfWa4mCCXb_/view?usp=sharing"],
                    homeworkTaskIntro: "Finish Front-end Application",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: "Week 10",
                    slides: "https://docs.google.com/document/d/1DgxudxsCWbYfTQu1c-o98rIKXbyj6825imVRIgikkLY/edit",
                    topic: "Serverless - AWS and Lambda",
                    lectureUrls: ["https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing",
                        "https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing"],
                    homeworkTaskIntro: "Background Reading and finish To-Do Application",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: "Week 11",
                    slides: "https://docs.google.com/document/d/1Whp3FMbTjoyEyQ6OMFDstxQVNELqZkofNZfW_6sltYc/edit",
                    topic: "Serverless - Connection to Database",
                    lectureUrls: ["https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing",
                        "https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"],
                    homeworkTaskIntro: "Connect the front-end to the back-end",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: "Week 12",
                    slides: "https://docs.google.com/document/d/1v_AU-PCkE-lKxDCjLQHIl8L3jww-O_d15uKA3bgtYcw/edit",
                    topic: "Calling API from React",
                    lectureUrls: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                    homeworkTaskIntro: "Connect the back-end to the front-end",
                    homeworkTaskList: [],
                    currentWeek: false
                }
            ]
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onDropdownClick = this.onDropdownClick.bind(this);

    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    onDropdownClick(event) {
        this.props.setCurrentWeek(event.target.id)
    }

    render() {
        return (
            <div className="container-fluid">


                <div className="row mt-3 justify-content-center">
                    <div className="col-sm-12 col-md-9 text-right">

                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>set current week</DropdownToggle>
                            <DropdownMenu>
                                {this.props.courseMaterials.map((material, i) => {
                                    if (material.currentWeek) {
                                        return <DropdownItem
                                            disabled={true} key={i}
                                            id={material.weekNumber}
                                            onClick={this.onDropdownClick}>{material.weekNumber}</DropdownItem>
                                    }
                                    else {
                                        return <DropdownItem
                                            key={i}
                                            id={material.weekNumber}
                                            onClick={this.onDropdownClick}>{material.weekNumber}</DropdownItem>
                                    }
                                }
                                )}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </div>



                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-9">
                        <h6>Course Materials</h6>
                        {this.props.courseMaterials.map((material, i) =>
                            <CourseMaterial currentWeek={this.props.courseMaterials[i].currentWeek}
                                material={material} key={i}></CourseMaterial>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}