import React from "react"

interface User {
  id: number
  name: string
}

const UserPage = async () => {
  //frequently change data cache no store
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  //revalidate after 10 second it is only availabel in fetch function not in 3rd party labraries
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     next: { revalidate: 10 },
  //   })
  const userList: User[] = await res.json()
  return (
    <>
      <h1>Users</h1>
      <code>{new Date().toLocaleTimeString()}</code>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UserPage
