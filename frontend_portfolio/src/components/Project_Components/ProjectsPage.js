import React from 'react';
import {Container} from 'react-bootstrap';
import {ProjectIntroduction} from './Project_Introduction';
import {ProjectDisplay} from './ProjectsList'

export const ProjectsPage = () =>{
  return (
    <Container fluid>
        <ProjectIntroduction/>
        <ProjectDisplay/>
    </Container>
  )
}