let allwebsite = [];
module.exports = {
    update: async (req, res) => {
        let website = req.body;
        allwebsite.push(website);
        res.status(200).send(allwebsite);
    },
};
