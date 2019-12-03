import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
}));




const IndexPage = () => {

  const classes = useStyles();


  return (
    <Layout>
      <SEO title="Home" />
        <div className={classes.root}>

          
          
        </div>
    </Layout>
  )
}

export default IndexPage
