
exports.onCreatePage = async ({page , actions})=>{
const {createPage} =actions;
if(page.path.match(/^\/About/)){
    page.matchPath = "/About/*"
   createPage(page)
}

}




exports.createPages = async function ({ actions }){

    actions.createPage({
        path: "my",
        component: require.resolve(`./src/template/fruits.js`),
        context:{

            name:'Aqib',
            frd:`Ali BUTT  Sarmad  Ejaz`,
        },
    });

    console.log("Pakistan Zindabad");


}