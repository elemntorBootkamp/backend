const { logger } = require('../logger');
const axios = require('axios');

const listUsers = [
    { id: 1, name: 'hhh', email: 'hhh@fff' },
    { id: 2, name: 'ddd', email: 'hhh@fff' },
    { id: 3, name: 'eee', email: 'hhh@fff' },
    { id: 4, name: 'hhh', email: 'hhh@fff' },
];

module.exports = {
    getById: async (req, res) => {
        let _id = req.params.id;
        let user = listUsers.find((a) => a.id == _id);
        if (user == null) res.status(404).send('not found!');
        else res.send(listUsers[_id - 1]);
    },
    getAll: async (req, res) => {
        res.send(listUsers);
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
    websites: async (req, res) => {
        try{
            const response = await axios.get('http://localhost:8092/doc/website');
            res.send(response.data);
        }
        catch (error){
            return error;
        }
    },
    search: async (req, res) => {
        try {
            const user_name = req.params.userName;
            const queryParams = req.query;
            let userWebsites;
            console.log('user_name', user_name);
            console.log('queryParams', queryParams);
    
            try {
                const response = await axios.get('http://localhost:8092/doc/website');
                userWebsites = response.data.websites.filter(website => website.managerId === user_name);
                console.log('userWebsites', userWebsites);
            }
            catch (error) {
                return error;
            }
    
            console.log('============================');
            if(Object.keys(queryParams)[0] == 'searchAll')
            {
                const firstKey = Object.keys(queryParams)[0];
                userWebsites= userWebsites.filter(website => 
                    website.title.includes(queryParams[firstKey]) ||
                    website.description.includes(queryParams[firstKey]) ||
                    website.domain.includes(queryParams[firstKey]) ||
                    website.typeOfDomain.includes(queryParams[firstKey]) ||
                    website.cpu.includes(queryParams[firstKey])
                ); 
            }
            else
            {
                for (const key in queryParams) {
                    const value = queryParams[key];
                    console.log(`Received parameter - Key: ${key}, Value: ${value}`);
                    userWebsites = userWebsites.filter(website =>{
                        console.log(typeof website[key]);
                        if (Array.isArray(website[key]))
                        {
                            const arr = website[key].join(' '); 
                            console.log(arr, ' ', arr.includes(value), ' ', value);
                            return arr.includes(value);
                        }
                        else if (typeof website[key] == 'number') 
                        {
                            console.log(website[key], ' ', website[key] === Number(value), ' ', value);
                            return website[key] === Number(value);
                        }
                        else
                        {
                            console.log(website[key], ' ', website[key].includes(value), ' ', value);
                            return website[key].includes(value);
                        }
                    });
                }
            }
    
            console.log('res', userWebsites);

            res.send(userWebsites);
            //res.json(userWebsites);
        }
        catch (error) {
            return error;
        }
    }
};





    
// search: async (req, res) => {
//     try{
//         const user_name = req.params.userName;
//         const website_name = req.params.websiteName;
//         console.log('1 ' + user_name + ' ' + website_name);
//         const response = await axios.get('http://localhost:8092/doc/website');
//         console.log(response.data);
//         let userWebsite = response.data.filter(websites => websites.manager == user_name);
//         console.log('3 ', userWebsite);
//         //let userWebsites = response.data.filter(website => website.manager === user_name && website.name.includes(website_name));
//         let search = userWebsite.filter(website => website.name.includes(website_name));
//         console.log('4 ', search);
//         res.send(search);
//     }
//     catch (error) {
//         return error;
//     }
// },


// search: async (req, res) => {
//     try{
//         const user_name = req.params.userName;
//         const queryParams = req.query;
//         let userWebsite;
//         console.log('1111111111111111',user_name);
//         console.log('2222222222222222',queryParams);
//         try
//         {
//             const response = await axios.get('http://localhost:8092/doc/website');
//             userWebsite = response.data.filter(websites => websites.manager == user_name);
//             console.log('userWebsite ', userWebsite);
//         }
//         catch (error) {
//             return error;
//         }

//         for (const key in queryParams) 
//         {
//             const value = queryParams[key];
//             userWebsite = userWebsite.filter(websites => websites.key == value);

//         }

//         const filteredSites = searchUserSites(queryParams);

//         res.json(filteredSites);
      
//         const searchUserSites = (queryParams) => {
//             for (const key in queryParams) 
//             {
//                 const value = queryParams[key];
//                 console.log(`Received parameter - Key: ${key}, Value: ${value}`);
//                 console.log('=============================================================================');
//                 if (key === 'websiteName') 
//                 {
//                     filteredSites = filteredSites.filter((site) =>
//                         site.allowedName.includes(websiteName)
//                     );
//                 }
//             }
//             const websiteName = queryParams.websiteName;
//             const siteCreationDate = queryParams.siteCreationDate;
//             const permissionType = queryParams.permissionType;
      
//             // Perform the filtering based on the parameters
//             let filteredSites = getAllSites(); // Replace with your own logic to fetch all sites
      
//             if (websiteName) {
//                 filteredSites = filteredSites.filter((site) =>
//                     site.allowedName.includes(websiteName)
//                 );
//             }
      
//             if (siteCreationDate) {
//                 filteredSites = filteredSites.filter(
//                     (site) => site.creationDate === siteCreationDate
//                 );
//             }
      
//             if (permissionType) {
//                 filteredSites = filteredSites.filter(
//                     (site) => site.permissionType === permissionType
//                 );
//             }
      
//             // Add more conditions for additional parameters as needed
      
//             return filteredSites;
//         };
        
//         for (const key in queryParams) 
//         {
//             const value = queryParams[key];
//             console.log(`Received parameter - Key: ${key}, Value: ${value}`);
      
//             if (key === 'websiteName') 
//             {

//             } 
//             else if (key === 'siteCreationDate') 
//             {

//             } 
//             else if (key === 'permissionType') 
//             {

//             }
//         }
//     }
//     catch (error) {
//         return error;
//     }
// },
