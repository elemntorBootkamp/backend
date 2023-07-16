import axios from 'axios';

export const funcGetByUserId = async (userId) => {
    try {
        const port = process.env.PORT;
        const token = process.env.TOKEN;
        const response = await axios.get(`${port}`, {headers: {'authorization': `Bearer ${token}`}});
        const userWebsites = response.data.filter(website => website.managerId === userId);
        return userWebsites;
    }
    catch (error) {
        return { error: error.message };
  }
}

export const funcSearch = async (userId, queryParams) => {
    try {
        let userWebsites = await funcGetByUserId(userId);
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
                userWebsites = userWebsites.filter(website =>{
                    console.log(website[key]);
                    if (Array.isArray(website[key]))
                    {
                        const arr = website[key].join(' '); 
                        return arr.includes(value);
                    }
                    else if (typeof website[key] == 'number') 
                        return website[key] === Number(value);
                    else
                        return website[key].includes(value);
                });
            }
        }
        return userWebsites;
    }
    catch (error) {
        return { error: error.message };
  }
}
