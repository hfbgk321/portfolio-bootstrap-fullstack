import React from 'react';
import {Row, Col,Image,Button} from 'react-bootstrap';
import Profile from '../../project_data/img/prof_pic.png'
import {BusinessCard} from '../Homepage_Components/BusinessCard';
import Resume from '../../project_data/img/resume.pdf';
import './experience_page.css';

export const ExperienceHeading = () =>{
  return (
    <div className = "div_surrounding_experience_header">
      <Row className="justify-content-md-center">
        <Col>
          <Image src = {Profile}/>
        </Col>
        <Col>
          <BusinessCard/>
          <Button variant = "info"><a href = {Resume}>Get a copy of my Resume</a></Button>
        </Col>
      </Row>
    </div>
    
    
  )
}