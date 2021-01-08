import React from 'react';
import {Container} from 'react-bootstrap';
import {Education} from './Education';
import {Experience} from './Experience';
import {Skills} from './Skills';
import {ExperienceHeading} from './Experience_Header';
import './experience_page.css';

export const ExperiencePage =() =>{
  return (
    <Container className = "experience_page_container">
      <ExperienceHeading/>
      <div className ="divider"></div>
      <Education/>
      <div className ="divider"></div>
      <Experience/>
      <div className ="divider"></div>
      <Skills/>
    </Container>
  )
}