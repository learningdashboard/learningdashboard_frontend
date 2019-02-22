import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';


configure({ adapter: new Adapter() });

describe('addResourceHandler', ()=>{
  it('adds a resource to the dummy list of resource', ()=>{
    let app = shallow(<App/>);
    console.log(app.state().resources);
    expect(app.state().resources).toEqual([])
    app.instance().addResourceHandler(
      {'title': "Test Resource",
      'description': "this is a test",
      'url': '#',
      'userName': "TestUser",
      'dateAdded': new Date(2019,1,1),
      'resourceTags': ["javascript", "conditionals"]})
    console.log(app.state().resources)
    expect(app.state().resources).toEqual(
    [{'title': "Test Resource",
    'description': "this is a test",
    'url': '#',
    'userName': "TestUser",
    'dateAdded': new Date(2019,1,1),
    'resourceTags': ["javascript", "conditionals"]}]
    )
    })
})

describe('taglist stored in state', ()=>{
  it('has the right dummy taglist', ()=>{
    let app = shallow(<App/>)
    expect(app.state().tags).toEqual(
      [
        "JavaScript",
        "Conditionals",
        "Axios",
        "HTML",
        "AWS",
        "Arrays",
        "React",
        "Bootstrap",
        "mySQL",
        "Tutorials/Practice Exercises",
        "Loops",
        "JS Express",
        "CSS",
        "Testing/TDD",
        "Professional Development"
      ]
    )
  })
})
