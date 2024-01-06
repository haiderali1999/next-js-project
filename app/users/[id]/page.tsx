import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = (props: Props) => {
  const {
    params: { id },
  } = props;

  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
