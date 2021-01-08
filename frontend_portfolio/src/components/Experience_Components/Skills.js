import {skills_data} from '../../project_data/experience';
import React from 'react';
import {Row,Col,ProgressBar} from 'react-bootstrap';
import './experience_page.css'

export const Skills = () =>{
  return (
    <Row className="justify-content-md-center">
        <Col lg = "5" className = "skills_header">Skills</Col>
        <Col lg = "5">
        {skills_data.map((skill,i)=>{
          return (
            <div>
                <h1 className = "skills_type">{skill.type}</h1>
                <div className = "skills_section">
                {(skill.info).map((info,i)=>{
                  return (
                    <div className = "skill_items">
                      <h3>{info.name}</h3>
                      <ProgressBar animated now = {info.level} label = {info.level+"%"}/>
                    </div>
                  )
                })}
                </div>
                
            </div>
          )
        })}
        </Col>
      </Row>
  )
}