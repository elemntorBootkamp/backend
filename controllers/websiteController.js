const allWebsites = [
    {
        id: 1,
        title: 'aaa',
        description: 'aaa',
        typeOfDomain: 'qwert',
        cpu: 'qwert',
        memory: '123452',
        status: 'qwer',
    },
    {
        id: 4,
        title: 'bbb',
        description: 'bbb',
        typeOfDomain: '66666',
        cpu: 'bbb',
        memory: '123456',
        status: 'bbb',
    },
    {
        id: 3,
        title: 'uuu',
        description: 'uuu',
        typeOfDomain: 'uuu',
        cpu: 'uuu',
        memory: '777777',
        status: 'uuu',
    },
    {
        id: 2,
        title: 'ccc',
        description: 'ccc',
        typeOfDomain: 'ccc',
        cpu: 'ccc',
        memory: '00000',
        status: 'ccc',
    },
];
export default {
    update: async (req, res) => {
        try {
            let website = req.body;
            res.status(200).send('ok');
            console.log('🤣😂😂' + req.headers.userid);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
    getall: async (req, res) => {
        try {
            console.log('🤣😂😂' + req.headers.userid);
            res.status(200).send(allWebsites);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
};
