const cpu = [
    { value: 'Intel Xeon', label: 'Intel Xeon' },
    { value: 'AMD Ryzen 3', label: 'AMD Ryzen 3' },
    { value: 'AMD Ryzen 5', label: 'AMD Ryzen 5' },
    { value: 'AMD Ryzen 7', label: 'AMD Ryzen 7' },
    { value: 'ARM Cortex-A53', label: 'ARM Cortex-A53' },
    { value: 'ARM Cortex-A72', label: 'ARM Cortex-A72' },
    { value: 'ARM Cortex-A73', label: 'ARM Cortex-A73' },
    { value: 'Intel Core i7', label: 'Intel Core i7' },
    { value: 'Intel Core i5', label: 'Intel Core i5' },
    { value: 'Intel Core i3', label: 'Intel Core i3' },
];
export default {
    getAll: async (req, res) => {
        try {
            res.status(200).send(cpu);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },
};
