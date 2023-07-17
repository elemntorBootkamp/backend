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
        const config = {
            headers: {
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            },
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
        const config = {
            headers: {
                authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            },
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
