const axios =require ('axios');
const token =process.env.TOKEN
 const funcGetByUserId = async (userId) => {
    try {
        const port = process.env.PORT;
        console.log(port);
        const response = await axios.get(`${port}`,{headers: {authorization: `Bearer ${token}`}});//storge action 
        const userWebsites = response.data.filter(website => website.managerId === userId);
        return userWebsites;
    }
    catch (error) {
        return { error: error.message };
  }
}

    const funcFilter = async (userId, queryParams) => {
    try {
        let userWebsites = await funcGetByUserId(userId);
       
            for (const key in queryParams) {
                const value = queryParams[key];
          
                userWebsites = userWebsites.filter(website => website[key] === value);
              }
          
              return userWebsites;
            }
            catch (error) {
                return { error: error.message };
        }}
       
        
        module.exports = funcFilter;