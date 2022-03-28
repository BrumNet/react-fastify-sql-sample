let mobile = require('../controllers/mobile'); 

const { mobSchema } = require('../controllers/schema.js');


async function routes (fastify, options) {

  fastify.get('/', function (request, reply) {reply.send({message: 'ping success', code: 200})});
  fastify.get('/mobile', mobile.getmobList);
  fastify.get('/mobile/:search', mobile.getmobsearchList); 
	fastify.post('/mobile', addmobSub);
	fastify.put('/mobile/:type/:id', mobile.changemobPlan);
	 
}

const addmobSub = {
  schema: mobSchema, 
  preHandler: mobile.checknum,
  handler: mobile.addmobSub, 
};

 

module.exports = routes;