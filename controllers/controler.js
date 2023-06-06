const { logger } = require('../logger');
const Keycloak = require('keycloak-connect');
const session = require('express-session');
const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({
  store: memoryStore
});
const keycloakAdminClient = require('keycloak-admin').default;
const user1="yyy";
const user = {
    username: 'testuser',
    email: 'testuser@example.com',
    enabled: true,
    credentials: [
      {
        type: 'password',
        value: 'testpassword',
        temporary: false
      }
    ]
  };

const listUsers = [
    { id: 1, name: 'hhh', email: 'hhh@fff' },
    { id: 2, name: 'ddd', email: 'hhh@fff' },
    { id: 3, name: 'eee', email: 'hhh@fff' },
    { id: 4, name: 'hhh', email: 'hhh@fff' },
];
module.exports = {
    getById: async (req, res) => {
       
        
            res.send(listUsers[_id-1])
        let _id = req.params.id;
        let user = listUsers.find((a) => a.id == _id);
        if (user == null) res.status(404).send('not found!');
        else res.send(listUsers[_id - 1]);
    },
    getAll: async (req, res) => {
        res.send(listUsers);
    },

    Add: async (req, res) => {
        await keycloakAdminClient.users.create(user)
  .then(createdUser => {
    res.send(user1);
    // logger.info('User created:', createdUser);
    // console.log('User created:', createdUser);
    // console.log('User ID:', createdUser.id);
    // console.log('User email:', createdUser.email);
  })
  .catch(error => {
    logger.info('User created:', createdUser);
    console.error('Error creating' );
    res.send(error1);
 } ) ;},



    Update: async (req, res) => {},
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
