import React from 'react';

import CourseMaterial from'../components/CourseMaterial';
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
            dropdownOpen:false
        }
        this.toggleDropDown=this.toggleDropDown.bind(this);
        this.onDropdownClick=this.onDropdownClick.bind(this);
    
    }

    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      //this is called when a dropdownItem is clicked...it calls a function that changes the true and false
      //status of the week in the CourseMaterialsArray...as this array is now in App.js so it can be shared with
      //the homepage the setCurrentWeek function is passed in as a prop
      onDropdownClick(event){
        this.props.setCurrentWeek(event.target.id)
      }

      //function that loops through the courseMaterialsArray and creates a dropdownitem for each week.
      //if that week is has currentweek marked at true make dropdownitem disabled
      //each dropdownitem has an onClick handler that calls onDropDownClick
      createDropDownList(){
          let dropdownArray =[]
          console.log(this.props.courseMaterials)
          for(let i=0;i<this.props.courseMaterials.length;i++){
              if(this.props.courseMaterials[i].currentWeek == true){
                dropdownArray.push(<DropdownItem disabled key={i} id={this.props.courseMaterials[i].weekNumber} onClick={this.onDropdownClick}>{this.props.courseMaterials[i].weekNumber}</DropdownItem>)
              } else {
                dropdownArray.push(<DropdownItem key={i} id={this.props.courseMaterials[i].weekNumber} onClick={this.onDropdownClick}>{this.props.courseMaterials[i].weekNumber}</DropdownItem>)
              }
          }
          return dropdownArray;
      }


    render() {
        return (
            <div className="container-fluid">

                {/*Hi Tiffany. I added an extra row to hold the dropdown*/}
                <div className="row mt-3 justify-content-center">
                    <div className="col-12 col-sm-10 text-right">
                        {/*These are just some components I lifted from reactstrap documentation
                        there is now a state variable to say if the dropdown is open and a 
                        simple toggleDropDown function to toggle whether the dropdown is open --all straight
                        from reactstrap docs*/}
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>set current week</DropdownToggle>
                            <DropdownMenu>
                                {this.createDropDownList()}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </div>


                {/*only change here is to pass the currentWeek true false flag to the CourseMarterial 
                 so we can make the current week blue ... no change to your accordian logic*/}
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-12">
                        <h6>Course Materials</h6>
                        {this.props.courseMaterials.map((material, i) =>
                            <CourseMaterial currentWeek={this.props.courseMaterials[i].currentWeek} material={material} key={i}></CourseMaterial>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}