
module.exports = {
    getById: async (req, res) => {
<<<<<<< Updated upstream
       
=======
        let _id = reqn.params.id
        let user = listUsers.find(a => a.id == _id)
        if (user == null)
            res.status(404).send("not found!")
        else
            res.send(listUsers[_id-1])
>>>>>>> Stashed changes
    },
    getAll: async (req, res) => {
       
    },
    
    Add: async (req, res) => {
       
    },
    Update: async (req, res) => {
       
    },
    Delete: async (req, res) => {
       
    }

}