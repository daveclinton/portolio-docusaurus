import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          borderTop: "2px solid #ff42cd", // Add a top border
          borderBottom: "2px solid #ff42cd",
        }}
      >
        <h1>David Clinton</h1>
        <p>
          Hi there, I'm David. I'm a Frontend Engineer from Kenya. I'm currently
          working at Untapped Global.
        </p>
        <p>
          This is my blog where I write about many things, including, but not
          limited to React, UI Libraries, JavaScript, Chakra UI and many more
          web dev related topics.
        </p>
      </div>
    </Layout>
  );
}
