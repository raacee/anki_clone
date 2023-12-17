const { Client } = require('pg');
export const client = new Client({
  user: 'learningDbUser',
  host: 'localhost',
  database: 'LearningFactDb',
  password: 'password',
  port: 5432,
});

export async function getLearningPackages(){

}

export async function getUserLearningPackages(){

}
