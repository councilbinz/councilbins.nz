import React from "react";
import A from "../components/a";
import P from "../components/p";
import H2 from "../components/h2";
import H3 from "../components/h3";

const Build = () => {
  return (
    <>
      <div className="lg:w-2/3 lg:ml-40 px-5 pt-5 text-2xl font-rubik">
        <H2>How this site is built</H2>
        <P>
          This site is built using <A href="https://nextjs.org/">Next.js</A> and{" "}
          <A href="https://tailwindcss.com/">Tailwind CSS</A>.
        </P>
        <H3>Open code</H3>
        <P>
          Go to <A href="https://github.com/govbins/govbins.uk">GitHub</A> to
          look at all the code for this site.
        </P>
      </div>
    </>
  );
};

export default Build;
