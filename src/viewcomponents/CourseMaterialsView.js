import React from 'react';
import CourseMaterial from'./CourseMaterial';
import './CourseMaterialsView.css';

export default class CourseMaterialsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseMaterials: [
                {
                    weekNumber: "Week 3 - JavaScript",
                    slides: "https://docs.google.com/document/d/18fA6pq6hwYo8S0OJ4lo8h2GgHK41j4PeECwiOBOR_PI/edit",
                    lectureUrls: ["https://drive.google.com/file/d/19IBL7aZZrBr1weP1A3qCT36e56DzW2uA/view?usp=sharing/"],
                    currentWeek: 3
                },
                {
                    weekNumber: "Week 4 - Responsive Design",
                    slides: "https://docs.google.com/document/d/1VwJw1Op4m2AR0N6gKeEDGABhMXwYxoSEWGlSsf8o9gI/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1aXhMP5FQ1bYQVDOx_13Lwacgy54pbd5T/view?usp=sharing",
                                "https://drive.google.com/file/d/1jk8QOhPuDUGQrKRe02KNlqm7CN7C_XF6/view?usp=sharing",
                                "https://drive.google.com/file/d/1KmmwiHm0EWQWCxVquCoV2QY0U6m-ecCS/view?usp=sharing"],
                    currentWeek: 4
                    
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 5",
                    topic: "Visual Studio Code Debugging",
                    slides: "https://docs.google.com/document/d/1uc6BqLutcyYJTG4hqTX0ASS8zq1-J2k4Fju7JMhYV9o/edit",
=======
                    weekNumber: "Week 5 - Visual Studio Code Debugging",
                    slide: "https://docs.google.com/document/d/1uc6BqLutcyYJTG4hqTX0ASS8zq1-J2k4Fju7JMhYV9o/edit",
>>>>>>> Tiffany
                    lectureUrls: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                    currentWeek: 5
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 6",
                    slides: "https://docs.google.com/document/d/1N5w_Ck-XoVaGN0YyMOm_Qna9hFrzjHOo8l36-hbzacE/edit",
                    topic: "React - Part 1",
=======
                    weekNumber: "Week 6 - React (Part 1)",
                    slide: "https://docs.google.com/document/d/1N5w_Ck-XoVaGN0YyMOm_Qna9hFrzjHOo8l36-hbzacE/edit",
>>>>>>> Tiffany
                    lectureUrls: ["https://drive.google.com/file/d/18h04-lEuc9BCI9bZEjxJyF2hyJvRghLv/view?usp=sharing",
                                "https://drive.google.com/file/d/17cAc18taaaf3Ga34FoblCv29vgD58ELo/view?usp=sharing",
                                "https://drive.google.com/file/d/1lGR_fBm-w6Mjj3y3uFpjo8R4iyWKEIc6/view?usp=sharing"],
                    currentWeek: 6
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 7",
                    slides: "https://docs.google.com/document/d/1xlceEDCEM5piVF07kteUoZNEcr1nrLu13YLXxmyXyrk/edit",
                    topic: "React - Part 2",
=======
                    weekNumber: "Week 7 - React (Part 2)",
                    slide: "https://docs.google.com/document/d/1xlceEDCEM5piVF07kteUoZNEcr1nrLu13YLXxmyXyrk/edit",
>>>>>>> Tiffany
                    lectureUrls: [ "https://drive.google.com/file/d/1_hlktJFqvNBCBJiqryhL3gmxytZSvZvY/view?usp=sharing",
                                "https://drive.google.com/file/d/1BOKC9hp2CLC4ZmCdxPzfnXhRj8PrDdC3/view?usp=sharing",
                                "https://drive.google.com/file/d/1WjflDVJZVtU9Ax0X4k9enz547ouLTskK/view?usp=sharing",
                                "https://drive.google.com/file/d/13Ueo0dlbQuru0UpqmELTksIND5zP2Ccl/view?usp=sharing",
                                "https://drive.google.com/file/d/1PKoUG3nNilRioaDVxheHRqycmDc--0Ir/view?usp=sharing"],
                    currentWeek: 7
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 8",
                    slides: "https://docs.google.com/document/d/1UiwDoFYuUmleNdGAI6J-OdKfWJ4cAVMP-6XON36SyFI/edit",
                    topic: "cloud",
=======
                    weekNumber: "Week 8 - Cloud",
                    slide: "https://docs.google.com/document/d/1UiwDoFYuUmleNdGAI6J-OdKfWJ4cAVMP-6XON36SyFI/edit",
>>>>>>> Tiffany
                    lectureUrls: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing",
                                 "https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing",
                                "https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing",
                                "https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing",
                                "https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"],
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 9",
                    slides:"https://docs.google.com/document/d/17yVQ7OOU1JQhiueiDp-D1-9W_jeda6CI6A2nYd3JzE8/edit",
                    topic: "Introduction to Databases",
                    lectureUrls: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"]
                },
                {
                    weekNumber: "Week 10",
                    slides: "https://docs.google.com/document/d/1DgxudxsCWbYfTQu1c-o98rIKXbyj6825imVRIgikkLY/edit",
=======
                    weekNumber: "Week 9 - Introduction to Databases",
                    slide:"https://docs.google.com/document/d/17yVQ7OOU1JQhiueiDp-D1-9W_jeda6CI6A2nYd3JzE8/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1xmBcArEO6dM1kpT2oSTAuYcSYjrN-7_u/view?usp=sharing"]
                },
                {
                    weekNumber: "Week 10 - Serverless - AWS & Lambda",
                    slide: "https://docs.google.com/document/d/1DgxudxsCWbYfTQu1c-o98rIKXbyj6825imVRIgikkLY/edit",
>>>>>>> Tiffany
                    topic: "Serverless - AWS and Lambda",
                    lectureUrls: ["https://drive.google.com/file/d/1eFLlEFL8hBc_ZdZypvZaKJu1annDigoh/view?usp=sharing",
                                "https://drive.google.com/file/d/1iPMFsBFG5hWmAx9oUQg5tTMbN7hTF64F/view?usp=sharing"]
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 11",
                    slides: "https://docs.google.com/document/d/1Whp3FMbTjoyEyQ6OMFDstxQVNELqZkofNZfW_6sltYc/edit",
                    topic: "Serverless - Connection to Database",
=======
                    weekNumber: "Week 11 - Serverless - Connection to Database",
                    slide: "https://docs.google.com/document/d/1Whp3FMbTjoyEyQ6OMFDstxQVNELqZkofNZfW_6sltYc/edit",
>>>>>>> Tiffany
                    lectureUrls: ["https://drive.google.com/file/d/1tcdrEqWsJRUV0Rf_1kvFcTT4DdKHxPez/view?usp=sharing",
                                "https://drive.google.com/file/d/1i1d1UZtPrfFl9ts11GYlJLL6m7vC1sWV/view?usp=sharing"]
                },
                {
<<<<<<< HEAD
                    weekNumber: "Week 12",
                    slides: "https://docs.google.com/document/d/1v_AU-PCkE-lKxDCjLQHIl8L3jww-O_d15uKA3bgtYcw/edit",
                    topic: "Calling API from React",
                    lectureUrls: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                },
                {
                    weekNumber: "Week 13",
                    slides: "https://docs.google.com/document/d/1lfoDOyZJFcdiga0xGMYgvaaPKHmAnHs9YnE2sMvyhCo/edit",
                    topic: "Career Development",
=======
                    weekNumber: "Week 12 - Calling API from React",
                    slide: "https://docs.google.com/document/d/1v_AU-PCkE-lKxDCjLQHIl8L3jww-O_d15uKA3bgtYcw/edit",
                    lectureUrls: ["https://drive.google.com/file/d/1NwH4RR0jypLN7DQKsyuuxnd110zkIg9z/view?usp=sharing"],
                },
                {
                    weekNumber: "Week 13 - Career Development",
                    slide: "https://docs.google.com/document/d/1lfoDOyZJFcdiga0xGMYgvaaPKHmAnHs9YnE2sMvyhCo/edit",
>>>>>>> Tiffany
                    lectureUrls: ["https://drive.google.com/file/d/1RoDOrLgx46R4B-_hWIRujfQp28tS9yka/view?usp=sharing"]
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
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

//insert tickbox button
// reshuffle and grouped by week and webinars = once done, then take the array and put it into the script 
// follow the database and then link into the resources to send over to Nicola 
// format css