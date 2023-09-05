import React from "react";
import Layout from "@theme/Layout";
import { InlineIcon } from "@iconify/react";

const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

console.log(recentPosts);

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
          borderTop: "2px solid #ff42cd",
          borderBottom: "2px solid #ff42cd",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
          <h1>David Clinton</h1>
          <a href="https://www.linkedin.com/in/clintondavid46/">
            <InlineIcon
              icon="ic:baseline-person-add-alt"
              style={{ color: "#ff42cd" }}
              height="30"
            />
          </a>
        </div>

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          borderBottom: "2px solid #ff42cd",
        }}
      >
        <h3>Featured Posts</h3>
        <ul>
          {recentPosts.items.slice(0, 5).map((item, index) => (
            <li key={index}>
              <a href={`${item.permalink}`}>{item.title}</a>{" "}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
