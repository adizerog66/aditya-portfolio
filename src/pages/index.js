import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

<div class="side-nav">
      <a class="active" href="localhost:8000">Home</a>
      <a href="page-2">Work</a>
      <a href="page-2">About</a>
      <a href="page-2">Contact</a>
    </div>
    
    <div>
      <div className="Hero">
      <div className="heroGroup">
      <p class="kerned grey"> intro </p>
      <h1> Hi! I'm <span class="yellow">Aditya</span> <span class="blue">Garikapati</span>, an interaction designer <span class="grey">looking to graduate in the summer of 2019. </span></h1>
      <p class="small grey"> Currently working at my college's incubator sculpting ideas and concepts into prototypes and realizable product strategies. </p>
      <Link to="/page-2/">View resume <i class="right"></i> </Link>
      
      </div>
     </div>
    </div>

  </Layout>
)

export default IndexPage
