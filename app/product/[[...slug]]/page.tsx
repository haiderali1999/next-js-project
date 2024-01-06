import React from "react";

interface Props {
  params: { slug: string[] };
}

const page = (props: Props) => {
  const {
    params: { slug },
  } = props;
  return <div>page {slug}</div>;
};

export default page;
