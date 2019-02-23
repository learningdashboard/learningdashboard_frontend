import React from 'react'
import './AddResourceView.css'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';




export default class AddResourceView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            url: '',
            description: '',
            userName: '',
            resourceTags: [],

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

    handleButtonClick = () => {
        const newResource = {
            title: this.state.title,
            url: this.state.url,
            description: this.state.description,
            userName: this.state.userName,
            resourceTags: this.state.resourceTags
        }

        this.props.addResourceHandler(newResource);

        this.unCheck();

        this.setState({
            title: "",
            url: "",
            description: "",
            userName: "",
            resourceTags: []
        });
        //alert(JSON.stringify(newResource)); //take this out when done testing!
    };

    handleCheck = (e) => {
        const currentTags = this.state.resourceTags;
        const tag = e.target.id;

        if (currentTags.includes(tag)) {
            const indexToRemove = currentTags.indexOf(tag);
            currentTags.splice(indexToRemove, 1);
        } else {
            currentTags.push(tag);
        };

        this.setState({ resourceTags: currentTags });

        alert(currentTags); 
    };

    unCheck = () =>  {
        var x = document.getElementsByClassName("checkboxes");
        
        for(let i=0; i<=x.length-1; i++) {
            x.item(i).checked = false;
        }   
        alert('Success! You resource has been added!');
      }    


    render() {

        const tagList = this.props.tagList;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Add a New Resource</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >Title</InputGroupAddon>
                            <Input id="title" value={this.state.title} onChange={e => this.handleChange(e)} placeholder="150 characters max" />
                        </InputGroup>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">URL</InputGroupAddon>
                            <Input id="url" value={this.state.url} onChange={e => this.handleChange(e)} placeholder="150 characters max" />
                        </InputGroup>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
                            <Input id="description" type='textarea' value={this.state.description} onChange={e => this.handleChange(e)} />
                        </InputGroup>
                        <br />
                    </div>
                </div>


                <h2>Select any that apply: </h2>
                <br />

                <div className="row">
                    {tagList.map((tag, i) =>
                        <div className="col-4">
                            <FormGroup check>
                                <Label check>
                                    <Input 
                                        className="checkboxes"
                                        key={i}
                                        id={tag} 
                                        type="checkbox" 
                                        onChange={e => this.handleCheck(e)}     
                                        />
                                        {tag}
                                </Label>
                            </FormGroup>

                        </div>
                    )}
                </div>


                <br />
                <h2>Submitted By: </h2>
                <br />


                <div className="row">
                    <div className="col-10">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                            <Input id="userName" value={this.state.userName} onChange={e => this.handleChange(e)} placeholder="150 characters max" />
                        </InputGroup>
                        <br />
                    </div>
                </div>



                <div className="row">
                    <div className="col-10">
                        <Button onClick={this.handleButtonClick} type="submit">Submit</Button>
                    </div>
                </div>


            </div>

        )
    }
}
