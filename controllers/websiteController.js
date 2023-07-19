import axios from 'axios';
export default {
    update: async (req, res) => {
        try {
            let website = req.body;
            console.log(website.domain);
            res.status(200).send('ok');
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    getall: async (req, res) => {
        const port = process.env.STORAGE_ACTION_PORT;
        axios.get(`${port}/website/`)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    },
};