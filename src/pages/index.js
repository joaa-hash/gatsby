import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>What is GatsbyJS you ask?</p>
    <p>Gatsby.js is a PWA (Progressive Web App) generator. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.</p><br />
    <span>Poem 1: </span><Link to='/page-2'>Click Me</Link> <br />
    <span>Poem 2: </span><Link to='/page-3'>Click Me</Link>
    
  </Layout>
)

export default IndexPage
