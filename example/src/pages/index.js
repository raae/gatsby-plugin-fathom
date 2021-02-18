import React from "react"
import { Link } from "gatsby"
import { useFathom } from "@raae/gatsby-plugin-fathom"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { trackGoal, trackPageview } = useFathom()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={() => trackGoal("YKZ06A57", 100)}>Track goal</button>
      <br />
      <br />
      <button
        onClick={() => trackPageview({ referrer: "https://example.com" })}
      >
        Track pageview
      </button>
      <br />
      <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
