
exports.onCreatePage = async ({page , actions})=>{
const {createPage} =actions;
if(page.path.match(/^\/About/)){
    page.matchPath = "/About/*"
   createPage(page)
}

}

exports.createPages = async ({ actions, graphql })=>{
    const {createPage} =actions;
const result = await graphql(`{
   
  allContentfulMobiles {
    nodes {
      pak
      slug
      title
      image {
        description
        file {
          url
        }
      }
    }
  }

}`) 
    console.log(result);
result.data.allContentfulMobiles.nodes.forEach((obj)=>{
    createPage({

        path: `/product ${obj.slug}`,
                component: require.resolve('./src/pages/template/contentful.js'),
                context:{
                     item: obj,
                },      

    })
})
}


// exports.createPages = async function ({ actions }){

//     actions.createPage({
//         path: "my",
//         component: require.resolve(`./src/template/fruits.js`),
//         context:{

//             name:'Aqib',
//             frd:`Ali BUTT  Sarmad  Ejaz`,
//         },
//     });
//     console.log("Pakistan Zindabad");
// }