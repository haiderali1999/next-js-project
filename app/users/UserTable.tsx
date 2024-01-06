import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async (props: Props) => {
  //frequently change data cache no store
  // const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"})

  //revalidate after 10 second it is only availabel in fetch function not in 3rd party labraries
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const userList: User[] = await res.json();
  const { sortOrder } = props;
  const sortedUsers = sort(userList).asc((u) =>
    sortOrder === "email" ? u.email : u.name
  );
  return (
    <div>
      <table className="table table-bordered table-zebra">
        <thead>
          <tr className="hover">
            <th>
              <Link href="/users?order=name">Name</Link>
            </th>
            <th>
              <Link href="/users?order=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="hover">
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
