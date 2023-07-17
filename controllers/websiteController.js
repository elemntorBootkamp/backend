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
        const Token = process.env.TOKEN;
        const config = {
            headers: { authorization: Token },
        };
        axios
            .get(`${port}/website/`, config)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    },
    addWebsit: async (req, res) => {
        const port = process.env.port;
        const Token = process.env.TOKEN;
        const config = {
            headers: { authorization: Token },
        };
        const obj = req.body;
        axios
            .post(`${port}/website/`, obj, config)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    },
};
