import React from "react"
import Layout from "../layout/Layout"
import { Hero } from "../components/Home"
import Header from "../components/Header/Header"
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Header />
      Are my use of arrow functions for all components the source of the errors?
    </Layout>
  )
}

export default IndexPage
