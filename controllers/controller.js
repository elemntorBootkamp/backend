const listUsers = [
    { id: 1, name: 'hhh', email: 'hhh@fff' },
    { id: 2, name: 'ddd', email: 'hhh@fff' },
    { id: 3, name: 'eee', email: 'hhh@fff' },
    { id: 4, name: 'hhh', email: 'hhh@fff' },
];
export default {
    getById: async (req, res) => {
        let _id = req.params.id;
        let user = listUsers.find((a) => a.id == _id);
        if (user == null) res.status(404).send('not found!');
        else res.send(listUsers[_id - 1]);
    },
    getAll: async (req, res) => {
        res.send(listUsers);
        console.log()
    },

    Add: async (req, res) => {
        let new_user = req.body;
        listUsers.push(new_user);
        res.send(new_user);
        console.log('add successfuly!😎😉');
    },
    Update: async (req, res) => {
        res.status(200).send('!!!!!!');
    },
    Delete: async (req, res) => {
        try {
            const userId = req.params;
            const index = listUsers.findIndex((user) => user.id === userId);
            if (index !== -1) {
                listUsers.splice(index, 1);
                res.status(200).send(`User with ID ${userId} deleted`);
            } else {
                res.status(404).send(`User with ID ${userId} not found`);
            }
        } catch (error) {
            console.log(error);
        }
    },
};
