import React from "react";

const Options = ({ title, value, type, ...props }) => {
  return (
    <section className="section">
      <p className="text-xl font-semibold pb-5">{title}</p>
      {value.map((item) => (
        <label key={item}>
          <div className="flex gap-4">
            <input type={type} value={item} {...props} />
            <span>{item}</span>
          </div>
        </label>
      ))}
    </section>
  );
};

export default Options;
