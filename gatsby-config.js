const dotenv = require("dotenv");

//if(process.env.NODE_ENV !== 'production'){
dotenv.config();
//}

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [ 
    
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.Ali_SpaceID,
        // Learn about environment variables: https://gatsby.dev/env-vars
      //  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      accessToken  : process.env.Ali_AccessToken,
        
      },
    },

],
};
