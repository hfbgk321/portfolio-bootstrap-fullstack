import {experience_data} from '../../project_data/experience';
import React from 'react';
import {Row,Col} from 'react-bootstrap';


export const Experience = () =>{
  return (
    <Row className="justify-content-md-center">
        <Col lg = "5" className = "experience_header">Experience</Col>
        <Col lg = "5">
        {experience_data.map((company,i)=>{
          return (
            <div key = {i}>
              <h1 className = "experience_position">{company.postion}</h1>
              <h3 className = "experience_location">{company.company} - {company.location}</h3>
              <h6>{company.date}</h6>
              <ul>
                {(company.bullet_points).map((bullet,i)=>{
                    return (
                      <li key = {i}>{bullet}</li>
                    )
                })}
              </ul>
            </div>
          )
        })}
        </Col>
      </Row>
  )
}