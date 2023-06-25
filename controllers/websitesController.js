const { logger } = require('../logger');

const websitesList = [
    {
      name: "Google",
      description: "A search engine",
      manager: "Sundar Pichai",
      datePublished: new Date("08-19-2006"),
      size: '15000 GB',
      websiteLogo: 'https://upload.wikimedia.org/wikipedia/he/f/f6/Googleisrael.png'
    },
    {
      name: "Amazon",
      description: "An online retailer",
      manager: "Andy Jassy",
      datePublished: new Date("1994-07-05"),
      size: '15000 GB',
      websiteLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png'

    },
    {
      name: "Facebook",
      description: "A social media platform",
      manager: "Mark Zuckerberg",
      datePublished: new Date("2004-02-04"),
      size: '15000 GB',
      websiteLogo: 'https://webguy.co.il/wp-content/uploads/2017/03/F_icon.svg_.png'
    },
    {
      name: "Twitter",
      description: "A microblogging platform",
      manager: "Elon Musk",
      datePublished: new Date("2006-03-06"),
      size: '15000 GB',
      websiteLogo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/twitter_logo_icon_170381.png'

    },
    {
      name: "Netflix",
      description: "An online streaming service",
      manager: "Reed Hastings",
      datePublished: new Date("1997-09-01"),
      size: '15000 GB',
      websiteLogo:'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
    },
    {
      name: "YouTube",
      description: "A video-sharing platform",
      manager: "Susan Wojcicki",
      datePublished: new Date("2005-02-15"),
      size: '15000 GB',
      websiteLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png'
    },
    {
      name: "Instagram",
      description: "A photo-sharing platform",
      manager: "Adam Mosseri",
      datePublished: new Date("2010-10-06"),
      size: '15000 GB',
      websiteLogo:'https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000'
    },
    {
      name: "LinkedIn",
      description: "A professional networking platform",
      manager: "Jeff Weiner",
      datePublished: new Date("2003-05-05"),
      size: '15000 GB',
      websiteLogo:'https://edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png'

    },
  ];
  
module.exports = {
    getAllWebsites: async (req, res) => {
        res.send(websitesList);
    },
};