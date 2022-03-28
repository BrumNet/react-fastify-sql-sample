const mysqlPromise = require('../config/database');

const mobileModel = {
	mobList: async function(params) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];

    try {
      res = await connection.execute(`SELECT * FROM mobile`);
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res : null;
  },
  
    mobsearchList: async function(search) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];
    try {
      res = await connection.execute('SELECT * FROM mobile WHERE msisdn = ?', [search] );
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res[0] : null;
  },
  
  
  addSubPost: async function(location_name,type,type_query) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];
    var StringQuery = ''
    try {
      res = await connection.execute('INSERT INTO mobile (msisdn, customer_id_owner, costumer_id_user, service_type, service_start_date) VALUES ?', [msisdn, customer_id_owner, costumer_id_user, service_type, service_start_date]);
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res[0] : null;
  },

 changemobPlan: async function(st,id) {
    const connection = await mysqlPromise.DATABASE.getConnection();
    var res = [{}];
    var StringQuery = ''
    try {
      res = await connection.execute('UPDATE mobile SET service_type = ? WHERE id = ?', [st,id] );
      connection.release();
    }
    catch (err) {
      console.error(err)
      connection.release();
      return false
    }
    return res.length > 0 ? res[0] : null;
  },


  
  
}




module.exports = mobileModel
