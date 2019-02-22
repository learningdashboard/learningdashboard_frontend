import React from 'react'
import './SearchView.css'
import {Form, FormGroup, Label, Input} from 'reactstrap'

export default class SearchView extends React.Component{
    render(){
        return(
           <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input type="select" name="select" id="exampleSelect" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
           </div>
        )
    }
}
