import React from "react";
import CharacterList from "./CharacterList";
import {
  Card, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

import {Alert} from 'reactstrap';



export default function CharacterCard(props) {
  console.log(props)

  return  (




    <Col sm="6"  md="4" offset-md="3">

  


        <Card className="description"  key={props.key} > 

        <CardText> <Alert color="success"> {props.name} </Alert>  </CardText> 
        <CardTitle> <Alert color="warning">{props.location} </Alert> </CardTitle>
        {/* <CardBody>  <Alert color="info">  {props.image} </Alert> </CardBody> */}
    
        </Card>

  
        </Col> 

   
      // <p> Name: {props.name} </p>
      // <p>Location: {props.location}</p>
      // <img> {props.image} </img>


 
  )
  
};

