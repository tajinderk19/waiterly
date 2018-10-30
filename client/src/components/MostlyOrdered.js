import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardImg, Row, Col,
    CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MostlyOrdered = (props) => {
  return (
    <Row>
        <Col sm="4">
  <Card body inverse color="warning">
    <CardHeader>Header</CardHeader>
    <CardBody>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
  </Col>
  <Col sm="4">
  <Card body inverse color="danger">
    <CardHeader>Header</CardHeader>
    <CardBody>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
  </Col>
  <Col sm="4">
  <Card body inverse color="info">
    <CardHeader>Header</CardHeader>
    <CardBody>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
  </Col>&nbsp; &nbsp; &nbsp; &nbsp; 
  </Row>
  
  );
};


export default MostlyOrdered;
