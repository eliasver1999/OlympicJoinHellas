import React from "react";

type Props = {
  url: string;
};

const Image = ({ url }: Props) => {
  return (
    <div>
      <img src={url} alt="" loading="lazy" decoding="async" />
    </div>
  );
};

export default Image;
