import React from "react";
import A from "../components/a";
import P from "../components/p";
import H2 from "../components/h2";
import Footer from "../components/footer";
import Contact from "../components/contact";

const Li = ({ children }) => {
  return <li className="text-xl list-disc ml-5">{children}</li>;
};

const About = () => {
  return (
    <>
      <div className="lg:w-2/3 lg:ml-40 px-5 pt-5 text-2xl font-rubik">
        <H2>About</H2>
        <P>
          #councilbinz is a project to photograph wheelie bins in every local
          council in Aotearoa New Zealand.
        </P>
        <P>
          In 2022, <A href="https://twitter.com/mattlane">Matt Lane</A> and{" "}
          <A href="https://twitter.com/FreyLucas">Lucas Frey</A> started the work of
          gathering pictures of local council bins from across NZ. You can help
          them by <A href="/submit-photos">submitting photos</A> as well.
        </P>
        <H2>Design and code</H2>
        <P>
          This website was started by{" "}
          <A href="https://www.harrytrimble.co.uk/">Harry Trimble</A> and{" "}
          <A href="http://tommyp.org/">Tommy Palmer</A>, for the UK version. Go
          have a look <A href="http://govbins.uk">how it is there.</A>
        </P>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default About;
