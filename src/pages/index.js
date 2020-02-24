import React from "react";
import { Link } from "gatsby";

import Seo from "../components/Seo";

const Index = () => {
  return (
    <>
      <Seo title="Nosso Blog - PowerSite" description="Valor da descrição!" />
      <h1>Power Sites</h1>

      <p>
        <Link to="/blog">Blog</Link>
      </p>
    </>
  );
};

export default Index;
