const mobModel = require('../models/mobModel') 

async function checknum (request, reply, done) {
	const confirmUser = await mobModel.mobsearchList(request.body.msisdn);
	if (mobileData.length > 0) {
        done();
    } else {
        done(new Error('Unauthorized'));
    }
}

async function getmobList (request, reply) {
    const mobileData = await mobModel.mobList(); 
    var response = {data:mobileData[0]}
    return reply.status(200).send(response);
}

async function getmobsearchList (request, reply) {
    
    const mobileData = await mobModel.mobsearchList(request.params.search);
    if (mobileData.length > 0) {
        return reply.status(200).send({ data:mobileData[0] });
    } else {
        return reply.status(500).send({ error: "mobile not found!"});
    }
}

async function addSubPost(request, reply){
	//if(cache.contains(request.body.msisdn){doo update} else {do update if cache not null} )
	const addSub = await mobModel.chamgemobPlan(request.body);
	if (addSub == 1){
		return reply.status(200).send({message:"success"})
	} else {
		return reply.status(500).send({message:"failed"})
	}
	
}

async function changemobPlan(request, reply){
	const addSub = await mobModel.mobPlanPost(request.params.type,request.params.id);
	if (addSub == 1){
		return reply.status(200).send({message:"success"})
	} else {
		return reply.status(500).send({message:"failed"})
	}
	
}

module.exports = {
	checknum,
	getmobList,
	getmobsearchList,
	 addSubPost,
     changemobPlan
};
