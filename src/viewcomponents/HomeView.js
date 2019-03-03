import React from 'react';
import './HomeView.css';
import SearchResultsList from '../components/SearchResultsList';
import { Button } from 'reactstrap';
import ResourceService from '../service/ResourceService';



export default class HomeView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            resources: [],
            courseMaterials: [
                {
                    weekNumber: 3,
                    topic: "JavaScript",
                    slides: ["https://docs.google.com/document/d/18fA6pq6hwYo8S0OJ4lo8h2GgHK41j4PeECwiOBOR_PI/edit"],
                    lectureWebinar: ["https://drive.google.com/file/d/19IBL7aZZrBr1weP1A3qCT36e56DzW2uA/view?usp=sharing/"],
                    homeworkWebinar: "",
                    homeworkTaskIntro: "Utilise your wireframe and the sections/names you identified, in order to:",
                    homeworkTaskList: [
                        "Update your HTML to use ID’s and Classes where necessary",
                        "Style your ToDo list"
                    ],
                    currentWeek: true
                },
                {
                    weekNumber: 4,
                    topic: "Responsive Design",
                    slides: "https://docs.google.com/document/d/1VwJw1Op4m2AR0N6gKeEDGABhMXwYxoSEWGlSsf8o9gI/edit",
                    lectureWebinar: ["https://drive.google.com/file/d/1aXhMP5FQ1bYQVDOx_13Lwacgy54pbd5T/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1jk8QOhPuDUGQrKRe02KNlqm7CN7C_XF6/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false

                },
                {
                    weekNumber: 5,
                    topic: "Visual Studio Code Debugging",
                    slides: "https://docs.google.com/document/d/1uc6BqLutcyYJTG4hqTX0ASS8zq1-J2k4Fju7JMhYV9o/edit",
                    lectureWebinar: [],
                    homeworkWebinar: ["https://drive.google.com/file/d/1KmmwiHm0EWQWCxVquCoV2QY0U6m-ecCS/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 6,
                    slides: "https://docs.google.com/document/d/1N5w_Ck-XoVaGN0YyMOm_Qna9hFrzjHOo8l36-hbzacE/edit",
                    topic: "React - Part 1",
                    lectureWebinar: ["https://drive.google.com/file/d/1lGR_fBm-w6Mjj3y3uFpjo8R4iyWKEIc6/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/18h04-lEuc9BCI9bZEjxJyF2hyJvRghLv/view?usp=sharing",
                        "https://drive.google.com/file/d/17cAc18taaaf3Ga34FoblCv29vgD58ELo/view?usp=sharing"],
                    homeworkTaskIntro: "",
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
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 8,
                    slides: "https://docs.google.com/document/d/1UiwDoFYuUmleNdGAI6J-OdKfWJ4cAVMP-6XON36SyFI/edit",
                    topic: "cloud",
                    lectureWebinar: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
                    homeworkWebinar: [],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 9,
                    slides: "https://docs.google.com/document/d/17yVQ7OOU1JQhiueiDp-D1-9W_jeda6CI6A2nYd3JzE8/edit",
                    topic: "Introduction to Databases",
                    lectureWebinar: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1H6iPLxSrWLjACwnou5DJAPfWa4mCCXb_/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 10,
                    slides: "https://docs.google.com/document/d/1DgxudxsCWbYfTQu1c-o98rIKXbyj6825imVRIgikkLY/edit",
                    topic: "Serverless - AWS and Lambda",
                    lectureWebinar: ["https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 11,
                    slides: "https://docs.google.com/document/d/1Whp3FMbTjoyEyQ6OMFDstxQVNELqZkofNZfW_6sltYc/edit",
                    topic: "Serverless - Connection to Database",
                    lectureWebinar: ["https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                },
                {
                    weekNumber: 12,
                    slides: "https://docs.google.com/document/d/1v_AU-PCkE-lKxDCjLQHIl8L3jww-O_d15uKA3bgtYcw/edit",
                    topic: "Calling API from React",
                    lectureWebinar: ["https://drive.google.com/file/d/1RoDOrLgx46R4B-_hWIRujfQp28tS9yka/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: [],
                    currentWeek: false
                }
            ]
        }

        this.clickAddResource = this.clickAddResource.bind(this)
        this.clickSearch = this.clickSearch.bind(this)
        this.handlechangeView = this.handlechangeView.bind(this)
        this.refreshHomepage = this.refreshHomepage.bind(this)

    };


    clickAddResource() {
        this.props.changeViewHandler("add")
    };

    clickSearch() {
        this.props.changeViewHandler("search")
    };


    async refreshHomepage() {
        let resources = []
        try {
            resources = await ResourceService.getResourcesTop();
        } catch (e) {
            console.log(e)
        }
        this.setState({ resources: resources });
    };

    async componentDidMount() {
        await this.refreshHomepage()
    }

    handlechangeView(view) {
        this.props.changeViewHandler(view)
    };


    render() {
        console.log(this.state.resources)

        const courseMaterials = this.state.courseMaterials;
        const currentWeekMaterialsArray = courseMaterials.filter(material => material.currentWeek === true);
        const currentWeekMaterials = currentWeekMaterialsArray[0];
        

        return (
            <div className="container-fluid">

                <div className="row mt-4">
                    {/*column for resources*/}
                    <div className="col-12 col-md-7">

                        <div className="row mt-2 mb-3 justify-content-end">
                            <Button type="button" onClick={this.clickAddResource} className="add-button mr-2">Add a New Resource</Button>
                            <Button type="button" onClick={this.clickSearch} className="start-search-button">Search All Resources</Button>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                <h6>Recently added:</h6>
                                <SearchResultsList resources={this.state.resources} changeViewHandler={this.handlechangeView} refreshDataHandler={this.refreshHomepage} setResource={this.props.setResource}> </SearchResultsList>
                            </div>
                        </div>
                    </div>

                    {/*column for other content*/}
                    <div className="col-12 col-md-5">

                        <div className="row mt-3">
                            <div className="col-12 text-center">
                                <a className="btn btn-secondary" href="#" role="button">Test your knowledge with the Step Into Tech Quiz!</a>
                            </div>
                        </div>

                        <div className="row mt-3" >
                            <div className="col-12 text-left cm-outer-box">
                                <h6>Current Course Materials:</h6>
                                <div className="course-materials-list text-center">
                                    <div className="week-topic">
                                        <h5 > Week {currentWeekMaterials.weekNumber}: {currentWeekMaterials.topic}</h5>
                                    </div>
                                    <div className="slides">
                                        <h6>This week's slides:</h6>

                                        <a href={currentWeekMaterials.slides} target="blank"> <i className="fas fa-external-link-alt fa-1x"></i> access course material</a>
                                    </div>
                                    <div className="lecture">
                                        <h6>This week's lecture:</h6>
                                        <a href={currentWeekMaterials.lectureWebinar[0]} target="blank"> <i className="fas fa-external-link-alt fa-1x"></i> access course material</a>
                                    </div>
                                    <div className="homework-webinar">
                                        <h6>This week's homework webinar:</h6>
                                        <a href={currentWeekMaterials.homeworkWebinar[0]} target="blank"> <i className="fas fa-external-link-alt fa-1x"></i> access course material</a>
                                    </div>
                                    <div className="homework-task text-left">
                                        <h5>Homework Tasks:</h5>
                                        <p> {currentWeekMaterials.homeworkTaskIntro}
                                        <ul>
                                                <li>{currentWeekMaterials.homeworkTaskList[0]}</li>
                                                <li>{currentWeekMaterials.homeworkTaskList[1]}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        )
    }
}
