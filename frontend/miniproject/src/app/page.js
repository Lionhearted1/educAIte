import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <Link href="/signup/signup">sign Up</Link>
      <Link href="/file/file">file</Link>
      <Link href="/login/login">login</Link>
      <p
        class="codepen"
        data-height="300"
        data-default-tab="html,result"
        data-slug-hash="JjVdQGG"
        data-user="VARUN-V-the-bold"
        style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
      >
        <span>
          See the Pen{" "}
          <a href="https://codepen.io/VARUN-V-the-bold/pen/JjVdQGG">
            Responsive Neo-brutalism Dashboard by Zuzze
          </a>{" "}
          by VARUN V (
          <a href="https://codepen.io/VARUN-V-the-bold">@VARUN-V-the-bold</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      <script
        async
        src="https://cpwebassets.codepen.io/assets/embed/ei.js"
      ></script>
    </>
  );
}

export default Home;
