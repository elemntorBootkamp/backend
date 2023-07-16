import axios from 'axios';
import {funcGetByUserId, funcSearch} from '../services/website.js';

export default {
    update: async (req, res) => {
        try {
            let website = req.body;
            res.status(200).send('ok');
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    getAll: async (req, res) => {
        const port = process.env.PORT;
        const token = process.env.TOKEN;
        axios
            .get(`${port}`, {headers: {'authorization': `Bearer ${token}`}})
            .then((response) => {
                res.status(200).send(response.data);
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    },
    getByUserId: async (req, res) => {
        try {
            const result = await funcGetByUserId(req.params.userId);
            res.send(result);
        }
        catch (error) {
            return { error: error.message };
        }
    },
    search: async (req, res) => {
        try {
            const result = await funcSearch(req.params.userId,req.query);
            res.send(result);
        }
        catch (error) {
            return { error: error.message };
        }
    }
};
