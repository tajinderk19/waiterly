import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardImg, Row, Col,CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MostlyOrdered = (props) => {
  return (
    <div>
  <Row>
    {/*one*/}
  <Col sm="4">
<Card body inverse color="warning">
<CardHeader>ITALIAN PASTA</CardHeader>
<CardBody>
<CardImg top width="100%" src="https://www.littletphoto.com/wp-content/uploads/2016/10/FTS_3154_HDR.jpg" alt="Card image cap" />
  <CardText>Coleslaw, penne, freshly crushed garlic, tomato and cilantro with grated feta, golden corns and smoked gouda, accompanied with bread.</CardText>
  <Button>Eat</Button>
</CardBody>
<CardFooter>EXCLUSIVE</CardFooter>
</Card>
</Col>

{/*two*/}
<Col sm="4">
<Card body inverse color="danger">
<CardHeader>AMERICAN TACO</CardHeader>
<CardBody>
<CardImg top width="100%" src="http://www.foodportfolio.com/b/wp-content/uploads/2013/02/Pittsburgh-Food-photography-1.jpg" alt="Card image cap" />
&nbsp;&nbsp;   
<CardText>Taco filling using fried beans as its base. Great with taco shells, tortillas, or chips.</CardText>
<Button>Eat</Button>
</CardBody>
<CardFooter>EXCLUSIVE</CardFooter>
</Card>
</Col>

{/*three*/}
<Col sm="4">
<Card body inverse color="info">
<CardHeader>FRUIT SALAD</CardHeader>
<CardBody>
<CardImg top width="100%" src="https://i.pinimg.com/originals/6a/8a/c2/6a8ac2dbb7e28c3092cd3be773b5d23c.jpg" alt="Card image cap" />
<CardText>Bananas, papayas, and shredded coconut are smothered in ginger syrup flavored
lime juice. Of course, we won't forget the pineapples.</CardText>
<Button>Eat </Button>
</CardBody>
<CardFooter>EXCLUSIVE</CardFooter>
</Card>
</Col>

</Row>
<br/>
<br/>
</div>
  
);
};


export default MostlyOrdered;
