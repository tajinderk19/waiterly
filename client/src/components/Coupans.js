import React from 'react';
import { Card, Row, Col, Button, CardTitle, CardText } from 'reactstrap';

const Coupans = (props) => {
  return (
    <div>
    <Row>
      <Col sm="4">
      <Card body outline color="secondary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      </Col>
      <Col sm="4">
      <Card body outline color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      </Col>
      <Col sm="4">
      <Card body outline color="success">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      </Col>
    
      </Row>
      <br/>
      <br/>
      </div>
  );
};

export default Coupans;