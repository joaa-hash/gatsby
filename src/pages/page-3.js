import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>The Travellers</h1>
    <p>Soldier, are you afraid of the things to come?
Do you dream of the dawn-and the cold sea's heave—
And the guns' blaze and the bullets' hum—
Do you dream and tremble, and grieve?'
'I dunno, Mum,
It can't be much worse, Mum,
Than standing packed in a corridor. Mum,
Seven hours, Mum—
Coming back from leave.'</p> 
    <br />
    <Link to='/page-2'>Go back to previous poem</Link> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage;
