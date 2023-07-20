import express from 'express';
export default {
    
    getCheck: async (req, res) => {
        try {
          const userId = req.headers.userid;
          console.log(`Protected route accessed by user ${userId}`);
          
      
          res.send(`Protected route accessed by user ${userId}`);
        } catch (error) {
          console.log("Error:", error);
          res.status(500).send("Internal Server Error");
        }
      }
};
 