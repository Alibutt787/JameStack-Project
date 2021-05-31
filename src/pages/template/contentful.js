import React from 'react'
import { Layout } from '../../../Layout/Layout';

export default function Contentful({pageContext}) {
    console.log(pageContext.item);
    return (
     
            <Layout>
                <div  style={{textAlign:'center'}}>
              <h2>  {pageContext.item.title} </h2>
              <h2>  {pageContext.item.pak} </h2>
              <img src={pageContext.item.image.file.url} alt="This is a contenful picture" style={{width:'600', height:300}}/>
              <h2>  {pageContext.item.image.description} </h2>
            </div>
            </Layout>
            
    )
}
