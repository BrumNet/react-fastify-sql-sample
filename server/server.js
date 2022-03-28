'use strict'
require('dotenv').config();
const fastify = require('./app')

 async function start (){
  try {
    await fastify.listen(4000, () =>
  console.log(`listening on port 4000!`),
);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  };
 }
 
 start();