import {pool} from '../db';

export const addSkills = (req,res) =>{
  const type = req.body.type;
  const info = req.body.info;
  pool.query('INSERT INTO skills(type,info) VALUES($1,$2) RETURNING *',[type,info]).then(skill => {
    return res.json(skill.rows[0]);
  }).catch(err =>{
    res.status(404).error(err);
  })
}