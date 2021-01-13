import {Pool} from 'pg';


export const pool = new Pool({
  user :"postgres",
  password: "hfbgk987654321",
  localhost: "localhost",
  post:5432,
  database: "personal_site_info"
});
