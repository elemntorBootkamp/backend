import axios from 'axios';

export default {
    update: async (req, res) => {
        try {
            let website = req.body;
            res.status(200).send('ok');
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    getall: async (req, res) => {
        const port = process.env.port;

        try {
            const response = await axios.get(`${port}website/`);
            res.send(response.data);
        } catch (err) {
            return err;
        }
    },
};
