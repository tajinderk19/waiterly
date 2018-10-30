import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, Button, CardTitle, CardBody,CardLink, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
render(){
  return (
<div>
       <Row>
          <Col xs="3">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="warning" caret>
        Fliter by &nbsp; 
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Main course</DropdownItem>
          <DropdownItem>Chinese</DropdownItem>
          <DropdownItem>Shakes</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Special</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    
    </Col>
    </Row>&nbsp; &nbsp; &nbsp; &nbsp; 
    <Row>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
         
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
         
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
         
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <br/>
      <br/>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
         
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
         
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
         
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  </div>
     
  );
};

}
export default MainMenu;
