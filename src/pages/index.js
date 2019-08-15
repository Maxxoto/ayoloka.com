import React from "react";
import Helmet from "react-helmet";
// import { withPrefix, Link } from "gatsby";
// import { withPrefix } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    
    <Layout>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"/>
        <meta name="google-site-verification" content="LubiZqT6WuKIIIoUYZBCP1pXGc32ybAMAkFnOduyJBw" />
      </Helmet>
      
      <SEO
        // title=""
        keywords={[`event surabaya`, `event platform`, `loket.com`, `ayoloka`,`eventbrite`,`buat event gratis`]}
      />
    
    </Layout>
  );
}

export default IndexPage;
