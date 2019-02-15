import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button, ModalBody, Modal,ModalFooter,ModalHeader,
  Nav,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input,
  NavItem,
  Container
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import './Homebody/Menu/Menu.css'

const style = {
  borderRadius:'50%',
  height:'38px',
  width:'38px'
}

const logo = {
  letterSpacing:5,
  fontSize:'30px',
  fontFamily:'monospace'
}

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
        <Navbar color="dark" dark expand="sm" postition="fixed" className="mb-5">
          <Container>
            <NavbarBrand style={logo} href="/"><img src={Logo} style={style} alt="logo"/>&nbsp;Waiterly</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            &nbsp; &nbsp; &nbsp;
            <NavItem>
            <Button color="danger"><Link to="/Menu"><span>Eat Repeat</span></Link></Button>
            &nbsp; &nbsp; &nbsp;
            </NavItem>

            {/* Login Modal */}
              <NavItem>
              <Button color="link" onClick={this.Open}><span>Login</span></Button>
              <Modal isOpen={this.state.modal} toggle={this.Open} className={this.props.className}>
              <ModalHeader toggle={this.Open}><img src={Logo} style={style} alt="logo"/>&nbsp;Login</ModalHeader>
              <ModalBody>
              <Form>
              <FormGroup>
               <Label for="exampleEmail">Email</Label>
                 <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
              <Label for="exampleText">Username</Label>
              <Input type="text" name="name" id="exampleText" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
             </Form>
              </ModalBody>
              <ModalFooter>
              <Button outline color="danger" onClick={this.Open}>Login</Button>{' '}
              </ModalFooter>
               </Modal>
              </NavItem>  
            
               {/* DropDown to Use the App without Login */}
               &nbsp; &nbsp; &nbsp;
            
        <NavItem>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret> </DropdownToggle>
              {/* MainMenu */}
           <DropdownMenu>
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
              &nbsp; &nbsp; &nbsp;      
      </Nav>
    </Collapse>
  </Container>
</Navbar>

      </div>
    );
  }
}

export default AppNavbar;
