import React from 'react';
import CourseMaterial from'../components/CourseMaterial';
import './CourseMaterialsView.css';

export default class CourseMaterialsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseMaterials: [
                {
                    weekNumber: 3,
                    topic: "JavaScript",
                    slides: ["https://docs.google.com/document/d/18fA6pq6hwYo8S0OJ4lo8h2GgHK41j4PeECwiOBOR_PI/edit"],
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
                    slides: "https://docs.google.com/document/d/1VwJw1Op4m2AR0N6gKeEDGABhMXwYxoSEWGlSsf8o9gI/edit",
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
                    homeworkTaskList: ["Finish off porting over your index.html in to your React application",
                        "Watch the next React webinar",
                        "Implement one action for adding a task"],
                    currentWeek: false
                },
                {
<<<<<<< HEAD
                    weekNumber: 7,
                    slides: "https://docs.google.com/document/d/1xlceEDCEM5piVF07kteUoZNEcr1nrLu13YLXxmyXyrk/edit",
                    topic: "React - Part 2",
                    lectureWebinar: ["https://drive.google.com/file/d/1BOKC9hp2CLC4ZmCdxPzfnXhRj8PrDdC3/view?usp=sharing",
                        "https://drive.google.com/file/d/1WjflDVJZVtU9Ax0X4k9enz547ouLTskK/view?usp=sharing"],
=======
                    weekNumber: "Week 7 - React (Part 2)",
                    slide: "https://docs.google.com/document/d/1xlceEDCEM5piVF07kteUoZNEcr1nrLu13YLXxmyXyrk/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1_hlktJFqvNBCBJiqryhL3gmxytZSvZvY/view?usp=sharing",
                        "https://drive.google.com/file/d/1BOKC9hp2CLC4ZmCdxPzfnXhRj8PrDdC3/view?usp=sharing",
                        "https://drive.google.com/file/d/1WjflDVJZVtU9Ax0X4k9enz547ouLTskK/view?usp=sharing",
                        "https://drive.google.com/file/d/13Ueo0dlbQuru0UpqmELTksIND5zP2Ccl/view?usp=sharing",
                        "https://drive.google.com/file/d/1PKoUG3nNilRioaDVxheHRqycmDc--0Ir/view?usp=sharing"],
>>>>>>> 0212b982e7ec41cdad7a37b7c1182b0a730f189d
                    homeworkWebinar: ["https://drive.google.com/file/d/1_hlktJFqvNBCBJiqryhL3gmxytZSvZvY/view?usp=sharing",
                        "https://drive.google.com/file/d/13Ueo0dlbQuru0UpqmELTksIND5zP2Ccl/view?usp=sharing",
                        "https://drive.google.com/file/d/1PKoUG3nNilRioaDVxheHRqycmDc--0Ir/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: ["Completion of your React ToDo list"],
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
<<<<<<< HEAD
                    weekNumber: 9,
                    slides: "https://docs.google.com/document/d/17yVQ7OOU1JQhiueiDp-D1-9W_jeda6CI6A2nYd3JzE8/edit",
                    topic: "Introduction to Databases",
                    lectureWebinar: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
=======
                    weekNumber: "Week 9 - Introduction to Databases",
                    slide: "https://docs.google.com/document/d/17yVQ7OOU1JQhiueiDp-D1-9W_jeda6CI6A2nYd3JzE8/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"],
>>>>>>> 0212b982e7ec41cdad7a37b7c1182b0a730f189d
                    homeworkWebinar: ["https://drive.google.com/file/d/1H6iPLxSrWLjACwnou5DJAPfWa4mCCXb_/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: ["Respond to email regarding AWS account",
                        "Complete React application (Don't forget the README)",
                        "Have some form of 1 to 1 with James (Zoom, In Person, Over slack chat)"],
                    currentWeek: false
                },
                {
                    weekNumber: 10,
                    slides: "https://docs.google.com/document/d/1DgxudxsCWbYfTQu1c-o98rIKXbyj6825imVRIgikkLY/edit",
                    topic: "Serverless - AWS and Lambda",
                    lectureWebinar: ["https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing"],
                    homeworkWebinar: ["https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing"],
                    homeworkTaskIntro: "",
                    homeworkTaskList: ["(Optional) Think of any app ideas for the project weeks and prepare a quick 1-2 min brief",
                        "Watch the webinar called Week 010 - Postman usage and further serverless request method handlers",
                        "Implement the handlers for creating tasks, deleting tasks and updating tasks",
                        "Update those handlers to execute SQL"],
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
                    homeworkTaskList: ["Hook up your application frontend / backend",
                        "Meet with your project team",
                        "Prep CV as per Beckie’s webinar"],
                    currentWeek: false
<<<<<<< HEAD
=======
                },
                {
                    weekNumber: "Week 13 - Career Development",
                    slide: "https://docs.google.com/document/d/1lfoDOyZJFcdiga0xGMYgvaaPKHmAnHs9YnE2sMvyhCo/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1RoDOrLgx46R4B-_hWIRujfQp28tS9yka/view?usp=sharing"],
                    homeworkWebinar:[]
>>>>>>> 0212b982e7ec41cdad7a37b7c1182b0a730f189d
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12"
                    >
                        <h1>Course Materials</h1>
                        {this.state.courseMaterials.map((material, i) =>
                            <div>
                                <CourseMaterial material={material} key={i} ></CourseMaterial>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}