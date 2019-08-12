import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
    
      <SEO
        title="Ayoloka - Jagoan Eventmu"
        keywords={[`event surabaya`, `event platform`, `loket.com`, `ayoloka`,`eventbrite`,`buat event gratis`]}
      />

    </Layout>
  );
}

export default IndexPage;