import React from 'react';
import {Card,Button,Row,Col} from 'react-bootstrap';
import {project_info} from '../../project_data/project';
import './projects.css'
export const ProjectDisplay = () =>{
  return (
    <Row className ="row_surrounding_projects_list">
      {project_info.map((project,i,)=>{
        return (
          <Col >
            <Card className ="surrounding_card_component">
                <Card.Img className ="project_img" variant="top" src={project.project_img}/>
                <Card.Body>
                  <Card.Title>{project.project_name}</Card.Title>
                  <Card.Text className = "project_description">
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