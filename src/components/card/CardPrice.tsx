import React from "react";

const CardPrice = ({ price = 0 }) => {
  return (
    <p className="text-default-500">
      <span className="underline text-inherit">đ</span>{" "}
      {price.toLocaleString("en-US")}
    </p>
  );
};

export default CardPrice;
