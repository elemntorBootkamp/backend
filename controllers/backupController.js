import axios from 'axios';
export default {
    getAll: async (req, res) => {
        const port = process.env.port;
        axios
            .get(`${port}/backup/`)
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    },
    addBackup: async (req, res) => {
        try {
            const backup = req.body;
            const port = process.env.port;
            axios
                .post(`${port}/backup/`, backup)
                .then(() => {
                    res.status(200).send('ok');
                })
                .catch((err) => {
                    res.status(404).send(err);
                });
        } catch (err) {
            res.status(404).send(err);
        }
    },
};
