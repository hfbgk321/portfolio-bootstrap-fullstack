import React from 'react';
import {Card,Button,Row,Col} from 'react-bootstrap';
import {project_info} from '../../project_data/project';

export const ProjectDisplay = () =>{
  return (
    <Row className="justify-content-md-center">
      {project_info.map((project,i,)=>{
        return (
          <Col sm>
            <Card style={{ width: '25rem', height:'35rem', marginBottom:"2rem"}}>
                <Card.Img style = {{width: "25rem",height:"15rem"}} variant="top" src={project.project_img}/>
                <Card.Body>
                  <Card.Title>{project.project_name}</Card.Title>
                  <Card.Text style = {{fontFamily:"Hind Siliguri",fontSize:"1rem"}}>
                   {project.project_description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        )
      })} 
  </Row>
  )
}