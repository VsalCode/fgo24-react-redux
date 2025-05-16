import React from "react";

const Input = ({ id, type, label ,...props}) => {
  return (
    <>
      <section className="flex flex-col gap-1 bg-white shadow-xl rounded p-10">
        <label htmlFor={id} className="font-semibold text-xl" for="name">{label}</label> <br />
        <input id={id} type={type} className="border-b-1 py-2 outline-0"  {...props} />
      </section>
    </>
  );
};

export default Input;
