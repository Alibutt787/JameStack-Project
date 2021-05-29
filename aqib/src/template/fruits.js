import React from 'react'

export default function Fruits ({pageContext}){
    console.log(pageContext);
    return (
        <div>
        <h2>{pageContext.name}</h2>
        <h2>{pageContext.frd}</h2>
        
                </div>
    )
}
