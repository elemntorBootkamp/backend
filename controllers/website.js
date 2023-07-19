const { log } = require('util');
const { logger } = require('../logger');
const axios = require('axios');
require('dotenv').config();
 const funcFilter=require('../srvices/website')
const port=process.env.port
const token =process.env.TOKEN

  

module.exports = {

          getAll:async(req, res)=> {
            console.log(token);
           axios.get(`${port}`,{headers: {authorization: `Bearer ${token}`}})
       .then((respons)=>{
         res.status(200).send(respons.data);
        
       })
      
       .catch((err)=>{
         res.status(404).send(err.message);
       })
    },

    filterwebsite: async (req, res) => {
      try {
          const result = await funcFilter(req.params.userId,req.query);
          res.send(result);
      }
      catch (error) {
          return { error: error.message };
      }
  }
}