exports.createPages = async ({graphql ,actions})=>{
    const response = await graphql(`
     query MyQuery {
        lollies {
          getLollies {
            senderName
            recipient
            msg
            lollyTop
            lollyPath
            lollyMid
            lollyBotm
          }
        }
       }
    `)
    response.data.lollies.getLollies.forEach((lolly)=>{
       actions.createPage({
           path : `/${lolly.lollyPath}`,
           component : require.resolve('./src/templates/lollyDetailPage.tsx'),
           context : {
               lolly
           }
       })
    })
}