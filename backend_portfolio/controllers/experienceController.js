import {pool} from '../db';

export const addExperience = (req,res) =>{
  const position = req.body.position;
  const location = req.body.location;
  const date = req.body.date;
  const bullet_points = req.body.bullet_points;
  pool.query('INSERT INTO experience(position,location,date,bullet_points) VALUES($1,$2,$3,$4) RETURNING *',[position,location,date,bullet_points]).then(experience => {
    return res.json(experience.rows[0]);
  }).catch(err =>{
    res.status(404).error(err);
  })
}