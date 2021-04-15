import React from "react";

const H1 = (props) => {
  return <h1 className={`${props.className} text-4xl`}>{props.children}</h1>;
};

const H2 = (props) => {
  return <h2 className={`${props.className} text-3xl`}>{props.children}</h2>;
};

const H3 = (props) => {
  return <h3 className={`${props.className} text-2xl`}>{props.children}</h3>;
};

const H4 = (props) => {
  return <h4 className={`${props.className} text-xl`}>{props.children}</h4>;
};

const H5 = (props) => {
  return <h5 className={`${props.className} text-lg`}>{props.children}</h5>;
};

export { H1, H2, H3, H4, H5 };
