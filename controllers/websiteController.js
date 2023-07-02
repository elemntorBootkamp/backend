const axios = require('axios');

module.exports = {
    getWebsitesDetailsFromStorageAction: async(req, res) => {
        const port = 3004;
        try {
            const response = await axios.get(`http://localhost:${port}/website/`);
            res.send(response.data);
        }

        catch (err) {
            return err;
        }
    }

};