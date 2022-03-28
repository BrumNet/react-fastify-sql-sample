const mobSchema = {
	body: {
        type: 'object',
		required:['msisdn', 'customer_id_owner', 'costumer_id_user', 'service_type', 'service_start_date'],
        properties: {
          msisdn: { type: 'string' },
          customer_id_owner: { type: 'number' },
          costumer_id_user: { type: 'number' },
		  service_type: {type:'string'},
		  service_start_date: {type:'timestamp'},
        },
      },
  response: {
    200: {
      type: 'string',
    },
  },
};

module.exports = { mobSchema };