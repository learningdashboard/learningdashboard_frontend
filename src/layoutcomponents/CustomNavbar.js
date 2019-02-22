import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './CustomNavbar.css'

export default class CustomNavbar extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.clickHandler = this.clickHandler.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  clickHandler(event){
    this.props.changeViewHandler(event.target.name)
  }

  render() {
    return (
        <Navbar className="customNavbar" light expand="md">
          <NavbarBrand href="#"><img className="mr-4" src='images/logo.png' width="100"></img><strong>Step Into Tech:</strong> Learning Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink name="home" onClick={this.clickHandler} href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink name="search" onClick={this.clickHandler} href="#">Search Results</NavLink>
              </NavItem>
              <NavItem>
                <NavLink name="course" onClick={this.clickHandler} href="#">Course Materials</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}