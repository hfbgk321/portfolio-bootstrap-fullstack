import {skills_data} from '../../project_data/experience';
import React from 'react';
import {Row,Col,ProgressBar} from 'react-bootstrap';

export const Skills = () =>{
  return (
    <Row className="justify-content-md-center">
        <Col lg = "5" className = "skills_header">Skills</Col>
        <Col lg = "5">
        {skills_data.map((skill,i)=>{
          return (
            <div>
                <h1>{skill.type}</h1>
                {(skill.info).map((info,i)=>{
                  return (
                    <div>
                      <h3>{info.name}</h3>
                      <ProgressBar animated now = {info.level} label = {info.level+"%"}/>
                    </div>
                  )
                })}
            </div>
            

          )
        })}
        </Col>
      </Row>
  )
}