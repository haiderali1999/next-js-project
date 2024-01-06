import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async (props: Props) => {
  const {
    searchParams: { sortOrder },
  } = props;
  return (
    <>
      <h1>Users</h1>
      <code>{new Date().toLocaleTimeString()}</code>
      <UserTable sortOrder={sortOrder} />
      {/* <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default UserPage;
