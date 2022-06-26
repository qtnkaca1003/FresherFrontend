import Layout from "components/Layout"

function AboutPage() {
  return (
    <Layout
      title="About page"
      childProps={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      About Page
    </Layout>
  )
}

export default AboutPage
