import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../Layout/Layout'
import {Router} from '@reach/router'
import { Page } from '../../Layout/page1'

export default function About ()  {
    return (
       
        <Layout >
            pakistan
        <Router basepath="/About" >
        <Page path="/page1" />
            </Router>
                     
<Link to="/About/page1/">Go to Client Page 1</Link>
                     </Layout> 
    )
}
