import React, { useState } from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-xl block">
      {children}
    </label>
  );
};

const TextInput = ({ name }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      className="border-2 border-solid border-black text-xl w-full bg-gray-400"
      required
    />
  );
};

const FormGroup = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};

const Upload = () => {
  const [errors, setErrors] = useState([]);

  console.log(errors && errors["photos"]);
  return (
    <>
      <div className="mx-auto w-full px-4 lg:px-0 lg:w-1/3 mb-20 mt-8 pt-5">
        <h1 className="text-3xl">Send your photos</h1>
        <iframe
          src="https://www.cognitoforms.com/f/dOnC9MM_h0OUZ3eZU-ZWiA/1"
          style={{ border: 0, width: "100%" }}
          height="720"
        ></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js"></script>
      </div>
    </>
  );
};

export default Upload;
