import React from 'react';
import './HomeView.css';
import SearchResultsList from '../components/SearchResultsList';
import { Button } from 'reactstrap';
import ResourceService from '../service/ResourceService';
import WebinarList from '../components/WebinarList';
import HomeworkTaskList from '../components/HomeworkTaskList';



export default class HomeView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            resources: []
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
        const courseMaterials = this.props.courseMaterials;
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
                                <a className="btn btn-secondary quiz-button" href="#" role="button">Test your knowledge with the Step Into Tech Quiz!</a>
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
                                        <a href={currentWeekMaterials.slides} target="blank">
                                            <i className="fas fa-external-link-alt fa-1x"></i> access course material</a>
                                    </div>
                                    <div className="lecture">
                                        <h6>This week's lecture:</h6>
                                        <WebinarList webinars={currentWeekMaterials.lectureWebinar} />
                                    </div>
                                    <div className="homework-webinar">
                                        <h6>This week's homework webinar:</h6>
                                        <WebinarList webinars={currentWeekMaterials.homeworkWebinar} />
                                    </div>
                                    <div className="homework-task text-left">
                                        <h5>Homework Tasks:</h5>
                                        <HomeworkTaskList
                                            homeworkTaskIntro={currentWeekMaterials.homeworkTaskIntro}
                                            homeworkTaskList={currentWeekMaterials.homeworkTaskList}
                                        />
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
