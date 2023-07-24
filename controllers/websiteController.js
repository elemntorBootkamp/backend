export default {
    update: async (req, res) => {
        try {
            let website = req.body;
            console.log(website.domain);
            res.status(200).send('ok');
            console.log('🤣😂😂' + req.headers.userid);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    getall: async (req, res) => {
        const port = process.env.port;
        const token = process.env.token;
        axios
            .get(`${port}`, { headers: { authorization: `Bearer ${token}`, managerId: '1234' } })
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    },

    delete: async (req, res) => {
        const port = process.env.port;
        const websiteId = req.params.websiteId;
        const userId = req.params.userId;
        const token = process.env.token;

        axios.delete(`${port}${websiteId}`, {
            headers: {
                authorization: `Bearer ${token}`,
                user_id: userId
            }
        })
            .then((response) => {
                res.status(200).json({ message: `Website with ID ${websiteId} has been deleted` });

            }).catch((err) => {
                res.status(500).json({ error: err.message });

            });
    }
};
