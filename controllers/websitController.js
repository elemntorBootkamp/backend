
module.exports = {

    update: async (req, res) => {
        let websit=req.body
        res.status(200).send(websit.title);
    },
   
};
