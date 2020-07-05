import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Relíquia Íntima - Intimate Relic</h1>
    <p>Ilustríssimo, caro e velho amigo,
Saberás que, por um motivo urgente,
Na quinta-feira, nove do corrente,
Preciso muito de falar contigo.

E aproveitando o portador te digo,
Que nessa ocasião terás presente,
A esperada gravura de patente
Em que o Dante regressa do Inimigo.

Manda-me pois dizer pelo bombeiro
Se às três e meia te acharás postado
Junto à porta do Garnier livreiro:

Senão, escolhe outro lugar azado;
Mas dá logo a resposta ao mensageiro,
E continua a crer no teu Machado.</p> 
<p>Illustrious, dear and old friend, You will know that, for an urgent reason, On Thursday, nine in the current, I really need to talk to you. And taking advantage of the bearer, I tell you, That on that occasion you will bear in mind, The expected patent engraving In which Dante returns from the Enemy. So tell me by the fireman If at three thirty you will find yourself posted at the door of the bookseller Garnier: Otherwise, choose another unlucky place; But give the answer to the messenger right away, And continue to believe in your ax.</p>
    <br />
    <Link to='/page-3'>Go to next poem</Link> <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
