import React from "react";

const Input = ({error, id, type, label ,...props}) => {
  return (
    <>
      <section className="section">
        <label htmlFor={id} className="font-semibold text-xl" for="name">{label}</label> <br />
        <input id={id} type={type} className="border-b-1 py-2 outline-0"  {...props} />
        {error}
      </section>
    </>
  );
};

export default Input;
