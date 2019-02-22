import React from 'react'
import './AddResourceView.css'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';




export default class AddResourceView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resourceTags: [
                'JavaScript',
                'Arrays',
                'Loops',
                'Conditionals',
                'React',
                'JS Express',
                'Axios',
                'Bootstrap',
                'CSS',
                'HTML',
                'mySQL',
                'Testing/TDD',
                'AWS',
                'Tutorials / Practice Exercises',
                'Professional Development'
            ],

            title:'',
            url:'',
            description:'',
            userName:'',
        }
    };

    handleChange = (e) => {
        if (e.target.id === "title") {
        this.setState({ title: `${e.target.value}` })
        } else if (e.target.id === "url") {
            this.setState({ url: `${e.target.value}` })   
        } else if (e.target.id === "description") {
            this.setState({ description: `${e.target.value}` })   
        } else if (e.target.id === "userName") {
            this.setState({ userName: `${e.target.value}` })   
        } 
      };




    render() {

        const resourceTags = this.state.resourceTags;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Add a New Resource</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >Title</InputGroupAddon>
                            <Input id="title" value={this.state.title} onChange={e => this.handleChange(e)} placeholder="150 characters max"/>
                        </InputGroup>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">URL</InputGroupAddon>
                            <Input id="url" value={this.state.url} onChange={e => this.handleChange(e)} placeholder="150 characters max"/>
                        </InputGroup>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
                            <Input id="description" type='textarea' value={this.state.description} onChange={e => this.handleChange(e)}/>
                        </InputGroup>
                        <br />
                    </div>
                </div>

                
                <h2>Select any that apply: </h2>
                        <br/>

                <div className="row">
                    {resourceTags.map((task, i) =>
                        <div className="col-4">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{task}
                                </Label>
                            </FormGroup>
                           
                        </div>
                    )}
                </div>


                <br />
                        <h2>Submitted By: </h2>
                        <br/>


                <div className="row">
                    <div className="col-6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                            <Input id="userName" value={this.state.userName} onChange={e => this.handleChange(e)} placeholder="150 characters max"/>
                        </InputGroup>
                        <br />
                    </div>
                </div>




                <Button>Submit</Button>

            </div>

        )
    }
}
