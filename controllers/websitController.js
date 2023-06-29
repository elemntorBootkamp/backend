const cpu = [
    { value: 'Intel Xeon', label: 'Intel Xeon', },
    { value: 'AMD Ryzen 3', label: 'AMD Ryzen 3', },
    { value: 'AMD Ryzen 5', label: 'AMD Ryzen 5', },
    { value: 'AMD Ryzen 7', label: 'AMD Ryzen 7', },
    { value: 'ARM Cortex-A53', label: 'ARM Cortex-A53', },
    { value: 'ARM Cortex-A72', label: 'ARM Cortex-A72', },
    { value: 'ARM Cortex-A73', label: 'ARM Cortex-A73', },
    { value: 'Intel Core i7', label: 'Intel Core i7', },
    { value: 'Intel Core i5', label: 'Intel Core i5', },
    { value: 'Intel Core i3', label: 'Intel Core i3', },
];
const allWebsites =[
    {
        id: 1,
        title: 'aaa',
        description: 'aaa',
        typeOfDomain: 'qwert',
        cpu: 'qwert',
        memory: '123452',
        status: 'qwer'
    },
    {
        id: 4,
        title: 'bbb',
        description: 'bbb',
        typeOfDomain: '66666',
        cpu: 'bbb',
        memory: '123456',
        status: 'bbb'
    },
    {
        id: 3,
        title: 'uuu',
        description: 'uuu',
        typeOfDomain: 'uuu',
        cpu: 'uuu',
        memory: '777777',
        status: 'uuu'
    },
    {
        id: 2,
        title: 'ccc',
        description: 'ccc',
        typeOfDomain: 'ccc',
        cpu: 'ccc',
        memory: '00000',
        status: 'ccc'
    }
];
export default {
    update: async (req, res) => {
        let website = req.body;
        res.status(200).send('ok');
    },
    validCpu:async(req,res)=>{
        res.status(200).send(cpu);
    },
    getall:async(req,res)=>{
        res.status(200).send(allWebsites);
    }
};
