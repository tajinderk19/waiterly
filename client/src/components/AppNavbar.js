import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button, ModalBody, Modal,ModalFooter,ModalHeader,
  Nav,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormText,
  NavItem,
  Container
} from 'reactstrap';
import {Link} from 'react-router-dom';



class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      modal:false
    };
    this.Open = this.Open.bind(this);
  }

toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

Open(){
  this.setState({
    modal: !this.state.modal
  });
}


  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Waiterly</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

            {/* Login Modal */}
              <NavItem>
              <Button color="danger" onClick={this.Open}>Login</Button>
              <Modal isOpen={this.state.modal} toggle={this.Open} className={this.props.className}>
              <ModalHeader toggle={this.Open}>Modal title</ModalHeader>
              <ModalBody>
              <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        </Form>
              </ModalBody>
              <ModalFooter>
              <Button color="primary" onClick={this.Open}>Do Something</Button>{' '}
          
              </ModalFooter>
               </Modal>
              </NavItem>  
              
                  &nbsp; &nbsp; &nbsp;

              {/* DropDown to Use the App without Login */}

              <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret> </DropdownToggle>

              {/* MainMenu */}
        <DropdownMenu>
              <DropdownItem>
              <Link to="/MainMenu">Menu</Link>
              </DropdownItem>
            {/* Coupans */}
              <DropdownItem>
              <Link to="/Coupans">Coupans</Link>
              </DropdownItem>
            {/* Profile */}
              <DropdownItem divider />
              <DropdownItem>
              <Link to="/Profile">Profile</Link>
                </DropdownItem>
                <DropdownItem>
              <Link to="/MostlyOrdered">Mostly Ordered</Link>
                </DropdownItem>
        </DropdownMenu>
        
              </Dropdown>
              </NavItem>
      
              
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
   

      </div>
    );
  }
}

export default AppNavbar;
